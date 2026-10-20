<img width="1280" height="1280" alt="received_2527690337640925" src="https://github.com/user-attachments/assets/5688b80d-37b3-4ce8-b2c1-a3e36d3ce114" />
# Assistent-AI-Metadatasystem.
Langsung ke konten
API Model Meta

Run inference

Table of contents
Run Muse Spark Open on your own infrastructure or call it through a hosted inference provider. The self-hosted runtimes load the released checkpoints and use the Muse Spark Open chat format described in the 
prompting guide
.

Runtime	Best for	Checkpoints	Serving API
SGLang
High-throughput serving for concurrent users	BF16, NVFP4	OpenAI-compatible HTTP
vLLM
Production serving, high throughput	BF16, NVFP4	OpenAI-compatible HTTP
TensorRT-LLM
Optimized serving on NVIDIA Blackwell, on a single 4-GPU node	NVFP4	OpenAI-compatible HTTP
NVIDIA Dynamo
Disaggregated serving and KV-aware routing	NVFP4	OpenAI-compatible HTTP
Hugging Face Transformers
Native Python implementation for research and custom pipelines	BF16, NVFP4	Python API
llama.cpp
Portable inference across Metal, CUDA, ROCm, Vulkan, and CPU	ggml-org GGUFs	OpenAI-compatible HTTP
Unsloth
Local inference on macOS, Windows, Linux, and WSL	Unsloth Dynamic GGUFs	OpenAI- and Anthropic-compatible HTTP
MLX
Inference on Apple silicon, across two or four Mac Studio computers	NVFP4	OpenAI-compatible HTTP
To call the model without provisioning GPUs, use a 
hosted provider
.

Muse Spark Open is a mixture-of-experts model that serves across multiple GPUs. NVFP4 serves at TP4 on 4 × B300 and BF16 at TP8 on 8 × B300. Read 
Choose a checkpoint
 before you provision hardware.

The commands on this page load each checkpoint by its Hugging Face repository ID, such as meta-models/Muse-Spark-Open-816B-A42B-NVFP4, and the runtime downloads the weights from Hugging Face. If you 
downloaded the weights from Meta
, replace the repository ID with the path to your local folder, such as ./muse-spark-open-nvfp4.

Stream long reasoning
Muse Spark Open produces long reasoning traces at higher reasoning strengths. Request streaming (stream: true) for reasoning workloads so long generations don't hit request timeouts. See 
Recommended settings
.

Self-host
Each tab is a quick start for one runtime: a command that starts a server or, for Transformers, a script that loads the model and generates a reply. Each runtime's section below covers prerequisites, checkpoint variants, and sending requests.


SGLang

vLLM

TensorRT-LLM

Transformers

llama.cpp

Unsloth

MLX
bash

sglang serve \
  --model-path meta-models/Muse-Spark-Open-816B-A42B-NVFP4 \
  --tp-size 4 \
  --ep-size 4 \
  --quantization modelopt_fp4 \
  --moe-runner-backend flashinfer_trtllm \
  --mem-fraction-static 0.8 \
  --host 0.0.0.0 \
  --port 30000 \
  --enable-layernorm-sp \
  --enable-megamoe-for-layernorm-sp \
  --speculative-algorithm DFLASH \
  --speculative-draft-model-path RadixArk/Muse-Spark-Open-DFlash2 \
  --speculative-draft-attention-backend fa4 \
  --speculative-num-draft-tokens 8 \
  --mm-feature-transport cpu \
  --enable-hierarchical-cache \
  --hicache-size 200 \
  --reasoning-parser muse \
  --tool-call-parser muse
The SGLang and vLLM tabs both serve NVFP4 on 4 × B300; the SGLang tab adds MegaMoE. Each runtime's section below has the other variants.

SGLang
Serve Muse Spark Open with 
SGLang
, an inference framework for low-latency, high-throughput serving on anything from a single GPU to a large distributed cluster.

