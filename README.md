# 🌿 Upcycle Fashion — Purana Denim, Naya Andaaz

A circular-economy school project by students of **Government Senior Secondary School, Fatehpur Chandila, Faridabad (Haryana)**.
Old denim is upcycled into eco-friendly products with a natural **neem finish**: anti-microbial, mosquito-repellent and 100% chemical-free.

## 👩‍🏫 Team

| Role | Name |
| --- | --- |
| Guide | Ms. Shilpa (PGT Home Science) |
| Guide | Ms. Shilpa (PGT Biology) |
| Student | Rajni (Class 10) |
| Student | Ridhima (Class 9) |
| Website | Gauri Arora |

## ✨ What's inside

- **Landing page**: Indian-themed design (marigold toran, mandalas, Hindi headings) covering the problem, the circular economy, the neem finish process, what students can build, government initiatives, and self-employment scope.
- **Prakriti Sort game** (`game.html`): sort 12 random everyday materials into the **Biodegradable** or **Non-biodegradable** bin by tapping or dragging, and learn a fact with every answer.

## 📁 Project structure

```
index.html        → lists the page sections in order
css/style.css     → all styles
js/main.js        → loads sections + animations
sections/*.html   → one file per section (hero, about, products, ...)
game.html         → biodegradable sorting game (standalone)
```

**Reorder or remove a section:** move or delete its `<div data-include="sections/...">` line in `index.html`.
**Add game materials:** edit the `ITEMS` list in `game.html`.

## ▶️ Run locally

The sections load with `fetch`, so open the site through a local server, not by double-clicking:

```bash
python3 -m http.server
# then open http://localhost:8000
```

Or use the **Live Server** extension in VS Code. `game.html` also works on its own.

## 🚀 Deploy

It's a static site with no build step. Import the repository on **Vercel** or enable **GitHub Pages**.

---

*© 2025 Upcycle Fashion Project · नवाचार से टिकाऊ भविष्य का निर्माण 🌿*
