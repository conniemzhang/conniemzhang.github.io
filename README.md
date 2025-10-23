# Splash + Paginated Logbook (Lavender × Grass)

**What you get**
- `index.html` — splash page
- `logbook.html` — paginated logbook (Prev/Next + numbers) with search & sort
- `scripts/entries.js` — where you add/edit entries (supports `body` *or* rich `html`)
- `assets/styles.css` — theme (lavender & grass-green)
- `assets/moss-sketch.jpg` — placeholder image for your Week 43 entry (replace with your own)

## Deploy on GitHub Pages
1. Create a repo on GitHub (e.g., `my-site`).
2. Upload everything at the repo root.
3. **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / **(root)** → **Save**.

## Add entries
Edit `scripts/entries.js` and append objects to `ENTRIES`. You can use plain text:
```js
{ date: "2025-11-01", title: "Daily log", body: "Quick update.", tags:["robotics"] }
```
…or rich HTML (to support tables/images like the weekly template):
```js
{ date: "2025-11-02", title: "Week 44", html: "<h2>Week 44</h2><p>…</p>" }
```

- **Page size**: tweak `PAGE_SIZE` inside `logbook.html` (default 5).
- **Link to a page**: `/logbook.html?page=2`.
- **Images**: put them in `assets/` and reference like `assets/your-image.jpg`.

Enjoy!
