# 🌍 **Grix — World A (Number Playground) · Professional‑Ready Specification**

> **Scope**
> Deliver a production‑grade _World A_ built on an architecture that effortlessly scales to future Worlds B, C & D.
> _Headless math core · Plugin/Event bus · Typed object schema & versioning · Collision‑safe undo stack · Collaboration‑ready._

---

## 0 · Monorepo Overview

| Folder          | Package             | npm scope | Purpose                                                                                            |
| --------------- | ------------------- | --------- | -------------------------------------------------------------------------------------------------- |
| `packages/core` | **`@getgrix/core`** | public    | Framework‑agnostic math/geometry engine (pure TS)                                                  |
| `packages/ui`   | **`@getgrix/ui`**   | public    | React + SVG implementation of plugin bus, dock, sidebar & canvas — ships with every _World A_ tool |
| `demo-app`      | local               | —         | Tiny Vite+React playground that imports **ui** (manual test bed)                                   |

All three live under a single GitHub repo: **`getgrix/grix`** (rename from _grix‑website_ if desired).

---

## 1 · Repository Layout

```text
/  grix/                  ← repo root ( GitHub ≙ getgrix/grix )
├─ package.json           ← npm‑workspaces root
├─ packages/
│  ├─ core/
│  │   ├─ src/            ← vectors.ts, geometry.ts, fractions.ts, schema.ts, migrations.ts …
│  │   ├─ package.json    ← name: @getgrix/core
│  │   └─ tsconfig.json
│  └─ ui/
│      ├─ src/
│      │   ├─ plugins/    ← F‑01 … F‑42 feature modules
│      │   ├─ components/ ← AppShell.tsx, Canvas.tsx, Dock.tsx, Sidebar.tsx
│      │   └─ data/tools.worldA.json
│      ├─ vite.config.ts
│      ├─ package.json    ← name: @getgrix/ui  (depends on @getgrix/core)
│      └─ tsconfig.json
└─ demo-app/
   ├─ src/main.tsx        ← imports @ grix/ui
   ├─ vite.config.ts
   ├─ index.html
   └─ package.json
```

---

## 2 · Workspaces Root `package.json`

```jsonc
{
  "name": "grix-monorepo",
  "private": true,
  "version": "0.1.0",
  "workspaces": ["packages/*", "demo-app"],
  "scripts": {
    "build": "npm run build --workspaces",
    "test": "npm run test  --workspaces",
    "dev": "npm --workspace demo-app run dev",

    "pub:core": "npm publish --workspace packages/core --access public",
    "pub:ui": "npm publish --workspace packages/ui   --access public"
  }
}
```

> **Versioning** — bump everything with `npm version patch -w`. Independent versions are fine if preferred.

---

## 3 · `@getgrix/core`

### 3.1 `packages/core/package.json`

```jsonc
{
  "name": "@getgrix/core",
  "version": "0.1.0",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "vitest run"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "vitest": "^1.5.0"
  }
}
```

### 3.2 `src/index.ts`

```ts
export * from "./fractions.js";
export * from "./vectors.js";
export * from "./geometry.js";
export * from "./schema.js";
export * from "./eventBus.js"; // exposes PluginContext & Plugin interfaces
```

Headless, deterministic, **no** DOM/React/global‑state.

---

## 4 · `@getgrix/ui`

### 4.1 `packages/ui/package.json`

```jsonc
{
  "name": "@getgrix/ui",
  "version": "0.1.0",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "files": ["dist"],
  "dependencies": {
    "@getgrix/core": "workspace:^",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "zustand": "^4.5.0"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "svgo": "^3.0.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest run"
  }
}
```

### 4.2 Vite config (UMD + ES bundles for CDN)

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "GrixUI",
      formats: ["es", "umd"],
      fileName: (format) => `grix-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
```

### 4.3 `src/index.ts`

```ts
export { AppShell } from "./components/AppShell.js"; // full UI
export { CanvasOnly } from "./components/Canvas.js"; // embed‑only
export * from "./plugins/registry.js"; // auto‑register World A plugins
```

### 4.4 World A Plugins Source List

