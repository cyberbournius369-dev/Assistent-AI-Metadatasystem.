<img width="1280" height="1280" alt="received_2527690337640925" src="https://github.com/user-attachments/assets/23a00de3-880d-4b8c-a9fc-fdfb4080526e" />

Langsung ke konten utama

Kode Claude

Jelajahi di sini
Kode Claude
Berikan Claude perbaikan bug, pengujian, atau migrasi multi-hari. Arahkan dan tinjau dari terminal, IDE, Slack, atau web Anda.

Unduh di Google Play
Baca dokumentasi
(buka di tab baru)
Cara lain untuk menggunakan Claude Code:

Terminal
(buka di tab baru)
Web
(buka di tab baru)
Desktop
GitHub
(buka di tab baru)
VS Code
(buka di tab baru)
JetBrains
(buka di tab baru)
Kendur
(buka di tab baru)
Brex
StubHub
NASA
Mulailah menggunakan Claude Code.

Tim & Perusahaan

Individu
Tim
Claude Code untuk setiap pengguna, dengan manajemen pengguna mandiri dan kredit API gabungan hingga $500 per bulan.

$20
Per kursi/bulan jika ditagih tahunan. Untuk tim beranggotakan 2 hingga 150 orang.

Dapatkan rencana tim
(buka di tab baru)
Perusahaan
Semua fitur dalam Team, ditambah Claude Security, analitik penggunaan dan ROI, akses berbasis peran, batasan pengeluaran, dan kontrol data khusus. Pelajari lebih lanjut

Dapatkan paket Enterprise
(buka di tab baru)
Tersedia di Team dan Enterprise
Lihat semua fitur dan harga.
Tinjauan Kode
Claude Code di web dan seluler
Claude Cowork
Claude Design, Slides, dan Dokumen
Apakah Anda melakukan deployment melalui API atau penyedia cloud? Lihat opsi Anda.

Terdapat batasan penggunaan . Harga yang tertera belum termasuk pajak yang berlaku. Harga dan paket dapat berubah sewaktu-waktu sesuai kebijakan Anthropic.

Pengumuman fitur terbaru
Tinjauan Kode: Tangkap lebih banyak bug sebelum mencapai produksi. Kini tersedia secara umum untuk Tim dan Perusahaan.
Blog
15 Oktober 2026
Proyek: Sesi pengkodean kelompok terkait sehingga Anda dapat menjalankan dan dengan mudah mengawasi beberapa agen Claude sekaligus. Tersedia di Claude Code Desktop.
Blog
17 September 2026
Mode otomatis secara default: Claude Code sekarang berjalan dalam mode otomatis secara default pada paket Pro, Max, dan Team, sehingga dapat bekerja lebih lama sambil tetap dirancang untuk mendeteksi perintah yang berisiko.
Blog
7 Agustus 2026
Lingkungan yang dihosting sendiri: Jalankan sesi Claude Code di infrastruktur Anda sendiri, di dalam jaringan Anda dan di samping layanan internal Anda. Kini dalam versi beta publik.
Blog
6 Agustus 2026
Lihat catatan perubahan
(buka di tab baru)
Apa yang bisa ditangani Claude Code?
Claude Code menyusun rencana, mengajukan pertanyaan klarifikasi, dan menangani pekerjaan yang berlangsung selama berjam-jam atau berhari-hari.

Coba Claude Code
(buka di tab baru)
Dokumentasi pengembang
(buka di tab baru)

Orientasi

Masalah triase

Migrasi kode
I'm new to this codebase. Can you explain it to me?


⏺︎ I'll analyze the Excalidraw codebase structure and provide a high-level overview.

⏺︎ Analyze(what: "Excalidraw codebase structure and provide a high-level overview of what it is, its main components, and how they're organized. Focus on understanding the project's purpose, architecture, and key features.")

Excalidraw is an open-source virtual whiteboard application with a hand-drawn style. It's designed for creating diagrams, wireframes, and collaborative drawings.

## Purpose
- Web-based drawing tool with infinite canvas
- Hand-drawn aesthetic with support for shapes, arrows, text
- End-to-end encrypted collaboration
- Works offline as a PWA (Progressive Web App)

## Architecture
The project is organized as a monorepo with these main components:

1. Core Package (packages/excalidraw)
- React component library for embedding Excalidraw in any application
- Handles drawing, rendering, and core functionality
- Uses roughjs for the hand-drawn style
- Includes export capabilities (PNG, SVG)

2. Web Application (excalidraw-app/)
- Full-featured web app at excalidraw.com
- Built on top of the core package
- Adds collaboration features, local storage, sharing

