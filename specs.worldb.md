# 🌍 **Grix — World B (Lines & Shapes) · Professional‑Ready Specification**

> **Dependency Note** • World B builds directly on the architecture delivered in _World A_.
> _No changes_ to core packages, schema, plugin bus, or UI shell — we **only** add new plugins, tool metadata, and optional UI icons.

---

## 0 · Scope of World B

| Goal                 | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| Algebraic slopes     | Positive / negative / zero / undefined slope exploration      |
| Distance & triangles | Pythagorean, distance formula, right‑triangle drops           |
| Trigonometry intro   | Live sin/cos/tan ratios, angle arcs, unit‑circle spin         |
| Shape measures       | Midpoint, diagonal, perimeter; signed areas                   |
| Inequality regions   | Shade half‑planes & polygonal intersections for basic systems |

Delivered as **new plugins (F‑IDs), new tools JSON, and new SVG icons**.

---

## 1 · Feature Catalogue Additions

| F‑ID     | Feature                  | Summary                                             |
| -------- | ------------------------ | --------------------------------------------------- |
| **F‑04** | Slope Label              | Live rise/run label on active ray                   |
| **F‑05** | Slope Badge              | Auto‑classify +, –, 0, ∞                            |
| **F‑06** | Ratio Table              | Auto‑populate (x, y) multiples for direct variation |
| **F‑09** | Distance Ruler           | √(x² + y²) read‑out on any segment                  |
| **F‑10** | Right‑Triangle Drop      | Perpendicular legs from point to axes               |
| **F‑11** | Squares Shading          | a², b², c² colored blocks (Pythagorean visual)      |
| **F‑13** | Angle Arc                | Degree / radian arc + live θ                        |
| **F‑14** | Unit‑Circle Overlay      | r = 1 circle + concentric rings                     |
| **F‑15** | Trig Ratio Labels        | sin, cos, tan tooltip synced to ray                 |
| **F‑16** | θ‑Spinner                | Animate endpoint around unit circle                 |
| **F‑37** | Inequality Region Filler | Shade half‑planes & intersections                   |
| **F‑39** | Signed‑Area Colors       | Positive blue / negative red fill                   |
| **F‑40** | Perimeter Tracer         | Outline shape & display 2(w + h)                    |
| **F‑41** | Diagonal & Midpoint      | Draw diagonal + mark midpoint                       |

(All earlier World A features remain available.)

---

## 2 · New Tool Metadata `tools.worldB.json`

```jsonc
[
  /* ——— Blue: Lines & Slopes ——— */
  {
    "id": "slope-label",
    "name": "Slope Label",
    "color": "blue",
    "icon": "slope.svg",
    "features": ["F-04", "F-05"]
  },
  {
    "id": "ratio-table",
    "name": "Ratio Table",
    "color": "blue",
    "icon": "table.svg",
    "features": ["F-06"]
  },

  /* ——— Purple: Distance & Triangles ——— */
  {
    "id": "distance-ruler",
    "name": "Distance",
    "color": "purple",
    "icon": "dist.svg",
    "features": ["F-09"]
  },
  {
    "id": "rt-drop",
    "name": "Right Triangle",
    "color": "purple",
    "icon": "rt.svg",
    "features": ["F-10", "F-11"]
  },

  /* ——— Green/Blue Mix: Trig ——— */
  {
    "id": "angle-arc",
    "name": "Angle Arc",
    "color": "green",
    "icon": "arc.svg",
    "features": ["F-13"]
  },
  {
    "id": "unit-circle",
    "name": "Unit Circle",
    "color": "green",
    "icon": "circle.svg",
    "features": ["F-14", "F-15", "F-16"]
  },

  /* ——— Teal: Regions & Systems ——— */
  {
    "id": "inequality",
    "name": "Inequality",
    "color": "teal",
    "icon": "ineq.svg",
    "features": ["F-37"]
  },

  /* ——— Yellow/Orange: Shape Measures ——— */
  {
    "id": "perimeter",
    "name": "Perimeter",
    "color": "orange",
    "icon": "peri.svg",
    "features": ["F-40"]
  },
  {
    "id": "diag-mid",
    "name": "Diagonal+Mid",
    "color": "orange",
    "icon": "diag.svg",
    "features": ["F-41"]
  },
  {
    "id": "signed-area",
    "name": "Signed Area",
    "color": "orange",
    "icon": "signed.svg",
    "features": ["F-39"]
  }
]
```

> _Icons live in `packages/ui/src/assets/` and follow the same 24×24 SVG spec as World A._

---

## 3 · Plugin Implementation Notes

| F‑ID | Key Internals                                                           | UI hooks                             |
| ---- | ----------------------------------------------------------------------- | ------------------------------------ |
| F‑04 | Compute `(y2 – y1)/(x2 – x1)` from ray coords                           | label element anchored at midpoint   |
| F‑05 | Reads value from F‑04; applies CSS badge class                          | ⊕ positif, ⊖ negatif, 0, ⊥ undefined |
| F‑06 | Watches `ray:update`; populates up to 10 multiples in sidebar pop‑panel |                                      |
| F‑09 | Line length via `core.vectors.magnitude()`                              | tooltip near segment center          |
| F‑10 | Adds two perpendicular SVG lines; touch‑drag toggles visibility         |                                      |
| F‑11 | Uses `core.geometry.fillSquares(a,b,c)` to generate three rect groups   |                                      |
| F‑13 | Arc path `d="M …"` with live text of θ in °/rad                         | settings → switch mode               |
| F‑14 | Adds `<circle>` + radial grid; integrates with F‑16 spinner             |                                      |
| F‑15 | Observes ray angle; updates tiny table overlay                          |                                      |
| F‑16 | Adds play/pause control; animates endpoint via requestAnimationFrame    |                                      |
| F‑37 | Parses inequality string; uses region clipPath; supports intersections  |                                      |
| F‑39 | Checks bounds sign when shading rects & regions                         |                                      |
| F‑40 | Computes 2(w+h) for rectangle‑selected shapes                           |                                      |
| F‑41 | Midpoint `(x1+x2)/2,(y1+y2)/2`; diagonal svg line                       |                                      |

All plugins continue to use the **event bus** & **CoreMath** helpers from World A.

---

## 4 · Acceptance Checklist for World B

- [ ] All new plugins (F‑04,05,06,09,10,11,13,14,15,16,37,39,40,41) coded & unit‑tested.
- [ ] `tools.worldB.json` loads dynamically when teacher enables _World B_ set.
- [ ] Dock shows 12 new icons across Blue, Purple, Green, Teal, Orange groups.
- [ ] Performance: 60 fps with 20 rays + 20 angle arcs + 100 lattice dots.
- [ ] WCAG 2.2 AA retained for all new UI elements.
- [ ] Saved canvases from World A remain loadable (schema unchanged).

---

### 🚀 After World A ships, pull in these plugins and JSON to unlock **World B** — no core refactor required.
