# Waseem Sajjad — Portfolio

Dark-mode React portfolio · React Router · Tailwind CSS · Vite · **Runs with Bun**

---

## ▶️ Run in VS Code with Bun

```bash
# 1. Open this folder in VS Code
# 2. Open terminal  →  Ctrl + `

bun install
bun run dev

# Open: http://localhost:5173
```

> **Install Bun (if not installed):**
> ```bash
> # Windows (PowerShell)
> powershell -c "irm bun.sh/install.ps1 | iex"
>
> # Mac / Linux
> curl -fsSL https://bun.sh/install | bash
> ```

---

## 📸 How to Add Your Photo (when ready)

**Step 1** — Put your photo in:
```
src/assets/photo.jpg
```

**Step 2** — Open `src/data/portfolioData.js` and add at the very top:
```js
import myPhoto from "../assets/photo.jpg";
```

**Step 3** — Find `photo: null` and change to:
```js
photo: myPhoto,
```

✅ Done! Photo shows automatically in Navbar + Home + About.

---

## 📁 Folder Structure

```
waseem-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
│
└── src/
    ├── main.jsx              ← React root + BrowserRouter
    ├── App.jsx               ← Routes + Custom cursor
    ├── index.css             ← Tailwind + cursor styles
    │
    ├── data/
    │   └── portfolioData.js  ← ⭐ Edit ALL content here
    │
    ├── hooks/
    │   └── useTyping.js      ← Custom typing hook (ref-based, no bugs)
    │
    ├── assets/
    │   └── photo.jpg         ← 👈 Drop YOUR photo here
    │
    ├── components/
    │   ├── Navbar.jsx        ← NavLink routing, photo/initials logo
    │   └── Footer.jsx
    │
    └── pages/
        ├── Home.jsx          →  /
        ├── About.jsx         →  /about
        ├── Skills.jsx        →  /skills
        ├── Projects.jsx      →  /projects
        ├── Contact.jsx       →  /contact
        └── NotFound.jsx      →  /* (404)
```

---

## ✅ What's in this version

| Feature | Status |
|---------|--------|
| React Router v6 (real URLs) | ✅ |
| NavLink with active highlight | ✅ |
| Custom orange cursor | ✅ |
| Urdu greeting on Home | ✅ |
| Real GitHub + Live links | ✅ |
| Photo placeholder (add anytime) | ✅ |
| No LinkedIn (add later in portfolioData.js) | ✅ |
| No resume links | ✅ |
| No skill progress bars | ✅ |
| Scroll to top on route change | ✅ |
| 404 page | ✅ |
| Bun compatible | ✅ |
| Pure Tailwind (no CSS files) | ✅ |
| Accessible (aria, focus, roles) | ✅ |

---

## 🌐 Deploy Free

```bash
bun run build
bunx vercel      # deploy to Vercel instantly
```
