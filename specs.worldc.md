# 🌍 **Grix — World C (Vectors & Motion) · Professional‑Ready Specification**

> **Dependency Note** • World C plugs directly into the _World A + B_ foundation. No core/schema changes—just new plugins, tools, and icons.

---

## 0 · Scope of World C

| Theme                              | Learning Outcomes                                     |
| ---------------------------------- | ----------------------------------------------------- |
| Vector fundamentals                | magnitude, direction, scalar multiples, unit vectors  |
| Vector addition & projection       | Parallelogram rule, dot product, component breakdown  |
| Polar & parametric motion          | Polar grid overlay, parametric animator, path tracing |
| Coordinate transformations (light) | Polar ↔ Cartesian read‑outs                           |

World C stops **before** matrix transforms/eigenvectors (those arrive in World D).

---

## 1 · New Feature Catalogue Entries

| F‑ID     | Feature               | Summary                                      |
| -------- | --------------------- | -------------------------------------------- |
| **F‑12** | Scalar Multiples      | Ghost handles at k·(x,y); draggable slider   |
| **F‑17** | Second‑Vector Support | Create additional vectors tail‑to‑tail       |
| **F‑18** | Dot‑Product Projector | Projection line + numeric value              |
| **F‑22** | Polar Grid Overlay    | Concentric circles + radial spokes           |
| **F‑23** | Parametric Animator   | Animate P(t) from (r(t),θ(t)) or (x(t),y(t)) |
| **F‑24** | Curve Tracer          | Fade‑tail path history of the animator       |

_(Features F‑13,14,16 from World B remain available and are reused here.)_

---

## 2 · `tools.worldC.json` (excerpt)

```jsonc
[
  /* ——— Purple: Vector Basics ——— */
  {
    "id": "scalar-multiple",
    "name": "Scalar Stretch",
    "color": "purple",
    "icon": "scale.svg",
    "features": ["F-12"]
  },
  {
    "id": "vector-add",
    "name": "Vector +",
    "color": "purple",
    "icon": "vadd.svg",
    "features": ["F-17"]
  },
  {
    "id": "dot-project",
    "name": "Dot Project",
    "color": "purple",
    "icon": "dot.svg",
    "features": ["F-18"]
  },

  /* ——— Teal: Polar & Motion ——— */
  {
    "id": "polar-grid",
    "name": "Polar Grid",
    "color": "teal",
    "icon": "polar.svg",
    "features": ["F-22"]
  },
  {
    "id": "param-anim",
    "name": "Param Anim",
    "color": "teal",
    "icon": "anim.svg",
    "features": ["F-23", "F-24"]
  }
]
```

> _Icons follow 24×24 SVG spec; place in `ui/src/assets/`._

---

## 3 · Plugin Implementation Notes

| F‑ID | Core Logic                                                               | UI Hooks                       |     |                           |
| ---- | ------------------------------------------------------------------------ | ------------------------------ | --- | ------------------------- |
| F‑12 | `ghost = k·v` for k = 0.5,1,2,…; slider emits `vector:scale`             | ghost arrowheads, label _k_    |     |                           |
| F‑17 | Adds second vector object type; supports drag; bus event `vector:update` | Parallelogram auto‑fills       |     |                           |
| F‑18 | Listens to two vectors; draws projection line; calculates \`dot(u,v)/    | v                              | \`  | numeric badge near shadow |
| F‑22 | Renders polar grid under SVG layer; toggles via tool eye icon            | integrates with zoom           |     |                           |
| F‑23 | UI form: x(t), y(t) or r(t),θ(t); eval every frame                       | emits `param:update` per step  |     |                           |
| F‑24 | Subscribes to `param:update`; pushes point into fading polyline          | tail length setting (n points) |     |                           |

---

## 4 · Acceptance Checklist

- [ ] Plugins **F‑12,17,18,22,23,24** implemented & unit‑tested.
- [ ] Five new tool icons appear in Dock (purple & teal groups).
- [ ] Vector addition parallelogram renders within 2 ms redraw.
- [ ] Param animator runs 60 fps tracing Lissajous curve for 2 min.
- [ ] All World A & B files load with new World C build (no schema bump).
- [ ] WCAG 2.2 AA maintained (keyboard access to scalar slider, etc.).

---

### 🚀 Import this spec after Worlds A & B ship; add the six plugins & tools to unlock the full **Vectors & Motion** experience.