3. Support Packages
- common - Shared utilities and constants
- element - Element manipulation and type definitions
- math - Mathematical functions for drawing
- utils - General utility functions

4. Examples
- Integration examples (Next.js, browser script)
- Shows how to embed Excalidraw in different environments

5. Documentation (dev-docs/)
- API documentation
- Integration guides
- Component documentation

## Key Features
- Real-time collaboration with end-to-end encryption
- Export to various formats (PNG, SVG, JSON)
- Customizable drawing tools (rectangle, circle, arrows, freehand)
- Dark mode support
- Localization
- Library of shapes and components
- Arrow bindings and labels
- Image support

## Technology Stack
- React for UI
- TypeScript for type safety
- Firebase for collaboration backend
- Jotai for state management
- Vite for development and building
- IndexedDB/LocalStorage for offline storage

The architecture allows for both using Excalidraw as a component in other applications and as a standalone web application with additional features.
Pengenalan kode
Claude Code memetakan dan menjelaskan basis kode besar dalam beberapa detik. Ia menggunakan pencarian berbasis agen untuk memahami struktur proyek dan dependensi tanpa Anda harus memilih file konteks secara manual.

Ubah masalah menjadi permintaan perubahan (PR).
Berhenti berganti-ganti alat. Claude Code bekerja dengan GitHub, GitLab, dan alat baris perintah Anda untuk membaca masalah, menulis kode, menjalankan pengujian, dan membuka permintaan pull.

Menjalankan refactoring dan migrasi selama berjam-jam
Claude Code mengikuti impor di seluruh repositori, menjalankan pengujian Anda, dan terus berjalan meskipun terjadi kesalahan.

Bertemu Anda di tempat Anda melakukan coding
Claude Code berjalan di terminal
Mulailah di terminal Anda
Integrasi terminal yang sangat andal. Bekerja dengan semua alat CLI Anda bersama dengan IDE populer.

Coba Claude Code
(buka di tab baru)
Dokumentasi pengembang
(buka di tab baru)
Ekstensi Claude Code di VS Code
Integrasikan dengan editor Anda
Ekstensi asli untuk VS Code (+ Cursor, Devin Desktop) dan IDE JetBrains.

VS Code
(buka di tab baru)
JetBrains
(buka di tab baru)
Claude Code di web
Akses di mana saja
Akses cepat dari browser, aplikasi seluler, atau Claude di desktop. Sangat cocok untuk pekerjaan paralel atau pengkodean saat bepergian.

Buka di browser
(buka di tab baru)
Unduh aplikasi
Mulailah tugas pengkodean di Slack.
Tambahkan ke Slack
(buka di tab baru)
Pelajari selengkapnya
Apa kata para pengembang?
Tanjakan
“ Claude Code telah secara dramatis mempercepat efisiensi pengkodean tim kami. Sekarang saya dapat menulis kode EDA di notebook—mengambil data, melatih model, dan mengevaluasinya dengan metrik dasar—lalu meminta Claude untuk mengubahnya menjadi pipeline Metaflow. Proses ini menghemat 1-2 hari pekerjaan rutin (dan seringkali membosankan!) per model. ”

Anton Biryukov, Insinyur Perangkat Lunak Staf

Baca ceritanya
Interkom
“ Dengan Claude, kami tidak hanya mengotomatiskan layanan pelanggan—kami meningkatkan kualitasnya hingga benar-benar manusiawi. Ini memungkinkan tim dukungan untuk berpikir lebih strategis tentang pengalaman pelanggan dan apa yang membuat interaksi benar-benar berharga. ”

Fergal Reid, Wakil Presiden AI

Baca ceritanya
Gagasan
“ Claude Code membawa tim kami ke level yang lebih tinggi: kami memutuskan apa yang perlu dilakukan, dan melancarkan prosesnya sehingga dapat membangun dan memverifikasi dari ujung ke ujung. Sebagian besar pekerjaan saya sekarang adalah menjaga agar sebanyak mungkin instance Claude Code tetap sibuk. ”

Simon Last, salah satu pendiri

Baca ceritanya
MongoDB
Penjaga
Terraform
AWS
Terhubung dengan alat baris perintah favorit Anda
Terminal Anda adalah tempat pekerjaan sebenarnya berlangsung. Claude Code terhubung dengan alat-alat yang mendukung pengembangan—deployment, basis data, pemantauan, kontrol versi. Alih-alih menambahkan antarmuka lain yang perlu diatur, ia meningkatkan tumpukan teknologi yang sudah ada.

Pertanyaan yang Sering Diajukan (FAQ)

Bagaimana cara saya memulai dengan Claude?