Links
SGLang blog post on Muse Spark Open
: the features SGLang supports for Muse Spark Open at launch.

SGLang cookbook page for Muse Spark Open
: detailed deployment options.

DFlash2 draft model
: a DFlash2 checkpoint trained for speculative decoding with Muse Spark Open.

Install
Run Muse Spark Open with this Docker image:

bash

docker pull lmsysorg/sglang:dev-muse-spark-open
For host setup, see the 
SGLang installation documentation
.

Start the server
To serve NVFP4 checkpoint:

bash

sglang serve \
  --model-path meta-models/Muse-Spark-Open-816B-A42B-NVFP4 \
  --tp-size 4 \
  --ep-size 4 \
  --quantization modelopt_fp4 \
  --moe-runner-backend flashinfer_trtllm \
  --mem-fraction-static 0.8 \
  --host 0.0.0.0 \
  --port 30000 \
  --enable-layernorm-sp \
  --enable-megamoe-for-layernorm-sp \
  --speculative-algorithm DFLASH \
  --speculative-draft-model-path RadixArk/Muse-Spark-Open-DFlash2 \
  --speculative-draft-attention-backend fa4 \
  --speculative-num-draft-tokens 8 \
  --mm-feature-transport cpu \
  --enable-hierarchical-cache \
  --hicache-size 200 \
  --reasoning-parser muse \
  --tool-call-parser muse
To serve BF16 checkpoint:

bash

sglang serve \
  --model-path meta-models/Muse-Spark-Open-816B-A42B \
  --tp-size 8 \
  --ep-size 8 \
  --dtype bfloat16 \
  --mem-fraction-static 0.85 \
  --host 0.0.0.0 \
  --port 30000 \
  --enable-layernorm-sp \
  --enable-megamoe-for-layernorm-sp \
  --speculative-algorithm DFLASH \
  --speculative-draft-model-path RadixArk/Muse-Spark-Open-DFlash2 \
  --speculative-draft-attention-backend fa4 \
  --speculative-num-draft-tokens 8 \
  --mm-feature-transport cpu \
  --enable-hierarchical-cache \
  --hicache-size 200 \
  --reasoning-parser muse \
  --tool-call-parser muse
Recommended settings
Untuk performa prefill terbaik pada checkpoint NVFP4, jalankan prefill dengan paralelisme sekuens dan kernel MegaMoE ( --enable-layernorm-sp --enable-megamoe-for-layernorm-spyang mana kedua perintah server di atas sudah memenuhi syarat). Prefill dibagi di keempat rank dan lapisan MoE-nya berjalan di MegaMoE; dekode tetap berada di kernel TensorRT-LLM MoE.

Untuk menyetelnya, tambahkan perintah berikut --attention-backend trtllm_mha --page-size 128ke perintah server NVFP4 di atas, dan tetapkan batas token MegaMoE sebelum memulainya:

pesta

export SGLANG_OPT_DEEPGEMM_MEGA_MOE_NUM_MAX_TOKENS_PER_RANK=8192
SGLANG_OPT_DEEPGEMM_MEGA_MOE_NUM_MAX_TOKENS_PER_RANKMengatur jumlah maksimum token yang memicu MegaMoE. Meningkatkannya dapat meningkatkan kinerja pengisian awal pada ukuran batch yang lebih besar, tetapi menggunakan lebih banyak memori perangkat.

Penguraian kode spekulatif
Itu
Model draf DFlash2
mengusulkan blok berisi delapan token draf per langkah, dan Muse Spark Open memverifikasinya dalam satu kali proses. Kedua perintah server di atas mengaktifkannya dengan --speculative-algorithm DFLASHdan tiga --speculative-*flag setelahnya. Hapus keempat flag tersebut untuk menjalankan tanpa dekode spekulatif.

HiCache
HiCache memindahkan cache KV ke memori host yang dipin, sehingga prefiks yang dikeluarkan dipulihkan alih-alih dihitung ulang. Kedua perintah server di atas mengaktifkannya dengan --enable-hierarchical-cache --hicache-size 200.