| Plugin File                   | Provides                  | Depends       | Size      |
| ----------------------------- | ------------------------- | ------------- | --------- |
| `plugins/F01_ray.ts`          | Ray renderer + drag logic | core vectors  | \~280 LOC |
| `plugins/F02_answerLine.ts`   | Answer-line overlay       | —             | 60 LOC    |
| `plugins/F03_lattice.ts`      | Integer point markers     | F01           | 110 LOC   |
| `plugins/F07_axisApproach.ts` | Approach slider           | F01           | 90 LOC    |
| `plugins/F08_infinityWarn.ts` | Infinity flare            | F07           | 70 LOC    |
| `plugins/F30_rectSelect.ts`   | Rectangle drag            | core geometry | 180 LOC   |
| `plugins/F31_cellShade.ts`    | Flood-fill cells          | F30           | 120 LOC   |
| `plugins/F32_areaBadge.ts`    | Width×height badge        | F30           | 60 LOC    |
| `plugins/F33_flipIt.ts`       | Swap dims button          | F30           | 80 LOC    |
| `plugins/F35_factorGhost.ts`  | Render alt factor boxes   | F32           | 140 LOC   |
| `plugins/F36_primeDetect.ts`  | prime/composite emit      | F35           | 60 LOC    |
| `plugins/F38_percentArea.ts`  | Sample vs. favourable     | F30, F31      | 160 LOC   |
| `plugins/F42_gridDensity.ts`  | Toggle 1x1/10x10 subgrid  | —             | 40 LOC    |

All register via `export const plugin: Plugin`.

`plugins/registry.ts` simply imports each plugin file so side-effects run.

---

## 5 · Demo App (`demo-app`)

### 5.1 `demo-app/package.json`

```jsonc
{
  "name": "grix-demo",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "@getgrix/ui": "workspace:^"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.5.0"
  }
}
```

### 5.2 `src/main.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { AppShell } from "@getgrix/ui";

