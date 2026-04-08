# WordPress Plugin Architecture

## Recommendation
Build the app as a custom WordPress plugin, not as theme logic.

This keeps the system portable, cleaner, and easier to grow.

## High-Level Structure

```text
wp-content/
└── plugins/
    └── lost-burushaski/
        ├── lost-burushaski.php
        ├── uninstall.php
        ├── readme.txt
        ├── composer.json
        ├── app/
        │   ├── bootstrap/
        │   ├── config/
        │   ├── core/
        │   ├── modules/
        │   ├── dashboard/
        │   ├── admin/
        │   ├── api/
        │   ├── services/
        │   ├── repositories/
        │   ├── frontend/
        │   ├── database/
        │   ├── assets/
        │   └── support/
        ├── templates/
        ├── languages/
        ├── vendor/
        └── tests/
```

## Main Systems

### 1. Lexicon System
- dialects
- concepts
- words
- variants
- examples

### 2. Search System
- exact matching
- fuzzy matching
- semantic matching
- search ranking
- duplicate detection

### 3. Community System
- questions
- answers
- ratings
- endorsements
- notifications

### 4. Standardization System
- standard candidates
- review workflow
- promotion logic
- revision history

### 5. Learning System
- courses
- lessons
- quizzes
- progress tracking

### 6. Dashboard System
- admin dashboard
- contributor dashboard
- learner dashboard

### 7. Governance System
- moderation
- settings
- audit logs
- roles and permissions

## Dashboard Breakdown

### Admin Dashboard
- total words
- total concepts
- pending reviews
- search trends
- standard candidates
- moderation queue

### Contributor Dashboard
- questions waiting for answers
- review queue
- contribution stats
- trust score
- endorsements

### Learner Dashboard
- saved words
- recent searches
- courses
- progress
- recommendations
- notifications

## Database Direction
Use a hybrid model.

### Use custom post types for:
- public word pages
- public question pages
- public course pages

### Use custom tables for:
- relationships
- search index
- ratings
- endorsements
- notification logs
- saved words
- progress
- audit and moderation data

## Suggested Table Names
- `wp_lb_dialects`
- `wp_lb_concepts`
- `wp_lb_words`
- `wp_lb_word_variants`
- `wp_lb_word_examples`
- `wp_lb_questions`
- `wp_lb_question_matches`
- `wp_lb_answers`
- `wp_lb_ratings`
- `wp_lb_endorsements`
- `wp_lb_notifications`
- `wp_lb_notification_preferences`
- `wp_lb_standard_candidates`
- `wp_lb_standard_words`
- `wp_lb_courses`
- `wp_lb_lessons`
- `wp_lb_quizzes`
- `wp_lb_user_progress`
- `wp_lb_saved_words`
- `wp_lb_search_logs`
- `wp_lb_search_index`
- `wp_lb_flags`
- `wp_lb_audit_logs`
- `wp_lb_reputation`