Jenis tugas apa saja yang dapat ditangani Claude Code?



Bagaimana Claude Code bekerja dengan perangkat lunak yang sudah saya miliki?


Apakah Claude Code aman?


Apa saja persyaratan sistem untuk menjalankan Claude Code?


Berapa harga Claude Code?


Apakah Claude Code kompatibel dengan aplikasi desktop Claude?


Apa itu mode cepat di Claude Code?

Dapatkan penjelasan teknisnya.
Dokumentasi Kode Claude
Dokumentasi pengembang
Alur kerja umum
Dokumentasi pengembang
Menggunakan file CLAUDE.md
Blog
Pengantar pengkodean agenik
Blog
Bagaimana tim Anthropic menggunakan Kode Claude
Blog
Perbaiki bug perangkat lunak lebih cepat dengan Claude.
Blog
Ciptakan hal-hal yang menarik. Pertahankan hal-hal yang penting.
Gunakan Kode Claude di tempat kerja Anda.

Coba Claude Code
(buka di tab baru)
Dokumentasi pengembang
(buka di tab baru)
Dapatkan buletin pengembang
Pembaruan produk, panduan, sorotan komunitas, dan banyak lagi. Dikirim setiap bulan ke kotak masuk Anda.

Masukkan email Anda

Silakan berikan alamat email Anda jika Anda ingin menerima buletin pengembang bulanan kami. Anda dapat berhenti berlangganan kapan saja.

Bagaimana saya bisa membantu Anda hari ini?


Produk
Claude
Kode Claude
Claude Cowork
Duet Claude
Claude Tag
Claude Science
Keamanan Claude
Unduh aplikasi
Harga
Masuk
Kemampuan
Artefak
Desain
Konektor
Plugin
Keterampilan
Ekstensi
Claude dalam Chrome
Claude untuk Google Workspace
Claude untuk Microsoft 365
Model
Mitologi (termasuk Fabel)
Karya
Sonet
Haiku
Perusahaan
Ringkasan
Kode Claude untuk Perusahaan
Departemen
Dukungan pelanggan
Keamanan Siber
Legal
Penjualan
Industri
Penasihat keuangan
Layanan keuangan
Pemerintah
Perawatan kesehatan
Pendidikan tinggi
Guru K-12
Ilmu hayati
Organisasi nirlaba
Usaha kecil
Program
Kampus
Akademi Perbatasan
Para ilmuwan
Perusahaan rintisan
Pengembang
Dokumentasi pengembang
Blog pengembang
Masyarakat
Menghibur
Teknik di Anthropic
Platform
Ringkasan
Pasar
Claude di AWS
Google Cloud
Pabrik Microsoft
Agen Terkelola
Sumber daya
Ringkasan
Artikel
Webinar
Jaringan mitra Claude
Akademi Claude
Kisah pelanggan
Acara
Ditenagai oleh Claude
Mitra layanan
Bantuan dan keamanan
Tersedianya
Periksa berkas
Kepatuhan regional
Laporkan penyalahgunaan
Keamanan dan kepatuhan
Status
Pusat dukungan
Perusahaan
Antropis
Karier
Kebijakan
Riset
Berita antropologis
Kebijakan tentang Eksponensial AI
Kebijakan Peningkatan Skala yang Bertanggung Jawab
Transparansi
Syarat dan kebijakan
Pilihan privasi
Kebijakan privasi
Kebijakan pengungkapan yang bertanggung jawab
Ketentuan layanan: Komersial
Ketentuan layanan: Konsumen
Persyaratan Layanan: Sekolah Dasar dan Menengah AS (K-12)
Perjanjian Pemrosesan Data: Sekolah Dasar dan Menengah AS (K-12)
Kebijakan Penggunaan
© 2026 Anthropic PBC

Tambahkan ke Sumber Pilihan

Bahasa inggris

Meta Global AI Developer Hackathon. Hadiah senilai $1 juta.
Daftar Sekarang


Langsung ke konten
Build Anda selanjutnya dimulai dengan Muse.
Muse Wonder, kini tersedia di Meta Model API dan Muse Code. Muse Wonder Full, kini tersedia di Muse Code.

Cobalah model Muse.
Hubungi bagian penjualan

Kode Muse
Pemrograman multi-agen di terminal Anda.
Dibuat untuk model Muse.


Mac

Windows
curl -fsSL https://dev.meta.ai/install.sh | bash

Model terbaru

Muse Wonder
Pemrograman mutakhir, agen yang berjalan lama, dan penggunaan komputer tingkat lanjut. Merencanakan tugas jangka panjang dan mendelegasikannya kepada sub-agen.