--hicache-sizeadalah memori host yang dipin per rank tensor-parallel, dalam GB: perintah NVFP4 (empat rank) memin 800 GB dan perintah BF16 (delapan rank) memin 1,6 TB. Untuk menentukan ukuran tingkat host relatif terhadap pool KV perangkat, berikan --hicache-ratio N. Hapus kedua flag untuk melayani tanpa HiCache.

Pisahkan isi awal dan dekode
Prefill menjalankan MegaMoE dan paralelisme sekuens dengan HiCache. Decode menjalankan kernel TensorRT-LLM MoE dengan DFlash2. Jalankan prefill dan decode sebagai dua server pada masing-masing empat GPU, dengan router di depannya yang menerima permintaan klien:

B300: kedua server berbagi satu node 8-GPU, pra-pengisian pada GPU 0–3 dan dekode pada GPU 4–7.
GB300: setiap server menggunakan node 4-GPU penuh, jadi pengisian awal dan dekode berjalan pada node yang terpisah.
1. Siapkan lingkungan untuk perangkat keras Anda. Jalankan blok yang sesuai sebelum memulai setiap server.

Di B300, di terminal pengisian awal:

pesta

export MC_INTRANODE_NVLINK=true
export MC_TCP_ENABLE_CONNECTION_POOL=true
export SGLANG_MOONCAKE_CUSTOM_MEM_POOL=INTRA_NODE_NVLINK
export CUDA_VISIBLE_DEVICES=0,1,2,3
Pada B300, di terminal dekode:

pesta

export MC_INTRANODE_NVLINK=true
export MC_TCP_ENABLE_CONNECTION_POOL=true
export SGLANG_MOONCAKE_CUSTOM_MEM_POOL=INTRA_NODE_NVLINK
export CUDA_VISIBLE_DEVICES=4,5,6,7
Pada GB300, baik pada node prefill maupun node decode:

pesta

export NCCL_NVLS_ENABLE=1
export NCCL_MNNVL_ENABLE=1
export NCCL_CUMEM_ENABLE=1
export SGLANG_MOONCAKE_CUSTOM_MEM_POOL=NVLINK
export MC_FORCE_MNNVL=1
2. Mulai server pengisian awal (MegaMoE, paralelisme sekuens, dan HiCache) pada port 30001:

pesta

sglang serve \
  --model-path meta-models/Muse-Spark-Open-816B-A42B-NVFP4 \
  --quantization modelopt_fp4 \
  --moe-runner-backend flashinfer_trtllm \
  --tp-size 4 --ep-size 4 \
  --attention-backend trtllm_mha --page-size 128 \
  --mem-fraction-static 0.8 \
  --reasoning-parser muse --tool-call-parser muse \
  --enable-layernorm-sp --enable-megamoe-for-layernorm-sp \
  --enable-hierarchical-cache --hicache-size 200 \
  --speculative-algorithm DFLASH \
  --speculative-draft-model-path RadixArk/Muse-Spark-Open-DFlash2 \
  --speculative-draft-attention-backend fa4 \
  --speculative-num-draft-tokens 8 \
  --disaggregation-mode prefill \
  --disaggregation-transfer-backend mooncake \
  --host 0.0.0.0 --port 30001
3. Mulai server dekode (kernel TensorRT-LLM MoE dan DFlash2) pada port 30002, di terminal kedua pada B300 atau pada node dekode di GB300:

pesta

sglang serve \
  --model-path meta-models/Muse-Spark-Open-816B-A42B-NVFP4 \
  --quantization modelopt_fp4 \
  --moe-runner-backend flashinfer_trtllm \
  --tp-size 4 --ep-size 4 \
  --attention-backend trtllm_mha --page-size 128 \
  --mem-fraction-static 0.8 \
  --reasoning-parser muse --tool-call-parser muse \
  --speculative-algorithm DFLASH \
  --speculative-draft-model-path RadixArk/Muse-Spark-Open-DFlash2 \
  --speculative-draft-attention-backend fa4 \
  --speculative-num-draft-tokens 8 \
  --disaggregation-mode decode \
  --disaggregation-transfer-backend mooncake \
  --host 0.0.0.0 --port 30002
