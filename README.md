# 🌍 AI Translation App (Expo + Supabase + Google Gemini APIs)

Welcome to the **AI Translation App**, a mobile-first application built using the **Expo Framework** and powered by **Supabase** on the backend. This app is designed to bridge language barriers through real-time **text-based**, **voice-based**, and **conversational AI translation** powered by **Google Gemini APIs**, including **Speech-to-Text (STT)**, **Text-to-Speech (TTS)**, and **Flash 2.0 Translation**.

---

## 🚀 Features

### ✅ Text-Based Translation
- Translate written input between multiple languages
- Fast and context-aware translation using Gemini Flash 2.0

### 🎙 Voice-Based Translation
- Speak in your native language
- Real-time transcription using Gemini STT
- Instant translation with Flash 2.0
- Listen to the translated audio with Gemini TTS

### 🤖 Conversational AI Interaction
- Set goals and contexts (e.g., travel, interview, shopping)
- Speak or type in natural language
- AI responds with real-time translated speech
- Chat history stored and searchable

---

## 🛠️ Tech Stack

| Layer        | Technology                     |
|--------------|--------------------------------|
| **Frontend** | [React Native](https://reactnative.dev/) via [Expo](https://expo.dev) |
| **Backend**  | [Supabase](https://supabase.io) - Auth, Database, Storage |
| **AI APIs**  | [Google Gemini STT, TTS, Flash 2.0 (Vertex AI)](https://cloud.google.com/vertex-ai/docs/generative-ai) |
| **Storage**  | Supabase Storage for voice logs and TTS audio |
| **Languages**| JavaScript / TypeScript        |

---

## 📊 Architecture Overview (Mermaid)

```mermaid
graph TD
  A[User (Mobile App)] --> B1[Text Input]
  A --> B2[Voice Input]
  A --> B3[Chat UI Interaction]

  %% Text Translation Flow
  B1 --> C1[Google Flash 2.0<br/>(Text Translation)]
  C1 --> D1[Translated Output (Text)]

  %% Voice Translation Flow
  B2 --> C2[Gemini Speech-to-Text<br/>(STT)]
  C2 --> C3[Google Flash 2.0]
  C3 --> C4[Gemini Text-to-Speech<br/>(TTS)]
  C4 --> D2[Translated Output (Audio)]

  %% Conversational AI Chat Flow
  B3 --> C5[Google Flash 2.0<br/>(With Context)]
  C5 --> C6[Gemini Text-to-Speech]
  C6 --> D3[Spoken AI Response]

  %% Backend Infrastructure
  A --> E[Supabase Backend]
  E --> E1[Authentication]
  E --> E2[Database<br/>(Profiles, History, Sessions)]
  E --> E3[Storage<br/>(Voice Logs, Audio Files)]
  E --> E4[Edge Functions / Node API Gateway]

  %% Link backend with flows
  D1 --> E2
  D2 --> E3
  D3 --> E2
  
```

## 🙌 Credits
### Built with 💙 by Vishadh Labs 
