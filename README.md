# Lost Burushaski MVP

A community-driven Burushaski language platform built to preserve the language, enable structured contributions, and allow dialect-aware learning.

## Tech Stack
- Next.js (App Router)
- TypeScript (Strict logic)
- Tailwind CSS (Mobile-first, clean UI)
- Firebase Auth & Firestore

## How to Run Locally

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Duplicate `.env.example` and rename it to `.env.local`. Fill in your Firebase config keys. You will also need to parse your Firebase Admin private key correctly if setting up SSR admin logic.

3. **Run the Development Server**
   ```bash
   npm run dev
   ```

4. **Open Application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Current Setup
This codebase is fully scaffolded out, strictly matching the architectural design:
- `lib/type/index.ts` houses schema enums for TS validation.
- All auth bindings and Dashboard views are cleanly mocked under `app/`.