4. Mulai router setelah kedua server aktif. Ganti <prefill-host>dan <decode-host>dengan alamat yang dapat dijangkau oleh router; pada B300, keduanya adalah 127.0.0.1.

pesta

sglang-router launch \
  --pd-disaggregation \
  --prefill http://<prefill-host>:30001 8998 \
  --decode http://<decode-host>:30002 \
  --host 0.0.0.0 --port 8000
8998Setelah URL pra-isi, terdapat port bootstrap server pra-isi. Kirim permintaan klien ke router pada port 8000: dalam skrip di bawah ini
Kirim permintaan
, ubah port dari 30000 menjadi 8000.

Kirim permintaan
Berikut adalah skrip sederhana untuk mengirim permintaan:

Python

from openai import OpenAI
client = OpenAI(
    base_url="http://127.0.0.1:30000/v1",
    api_key="null",
    timeout=600.0,
)
model = client.models.list().data[0].id
response = client.chat.completions.create(
    model=model,
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Briefly explain: what is SGLang?"},
    ],
    temperature=1.0,
    top_p=1.0,
    max_tokens=16384, # For setting the maximum number of output tokens
    reasoning_effort="high", # Can be one of low/medium/high/xhigh. xhigh by default.
)
choice = response.choices[0]
print("Reasoning:", getattr(choice.message, "reasoning_content", None))
print("Content:", choice.message.content)
print("Finish reason:", choice.finish_reason)
Untuk cara lain mengirim permintaan, seperti curl atau Python requests, lihat
Tutorial SGLang
.

Lagi
Untuk menjalankan Muse Spark Open pada GPU AMD atau Intel Xeon, lihat
Platform perangkat keras
. Itu
Halaman buku masak SGLang
memiliki lebih banyak opsi penyebaran.

Untuk informasi lebih lanjut tentang SGLang, lihat
Situs web SGLang
dan
Blog LMSYS
.

vLLM
Sajikan Muse Spark Buka dengan
vLLM
di balik titik akhir yang kompatibel dengan OpenAI.

Tautan
Resep vLLM untuk Muse Spark Open
Blog peluncuran vLLM untuk Muse Spark Open
Prasyarat
Bobot yang diunduh. Lihat
Dapatkan modelnya
.
GPU NVIDIA atau AMD. Lihat
Pilih pos pemeriksaan
.
Memasang
Gambar yang sudah jadi tersedia untuk kedua vendor:

NVIDIA:vllm/vllm-openai:muse-spark-open
AMD:vllm/vllm-openai-rocm:muse-spark-open
Gunakan salah satu image Docker di atas untuk menjalankan Muse Spark Open.

Mulai server
NVFP4 pada 4 × B300, dengan dekode spekulatif DSpark:

pesta

export VLLM_USE_RUST_FRONTEND=1

vllm serve meta-models/Muse-Spark-Open-816B-A42B-NVFP4 \
    --tensor-parallel-size 4 \
    --enable-expert-parallel \
    --max-model-len 1048576 \
    --reasoning-parser muse \
    --tool-call-parser muse \
    --enable-auto-tool-choice \
    --speculative-config '{"method":"dspark","model": "Inferact/Muse-Spark-Open-DSpark","num_speculative_tokens":7,"draft_sample_method":"probabilistic","rejection_sample_method":"block","enable_adaptive_verification":true}'
Untuk BF16, sajikan meta-models/Muse-Spark-Open-816B-A42Bdengan --tensor-parallel-size 88 × B300 dan simpan bendera lainnya.

--max-model-len 1048576Melayani jendela konteks penuh sebanyak 1.048.576 token. Memori KV pada lapisan perhatian penuh meningkat seiring dengan panjang konteks, jadi jika beban kerja Anda membutuhkan lebih sedikit, kurangi seperti yang dijelaskan dalam
Panjang konteks
.

