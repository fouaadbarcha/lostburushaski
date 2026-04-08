# Lost Burushaski

Lost Burushaski is a WordPress-based language platform for preserving, organizing, expanding, and standardizing Burushaski across the three major dialects: Hunza, Nagar, and Yasin.

This repository currently contains the project documentation, product direction, information architecture, and proposed WordPress plugin architecture for the first build.

## Project Goals

- Keep Hunza, Nagar, and Yasin dialect data separate and trustworthy
- Build a meaning-aware search system, not just keyword matching
- Let users ask language questions and receive community answers
- Prevent duplicate questions through live matching and semantic similarity
- Build a future **Standard Burushaski** layer for learners and non-native speakers
- Turn validated standard entries into a structured language course over time

## Core Product Principles

- Dialects remain legitimate and separate
- Search should return results by meaning, not exact wording only
- Community contributions matter, but authority and trust matter more than raw popularity
- Standard Burushaski should be curated, not automatically crowd-decided
- The system should grow from dictionary to community knowledge engine to course platform

## Major Language Layers

### 1. Dialect Layer
- Hunza
- Nagar
- Yasin

Each dialect stores its own words, examples, and accepted variants.

### 2. Concept Layer
A shared meaning layer that connects equivalent or related words across dialects.

Example:
- Concept: anxiety / restless feeling / inner worry
- Hunza entry
- Nagar entry
- Yasin entry

### 3. Standard Burushaski Layer
A future curated layer for learners.

A word can become part of Standard Burushaski only if it is:
- widely understandable
- consistent
- teachable
- contextually correct
- endorsed by trusted contributors and experts
- highly rated

## Repository Contents

- `docs/product-overview.md`
- `docs/search-and-community-system.md`
- `docs/dialect-and-standard-model.md`
- `docs/wordpress-plugin-architecture.md`
- `docs/mvp-roadmap.md`
- `docs/repository-structure.md`

## Proposed Build Stack

- WordPress
- Custom plugin for core app logic
- Custom database tables for app data
- REST API endpoints for frontend interactions
- Dashboard system for admin, contributors, and learners

## Suggested Build Approach

### Phase 1
- Dialects
- Concepts
- Words
- Basic search
- Ask a word
- Answers

### Phase 2
- Ratings
- Duplicate detection
- Notifications
- Moderation

### Phase 3
- Semantic search improvements
- Standard Burushaski candidate system
- Expert endorsements

### Phase 4
- Courses
- Lessons
- Progress tracking
- Learner dashboard

## Status

This repository is currently documentation-first. It is meant to be the starting point for implementation.