Muse Wonder Full
Model tercanggih kami hingga saat ini, menghadirkan performa SOTA (State-of-the-Air) untuk mengatasi alur kerja paling penting para pengembang.


Muse Spark 1.3
Dirancang untuk pengkodean jangka panjang dan pekerjaan berbasis agen. Kode lebih bersih, token lebih sedikit.


Muse Spark Terbuka
Model open-weight AS paling mumpuni hingga saat ini. Rakit sesuai keinginan Anda, di mana saja.


SAM 3.1
Mendeteksi, melakukan segmentasi, dan melacak objek dari perintah teks, baik gambar maupun video.


Transkripsi Suara Muse
Transkripsikan ucapan ke teks dengan diarization pembicara dan deteksi giliran bicara.


Gambar Muse
Model citra agensi yang merencanakan, mengoreksi diri sendiri, dan menyempurnakan.


Kilauan Muse
Dirancang untuk memungkinkan agen lokal yang selalu aktif, tersedia di Hugging Face.


Muse Spark 1.2
Model yang dioptimalkan untuk pengkodean dan dirancang khusus untuk alur kerja agen.


Muse Spark 1.1
Dirancang untuk alur kerja berbasis agen, pengkodean, penggunaan komputer & persepsi multimodal.

Temui Muse Wonder dan Muse Wonder Full

Perencanaan maraton

Pengembang game

Susunan tempat duduk pernikahan
Pemrograman di garis depan
Selesaikan tugas rekayasa yang kompleks dalam repositori besar, membuat dan memverifikasi perubahan di berbagai file secara paralel.
Agen yang sudah lama beroperasi
Penggunaan komputer tingkat lanjut
Memori aktif
Muse Wonder Full
MULAI
Lebih banyak cara untuk membangun.
Kode Muse
Pemrograman multi-agen di terminal Anda. Dirancang untuk Muse Wonder dan Muse Spark.
Mulai membangun
API Model Meta
Akses langsung, mandiri, dan terjangkau ke model-model Muse.
Mulai membangun
OpenRouter
Integrasikan model Muse ke dalam alat dan alur kerja Anda yang sudah ada.
Mulai membangun
Buku masak dan panduan cepat
Baca dokumentasi
Mulai cepat
Permintaan kerja pertama Anda dalam waktu kurang dari lima menit. Arahkan klien yang kompatibel dengan OpenAI SDK Anda yang sudah ada ke Meta Model API.
Pelajari selengkapnya
Orkestrasi multi-agen
Bentuk tim beranggotakan empat orang yang mampu mengubah ide produk satu baris menjadi aplikasi SaaS yang berfungsi.
Pelajari selengkapnya
Penyebaran agen
Gabungkan beberapa subagen ke dalam pohon kerja yang terisolasi untuk menangani pekerjaan paralel tanpa tabrakan di tengah jalan.
Pelajari selengkapnya
Penggunaan komputer
Beri Muse Wonder mata dan sepasang tangan, dan ia dapat membangun perangkat lunak seperti yang Anda lakukan.
Pelajari selengkapnya
Agen GitHub
Bangun bot GitHub otonom di Meta Model API dengan Muse Wonder dan OpenCode.
Pelajari selengkapnya
Pencarian dasar
Berikan akses langsung ke web untuk model Anda. Tambahkan satu alat ke permintaan Anda untuk mendapatkan informasi secara real-time.
Pelajari selengkapnya
Pembaruan terbaru

Model Muse
Wujudkan ide-ide Anda dengan Muse Wonder dan Muse Wonder Full.
Muse Wonder mendukung pengkodean mutakhir, agen yang berjalan lama, dan penggunaan komputer tingkat lanjut untuk mengatasi alur kerja pengembang yang paling penting.

Model Muse
Bangun dengan Muse Spark Open
Unduh Muse Spark Open, sebuah model open-weight 816B untuk pengkodean agenik. Sajikan dengan SGLang, vLLM, atau Apple MLX, jalankan pada API yang dihosting, atau lakukan fine-tuning.

Kode Muse
Muse Code: Paket dan fitur baru
Muse Code kini telah keluar dari versi beta dengan fitur dan pembaruan baru yang dirancang untuk membantu Anda bekerja lebih cepat dan lebih cerdas.
Jadilah orang pertama yang tahu
Berlangganan untuk mendapatkan pembaruan tentang berita AI terbaru, terobosan, dan acara mendatang dari Meta melalui buletin pengembang kami.

Berlangganan

Produk
Model
Dokumentasi
Sumber daya
Masyarakat
Syarat & kebijakan