ReactDOM.createRoot(document.getElementById("root")!).render(<AppShell />);
```

---

## 6 · Core‑Level Requirements (C‑01 … C‑08)

| ID       | Capability                                  | World A Notes                     |
| -------- | ------------------------------------------- | --------------------------------- |
| **C‑01** | High‑resolution SVG grid, infinite pan/zoom | 10 px base cell, adaptive fade    |
| **C‑02** | Origin anchor at (0,0)                      | Fixed LL corner by default        |
| **C‑03** | Pointer + touch (Pointer Events)            | pinch‑zoom, two‑finger pan        |
| **C‑04** | Snap‑to‑grid toggle                         | default **ON**                    |
| **C‑05** | Global undo/redo                            | 100 steps                         |
| **C‑06** | Layer system                                | grid < areas < rays < labels < UI |
| **C‑07** | Dock & Sidebar                              | color groups, teacher hide/show   |
| **C‑08** | Metadata loader                             | reads tools.worldA.json           |

---

## 7 · World A Feature Set

| F‑ID     | Feature              | Summary                          |       |       |
| -------- | -------------------- | -------------------------------- | ----- | ----- |
| **F‑01** | Ray Renderer         | Draggable O→P ray                |       |       |
| **F‑02** | Answer Line          | Vertical x = 1                   |       |       |
| **F‑03** | Lattice Highlighter  | Integer intercept dots           |       |       |
| **F‑07** | Axis‑Approach Slider | Drag x→0; emits `limit:approach` |       |       |
| **F‑08** | Infinity Warning     | Pulses label when                | value |  >1e6 |
| **F‑30** | Rectangle Selector   | Click‑drag box                   |       |       |
| **F‑31** | Cell Shading         | Fill 1×1 squares                 |       |       |
| **F‑32** | Area Counter         | w × h badge                      |       |       |
| **F‑33** | Swap W/H             | flip dims                        |       |       |
| **F‑35** | Factor Ghost         | overlay other factor rectangles  |       |       |
| **F‑36** | Prime Detector       | emits prime/composite event      |       |       |
| **F‑38** | Probability Area     | sample vs favourable shading     |       |       |
| **F‑42** | Grid Density         | switch 1×1 / 10×10 grid          |       |       |

---

## 8 · tools.worldA.json

_(abbreviated excerpt)_

```jsonc
[
  /* ----- Green: Fraction & Ratio ----- */
  {
    "id": "ray-builder",
    "name": "Ray Builder",
    "color": "green",
    "icon": "ray.svg",
    "features": ["F-01"]
  },
  {
    "id": "answer-line",
    "name": "Answer Line",
    "color": "green",
    "icon": "line.svg",
    "features": ["F-02"]
  },
  {
    "id": "divide-by-zero-rocket",
    "name": "∞ Rocket",
    "color": "green",
    "icon": "rocket.svg",
    "features": ["F-07", "F-08"]
  },

  /* ----- Yellow: Arrays & Products ----- */
  {
    "id": "rectangle-shade",
    "name": "Rectangle Shade",
    "color": "yellow",
    "icon": "rect.svg",
    "features": ["F-30", "F-31", "F-32"]
  },
  {
    "id": "flip-it",
    "name": "Flip-It!",
    "color": "yellow",
    "icon": "flip.svg",
    "features": ["F-33"]
  },
  {
    "id": "factor-hunt",
    "name": "Factor Hunt",
    "color": "yellow",
    "icon": "factor.svg",
    "features": ["F-35", "F-36"]
  },

  /* ----- Orange/Yellow mix: Percent & Parts ----- */
  {
    "id": "shade-percent",
    "name": "Percent Grid",
    "color": "yellow",
    "icon": "percent.svg",
    "features": ["F-38", "F-42"]
  }
]
```

### 8.1 Headless Math Core (core-math/\*)

#### 8.1.2 fractions.ts

_Exact rational ops (BigInt numerator/denominator) for F-01, F-03 simplifications._

#### 8.1.3 vectors.ts

_2-D vector helpers: add, scale, magnitude, normalize._

#### 8.1.4 geometry.ts

_Axis-aligned rectangle algorithms (area, factor decomposition)._

### 8.2 UI Component Contracts

#### 8.2.1 `<Canvas />`

_Receives `objects` from store, delegates each to its plugin’s `render(el, obj)` function._

#### 8.2.2 `<Dock />`

_Builds groups from `tools.json` → `[color]` → [tool icons]`._

#### 8.2.3 `<Sidebar />`

_Live search; toggles `hiddenTools` set in store; state persisted to `localStorage`._

## 8.3Example Plugin (F-01 Ray)

```ts
export const plugin: Plugin = {
  id: "F-01",
  init(ctx) {
    ctx.bus.on("object:add", (obj) => {
      if (obj.toolId !== "ray-builder") return;
      // add SVG line + endpoint handle
    });

    ctx.bus.on("drag:endpoint", ({ obj, x, y }) => {
      obj.props.x = x;
      obj.props.y = y;
      ctx.store.update((s) => void 0); // rerender
      ctx.bus.emit("ray:update", obj);
    });
  },
};
```

Other plugins subscribe to `'ray:update'` (e.g., F-03 lattice highlighter).

---

## 9 · Publishing Workflow

```bash
# install
npm install

# build every workspace
npm run build

# run tests
npm test

# publish (core first, ui second)
npm run pub:core
npm run pub:ui
```

CDN use via **unpkg** or **jsDelivr** after publish:

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

## 🔜 Future Worlds

World B (Lines & Shapes), World C (Vectors & Motion), World D (Advanced) will **only** add extra plugins and new `tools.worldX.json` files. Core APIs stay intact.

---

## ✅ Acceptance Checklist

- [ ] C‑01 … C‑08 implemented.
- [ ] Plugins **F‑01,02,03,07,08,30,31,32,33,35,36,38,42** coded & tested.
- [ ] Dock shows 7 color‑grouped tool icons.
- [ ] Undo/redo covers rays & rectangles.
- [ ] JSON‑schema validation passes for every save.
- [ ] 60 fps with 200 rectangles + 10 rays.
- [ ] WCAG 2.2 AA (keyboard, contrast, focus outlines).

---

### 🚀 Copy this spec into your pipeline — build once, extend forever. **Grix** starts here.
