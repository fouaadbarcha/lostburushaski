# Lost Burushaski – Rules

## 1. Architecture Rules

- Do NOT change the tech stack
- Do NOT migrate to another framework
- Do NOT introduce unnecessary dependencies
- Do NOT restructure folders without explicit instruction

---

## 2. Code Modification Rules

- Do NOT rewrite entire files unless explicitly required
- Do NOT touch unrelated files
- Do NOT remove existing functionality
- Always use the smallest safe change

---

## 3. Data Rules

All word entries MUST include:

- burushaskiWord
- dialect
- englishMeaning
- urduMeaning
- pronunciation
- partOfSpeech
- exampleSentence
- alternateSpellings
- status

---

## 4. Dialect Rules

Allowed dialects:

- Hunza
- Nagar
- Yasin

Rules:
- dialect must always be specified
- dialect values must be consistent
- no merging of dialects

---

## 5. Submission Rules

- all new entries MUST default to: `pending`
- only approved entries are publicly visible
- contributors cannot self-approve

---

## 6. Role Rules

Roles:

- visitor
- contributor
- moderator
- admin

Rules:
- only moderators/admins can approve/reject
- protected routes must enforce role checks

---

## 7. UI Rules

- mobile-first ONLY
- no heavy UI frameworks
- no clutter
- no unnecessary animations
- forms must be simple and usable

---

## 8. Validation Rules

- validate all inputs
- prevent empty required fields
- sanitize user input
- never trust client-side data

---

## 9. Firebase Rules

- no direct client writes without validation
- enforce Firestore security rules
- structure collections clearly

---

## 10. Performance Rules

- avoid unnecessary re-renders
- avoid large bundles
- do not introduce heavy libraries

---

## 11. Security Rules

- do NOT expose API keys
- use environment variables properly
- protect authenticated routes
- enforce role-based access

---

## 12. Change Control Rules

Before making changes:
- understand current code
- preserve working logic

After changes:
- explain what changed
- explain why

---

## 13. Forbidden Actions

The agent MUST NOT:

- refactor entire project without request
- introduce new architecture patterns
- remove validation
- bypass security checks
- hardcode sensitive values
- break existing routes
- change naming conventions randomly

---

## 14. MVP Scope Rules

DO NOT implement yet:

- advanced search
- AI features
- audio uploads
- gamification
- reputation systems
- Standard Burushaski engine

Focus ONLY on MVP features.

---

## 15. Output Rules

Every response must:

- follow instructions.md
- respect rules.md
- produce clean, usable code
- avoid placeholders unless explicitly allowed