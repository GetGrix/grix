# Grix 🟦📐

_A playground‑first math grid that scales from 3rd‑grade fractions to professional linear algebra._

> **Monorepo** · npm workspaces · headless core + React UI · plugin architecture

---

## ✨ What is Grix?

**Grix** turns the Cartesian plane into an open‑ended sandbox where learners drag rays, rectangles, vectors and more—discovering math concepts by pure exploration.
The same engine later powers professional features like matrix warps, eigen‑vectors and complex rotations.

- Worlds are additive:

  - **World A — Number Playground** (fractions, areas) ✅ implemented
  - **World B — Lines & Shapes** 🟡 spec ready
  - **World C — Vectors & Motion** 🟡 spec ready
  - **World D — Advanced Explorations** 🟡 spec ready

Each world is delivered as a set of _plugins_ and _tool‑metadata_—no core refactor ever required.

---

## 🗂 Repo Layout

```
/ grix
├─ packages/
│  ├─ core/   ← @getgrix/core   (headless math engine)
│  └─ ui/     ← @getgrix/ui     (React + SVG plugin host)
├─ demo-app/  ← Vite playground importing @getgrix/ui
├─ specs/     ← specs.worlda.md … specs.worldd.md (design docs)
└─ package.json  ← npm workspaces root
```

---

## 🛠 Install & Dev

```bash
# clone and install
git clone https://github.com/getgrix/grix.git
cd grix
npm install

# run the playground
npm run dev            # opens demo‑app on localhost:5173

# build all packages
npm run build
```

### Consume in your own project

```bash
npm i @getgrix/ui     # pulls @getgrix/core automatically
```

```tsx
import { AppShell } from "@getgrix/ui";

export default () => <AppShell />; // full dock + canvas + sidebar
```

or headless only:

```bash
npm i @getgrix/core
```

```ts
import { vectorMagnitude } from "@getgrix/core";
```

### CDN one‑liner

```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@getgrix/ui@0.1.0/dist/grix-ui.umd.js"></script>
<script>
  const { AppShell } = window.GrixUI;
  ReactDOM.createRoot(document.getElementById("root")).render(
    React.createElement(AppShell)
  );
</script>
```

---

## 📦 Packages

| Package           | Version                                                       | Description                                  |
| ----------------- | ------------------------------------------------------------- | -------------------------------------------- |
| **@getgrix/core** | ![npm](https://img.shields.io/npm/v/@getgrix/core?color=blue) | Headless math & geometry engine (ESM only)   |
| **@getgrix/ui**   | ![npm](https://img.shields.io/npm/v/@getgrix/ui?color=blue)   | React + SVG plugin host; ships World A tools |

> Publish with `npm run pub:core` / `npm run pub:ui` once logged in to npm.

---

## 📖 Specs

| World                 | Markdown Spec                          |
| --------------------- | -------------------------------------- |
| A — Number Playground | [`specs.worlda.md`](./specs.worlda.md) |
| B — Lines & Shapes    | [`specs.worldb.md`](./specs.worldb.md) |
| C — Vectors & Motion  | [`specs.worldc.md`](./specs.worldc.md) |
| D — Advanced          | [`specs.worldd.md`](./specs.worldd.md) |

---

## 🤝 Contributing

1. Fork & clone the repo
2. `npm install`
3. Work in a feature branch (`feat/your‑plugin`)
4. Add unit tests in the corresponding `packages/*/src/__tests__` folder
5. PR against `main` — GitHub Actions will run **vitest** & **eslint**

> Plugin authors: export `const plugin: Plugin` and add an entry in the appropriate `tools.worldX.json`.

---

## 📝 License

MIT © 2025 **getgrix**
