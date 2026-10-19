# Assistent-AI-Metadatasystem.
# WhatsApp Cloud API Get Started


**Warning:** This documentation is for developers building on the WhatsApp Business Platform. If you are a WhatsApp user experiencing issues with your personal account, visit the [WhatsApp Help Center](https://faq.whatsapp.com/) for support.

This guide helps developers quickly get started with the WhatsApp Cloud API. It covers the basic setup steps, including registering as a developer, creating a Meta app, sending your first message, and setting up a test webhook endpoint. You'll also learn how to generate secure access tokens and send both template and non-template messages. Advanced features and further resources are introduced for deeper exploration.

---

## Download the sample app

The Jasper's Market sample app contains all of the messages and code used in the Jasper's Market demo. You can use this sample app to learn how to build an application that sends and handles WhatsApp Cloud API data.

[Download the Jasper's Market Sample App](https://github.com/fbsamples/whatsapp-business-jaspers-market)

---

## Prerequisites

- Facebook account or managed Meta account
- Developer registration
  - If not yet registered, visit the [developer registration page](https://developers.facebook.com/async/registration/) and follow the prompts.
- WhatsApp-enabled device for sending and receiving test messages

---

## Step 1. Create a new Meta app with WhatsApp

1. Open the [Meta App Dashboard](https://developers.facebook.com/apps) to create a new Meta app with the WhatsApp use case.
2. Click **Create App**.
3. Add your app's name and your email.
4. Select the **Connect with customers through WhatsApp** use case and click **Next**.
5. Select an existing business portfolio or create a new one.
6. A list of publishing requirements are listed. You may not have any at this point. Click **Next**.
7. Confirm your details, use case, and business portfolio. Click **Previous** to make changes or **Create app** to complete app creation.

After creating your app with the WhatsApp use case you are redirected to the **Customize use case > Connect on WhatsApp > Quickstart** page in the dashboard.

## Step 2. Start using the API

1. Click the **Start using the API** button to set up the API by adding a phone number and sending your first message. You are redirected to the **API Setup** page.
2. In the **API Setup** section, connect your app to a Messaging account. This connection allows your app to access the WhatsApp Cloud API and send messages on behalf of your business. Select an existing Messaging account or create a new one:
   - **To use an existing account:** Select the Messaging account from the dropdown menu.
   - **To create a new account:** Click **Create a WhatsApp Business account** and follow the prompts to set up your business profile.
5. Once connected, you will see your Messaging account ID displayed in the API Setup panel.
   - Save this ID for use in API calls.

> **Note:** If you created a new Meta Business Portfolio during app creation, a Messaging account may have been automatically created for you. Verify the connection in the API Setup section before proceeding.

---

## Step 3. Send and receive messages

1. Click **Generate access token** to generate a temporary access token to send a test message.
2. Select a **From** phone number, or add a new one, from the dropdown menu.
3. Add a **To** phone number that will receive the test message.
4. Click the **Send message** button to send your first message.
    - Make sure to retain both your test phone number ID and Messaging account ID for later use.
4. Once you receive the message you sent, make sure to reply back to keep the conversation going.

The left-side menu lists ways in which you can customize use case settings and permissions to make your app work the way you want it to. You can update these settings at any time.

- [**Permissions and features**](https://developers.facebook.com/documentation/development/create-an-app/whatsapp-use-case#permissions-and-features) - View required and optional permissions for this use case and add them to an App Review submission, if applicable.
- [**Quickstart**](https://developers.facebook.com/documentation/development/create-an-app/whatsapp-use-case#quickstart) - Start using the API and learn how to scale your business, improve ROI, and manage your Messaging account.
- [**API Setup**](https://developers.facebook.com/documentation/development/create-an-app/whatsapp-use-case#api-setup) - Generate access tokens, send and receive messages, and configure webhooks and the WhatsApp SDK.
- [**Configuration**](https://developers.facebook.com/documentation/development/create-an-app/whatsapp-use-case#configuration) - Configure webhooks and the WhatsApp SDK.
- [**Resources**](https://developers.facebook.com/documentation/development/create-an-app/whatsapp-use-case#resources) – View the WhatsApp developer documentation, Meta Blueprint courses, and support resources.
- [**Tech Provider onboarding**](https://developers.facebook.com/documentation/development/create-an-app/whatsapp-use-case#tech-provider-onboarding) – Start scaling the WhatsApp Business Platform for your business.
- [**Partner Solutions**](https://developers.facebook.com/documentation/development/create-an-app/whatsapp-use-case#partner-solutions) – Create a partner solution.
- [**Embedded Signup Builder**](https://developers.facebook.com/documentation/development/create-an-app/whatsapp-use-case#embedded-signup-builder) – Integrate Embedded Signup flow into your website or client portal.

---

## Step 4. Set up the test webhook app

You will need to set up a webhook endpoint in order to receive notifications about message statuses, such as read and delivered.

Use the sample webhook server for testing purposes by following the [Using a test webhook app](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/set-up-whatsapp-echo-bot) guide.

Once your test webhook application is established, respond in the WhatsApp chat thread you created with yourself. You will see the webhook payload in your test application like this:

```json
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "215589313241560883",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "15551797781",
              "phone_number_id": "7794189252778687"
            },
            "contacts": [
              {
                "profile": {
                  "name": "Jessica Laverdetman"
                },
                "wa_id": "13557825698"
              }
            ],
            "messages": [
              {
                "from": "17863559966",
                "id": "wamid.HBgLMTc4NjM1NTk5NjYVAGHAYWYET688aASGNTI1QzZFQjhEMDk2QQA=",
                "timestamp": "1758254144",
                "text": {
                  "body": "Hi!"
                },
                "type": "text"
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
}
```

---

## Step 5. Create a system user and generate a permanent access token

The temporary access token you created to send the `hello_world` template message expires quickly and is not suitable for development purposes.
So you should create a permanent token for use across the WhatsApp Business Platform.

1. Navigate to [Business Settings](https://business.facebook.com/latest/settings) and click **System users** in the sidebar.
2. Click the **Add+** button in the upper-right corner and follow the prompts to create a new system user.
3. Select the new system user you created, and click **Assign Assets.**
   - Select your app and toggle **Manage app** under **Full control.**
   - Select your WhatsApp account and toggle **Manage WhatsApp Business accounts** under **Full control.**
   - Click the **Assign assets** button.
4. Click **Generate token.**
   - Follow the prompts to generate your token.
   - Add the following permissions to the token:
     - [business_management](https://developers.facebook.com/docs/permissions#b)
     - [whatsapp_business_messaging](https://developers.facebook.com/docs/permissions#w)
     - [whatsapp_business_management](https://developers.facebook.com/docs/permissions#w)
   - Copy the token and store it in a secure place to be used in the later steps.

---

## Step 6. Send a non-template message

When you responded to your earlier test message, you triggered what is known as a [customer service window](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows). This 24-hour window allows you to send [non-template messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#message-types) to users on WhatsApp. With the customer service window now open, you can send a non-template message to yourself.
To do this, insert your test phone number ID, the system user access token, and your phone number in the code sample below, then paste the code into your terminal and run it.

```bash
curl 'https://graph.facebook.com/v23.0/<TEST_BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "text",
  "text": {
    "body": "Hello!"
  }
}'
```

After successfully sending your message, check your test webhook application to view the webhook event confirming the message receipt.

---

## Step 7. Finish

The WhatsApp Cloud API enables you to send messages and receive webhooks—these are the fundamental building blocks for messaging integration.
Beyond these basics, the API offers additional features such as group creation and management, as well as support for calling.
To explore these advanced capabilities, check out the "Learn more" section below.

---

## Learn more

- [Learn about the different types of non-template messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages)
- [Learn how to create and send template messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview)
- [Learn how to create and manage WhatsApp groups via API](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups)
- [Learn how to send and receive calls on WhatsApp via API](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling)
- [Learn how to add a business phone number](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)
- [Learn how to set up your own webhook server](https://developers.facebook.com/docs/graph-api/webhooks/getting-started)
- [Onboard WhatsApp Business app users](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) — allow businesses already using the WhatsApp Business app to connect their existing account and phone number to Cloud API via Embedded Signup
- [Become a partner](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/overview)
- [View WhatsApp API OpenAPI Specification](https://github.com/facebook/openapi)<img width="1280" height="1280" alt="received_2527690337640925" src="https://github.com/user-attachments/assets/48e1fa19-8af1-4b45-9c06-fcad8f2b560a" />
