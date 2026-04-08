# Search and Community System

## Search Requirement
Search must work by meaning, not just exact word matching.

If a user searches for an English concept such as `anxiety`, the system should be able to return entries like `restless`, `uneasy`, or conceptually similar expressions if the exact modern term is not used in historic or community entries.

## Search Layers

### 1. Exact Match
- Burushaski word
- English gloss
- transliteration
- alternate spelling

### 2. Fuzzy Match
- misspellings
- close variants
- dialect spellings
- singular and plural style differences where relevant

### 3. Semantic Match
- related meanings
- concept similarity
- phrase level understanding
- culturally equivalent expressions

### 4. Synonym and Alias Layer
- anxiety
- restlessness
- inner worry
- unease
- disturbed feeling
- related expressions stored as search aliases

## Entry Data Needed for Strong Search
Each entry should support richer metadata than a plain translation pair.

Recommended fields:
- Burushaski term
- transliteration variants
- literal meaning
- English glosses
- example sentences
- concept tags
- dialect
- contributor notes
- accepted semantic aliases

## Ask a Word System
Users should be able to ask a word or meaning question when search results are not enough.

## Duplicate Prevention
The ask flow should prevent duplicate questions in two stages.

### Stage 1: Live Suggestions While Typing
As the user types, show:
- matching previous questions
- related concepts
- close word entries
- unanswered similar questions
- answered similar questions

### Stage 2: Duplicate Check Before Submission
Before the question is posted, run a stronger duplicate check and show the user possible matches.

Possible actions:
- view existing answers
- continue and post anyway

## Notification Logic
When a new question is asked:
- notify relevant contributors first
- prioritize matching dialect contributors
- allow opt-in answering notifications
- broaden notifications only if a question remains unanswered

## Answer Quality Controls
Answers should support:
- ratings
- endorsements
- dialect tags
- examples
- verification markers
- accepted or preferred answer logic

## Question Statuses
Suggested statuses:
- asked
- similar answer exists
- needs review
- answered by community
- verified
- disputed