Kirim permintaan
vLLM mengekspos endpoint yang kompatibel dengan OpenAI pada port 8000:

keriting

curl http://localhost:8000/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "meta-models/Muse-Spark-Open-816B-A42B-NVFP4",
    "messages": [{"role": "user", "content": "Refactor this module."}],
    "reasoning_effort": "xhigh"
  }'
Upaya penalaran defaultnya adalah xhigh; atur reasoning_effortke low, medium, high, atau xhigh. Lihat
Kekuatan penalaran
.

Penalaran dikembalikan secara terpisah dari content, dan panggilan alat tiba sebagai tool_callsarray standar. Penguraian terjadi di sisi server, sehingga kerangka kerja yang kompatibel dengan OpenAI tidak memerlukan penanganan khusus model.

Kirim gambar, video, dan audio.
keriting

curl http://localhost:8000/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "meta-models/Muse-Spark-Open-816B-A42B-NVFP4",
    "messages": [{"role": "user", "content": [
      {"type": "image_url", "image_url": {"url": "https://example.com/screenshot.png"}},
      {"type": "video_url", "video_url": {"url": "https://example.com/demo.mp4"}},
      {"type": "audio_url", "audio_url": {"url": "https://example.com/clip.wav"}},
      {"type": "text",      "text": "What is happening here, and when?"}
    ]}]
  }'
Token berhenti
Muse Spark Open perlu berhenti pada <|eot|>token akhir teks. Jangan pernah berhenti pada <|eom|>, yang mengakhiri pesan sementara giliran berlanjut. Lihat
Token berhenti
.

TensorRT-LLM
NVIDIA TensorRT-LLM
Server ini menjalankan Muse Spark Open pada GPU NVIDIA Blackwell melalui server yang kompatibel dengan OpenAI ( trtllm-serve). Implementasi yang telah divalidasi menjalankan checkpoint NVFP4 pada satu node Blackwell 4-GPU (tensor parallel 4, expert parallel 4). Konfigurasi ini menggunakan cache KV FP8, grafik CUDA, prefill chunked, dan penggunaan kembali blok cache KV. Server ini mendukung input gambar, video, dan audio, decoding terpandu (mode JSON dan skema JSON), pemanggilan alat, dan decoding spekulatif opsional.

Tautan
Panduan penerapan Muse Spark Open untuk TensorRT-LLM
Contoh yang dapat dijalankan dan konfigurasi penyajian yang telah divalidasi
Blog teknis NVIDIA: skalakan alur kerja pengkodean agen dengan Muse Spark Open di NVIDIA GB300 NVL72
Memasang
Dukungan Muse Spark Open ada di cabang TensorRT-LLM feat/musespark-open. Bangun TensorRT-LLM dari cabang tersebut; tidak ada kontainer atau wheel rilis yang sudah dibuat sebelumnya yang menyertakan dukungan Muse Spark Open.

Kloning cabang dan bangun dari kode sumber mengikuti petunjuk berikut.
panduan membangun dari kode sumber
Satu-satunya perbedaan dari panduan tersebut adalah cabang dan arsitektur Blackwell CUDA ( 100-real):

pesta

git clone --branch feat/musespark-open https://github.com/NVIDIA/TensorRT-LLM.git
cd TensorRT-LLM
git lfs pull
Kemudian, di dalam kontainer pengembangan TensorRT-LLM (lihat panduan untuk develtag kontainer dan flag yang diperlukan docker run), bangun dan instal dalam mode yang dapat diedit, dengan menargetkan Blackwell:

pesta

python3 scripts/build_wheel.py --use_ccache -a "100-real" \
    --skip_building_wheel --linking_install_binary
