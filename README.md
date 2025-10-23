# Jekyll Markdown Logbook (GitHub Pages)

**What you get**
- Splash page at `/`.
- Logbook at `/logbook/` with pagination.
- Entries are **Markdown files** in `_posts/` (no build step for you; GitHub Pages builds it).

## Deploy
1. Create a new GitHub repo (public is fine).
2. Upload everything in this folder to the repo root.
3. Go to **Settings → Pages** and set:
   - **Source**: Deploy from a branch
   - **Branch**: `main` and **/(root)**
4. Save — your site will build automatically.

## Add new entries
Create a Markdown file in `_posts/` named like `YYYY-MM-DD-title.md` with this front matter:
```md
---
layout: post
title: "Week 44 – Oct 27–Nov 2 2025"
date: 2025-11-02 12:00:00 -0400
tags: [weekly]
---

Write Markdown here. You can include tables, images, links, etc.
```
- Images: add to `assets/images/` and reference like `/assets/images/your-file.jpg`.
- Pagination is automatic on `/logbook/`. The page size is set in `_config.yml` (`paginate: 5`).

## Customize theme
- Colors are defined in `assets/css/style.css` (`--lav`, `--grass`).
- Header/footer/layout: `_layouts/default.html`.