pip install -e .
Anda juga memerlukan checkpoint Muse Spark Open format Hugging Face yang lengkap beserta file tokenizer dan prosesornya:
meta-model/Muse-Spark-Open-816B-A42B-NVFP4
(varian BF16,
meta-model/Muse-Spark-Open-816B-A42B
(juga diterbitkan). Checkpoint NVFP4 mengirimkan bobot expert yang telah dirouting dan telah dikuantisasi ke NVFP4; tidak diperlukan langkah kuantisasi tambahan.

Mulai server
Muse Spark Open at TP4/EP4 fits on a single Blackwell 4-GPU node, so trtllm-serve launches directly (no multi-node launcher needed). Write the recommended settings (next section) to a YAML file and pass it with --config:

bash

trtllm-serve meta-models/Muse-Spark-Open-816B-A42B-NVFP4 \
    --config serve_config.yaml \
    --custom_tokenizer musespark_open \
    --tool_parser musespark \
    --reasoning_parser musespark
Pass --custom_tokenizer musespark_open, --tool_parser musespark, and --reasoning_parser musespark explicitly; the two parsers enable tool-call and reasoning-content extraction on /v1/chat/completions. The server listens on localhost:8000. Add --host 0.0.0.0 --port 8000 if it needs to be reachable from other hosts. The server is ready when the log shows Application startup complete; the first query may take longer due to warmup.

Recommended settings
Start from the validated aggregated serving configuration, serve_config.yaml, and tune it for your workload:

YAML

tensor_parallel_size: 4
moe_expert_parallel_size: 4
enable_attention_dp: false
max_batch_size: 256
max_num_tokens: 8192
max_seq_len: 49152
trust_remote_code: true
enable_chunked_prefill: true
disable_overlap_scheduler: false
attn_backend: TRTLLM
allreduce_strategy: NCCL
guided_decoding_backend: xgrammar
cuda_graph_config:
  max_batch_size: 256
  enable_padding: true
moe_config:
  backend: TRTLLM
kv_cache_config:
  # FP8 KV cache is required on GB300 (SM103) when chunked prefill or
  # block reuse is enabled.
  dtype: fp8
  enable_block_reuse: true
  enable_partial_reuse: true
  free_gpu_memory_fraction: 0.8
Notes:

FP8 KV cache is required on GB300 (SM103) with chunked prefill or KV reuse. For this model's head dimension (64), the fused paged-context attention kernel exists only for the FP8 KV-cache dtype; a 16-bit KV cache in that combination is refused at startup.
max_seq_len: 49152 is the validated serving window; the model supports up to 1M tokens of context. Longer windows need proportionally more KV-cache memory.
On out-of-memory errors, reduce kv_cache_config.free_gpu_memory_fraction, max_batch_size, or max_seq_len.
Send requests
The server exposes the OpenAI-compatible API:

curl

curl http://localhost:8000/v1/chat/completions -H "Content-Type: application/json" -d '{
    "model": "meta-models/Muse-Spark-Open-816B-A42B-NVFP4",
    "messages": [{"role": "user", "content": "Where is New York?"}],
    "max_tokens": 16384
}'
Muse Spark Open is a reasoning model: with --reasoning_parser musespark, each chat response returns the chain-of-thought in a separate reasoning_content field and the user-facing answer in content. Both are drawn from the same max_tokens budget, so set max_tokens large enough to cover the reasoning and the answer. Too small a budget is spent entirely on reasoning and returns an empty content with "finish_reason": "length".

Guided decoding (JSON mode and JSON schema via the xgrammar backend) works through the standard response_format field. The constraint applies to content (the answer), so the budget must also leave room for the model to finish reasoning first:

curl

curl http://localhost:8000/v1/chat/completions -H "Content-Type: application/json" -d '{
    "model": "meta-models/Muse-Spark-Open-816B-A42B-NVFP4",
    "messages": [{"role": "user", "content": "Give me a city and its country as JSON."}],
    "max_tokens": 16384,
    "response_format": {"type": "json_object"}
}'
Image, video, and audio inputs are accepted through the standard multimodal chat-completions content parts; multimodal token budgets c
