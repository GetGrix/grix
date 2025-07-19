# 🌍 **Grix — World D (Advanced Explorations) · Professional‑Ready Specification**

> **Prerequisite** • Worlds A + B + C must be present.
> World D only **extends** the plugin catalog; core, schema, event‑bus, and UI shell remain untouched.

---

## 0 · Scope of World D

| Strand                | Target Concepts                                           |
| --------------------- | --------------------------------------------------------- |
| Linear algebra        | 2 × 2 matrix transforms, eigenvectors, determinants       |
| Calculus previews     | Limits, instantaneous slope (derivative), Riemann sums    |
| Complex plane         | Multiply/rotate vectors by _a + bi_                       |
| Conic sections        | Focus–directrix construction, eccentricity classification |
| Log/exponential views | Log / semi‑log axes for power‑law straightening           |

---

## 1 · New Feature Catalogue Entries

| F‑ID     | Feature                   | Summary                                    |
| -------- | ------------------------- | ------------------------------------------ |
| **F‑19** | Matrix Input Panel        | 4‑field matrix entry + apply/reset         |
| **F‑20** | Grid Transformer          | Affine‑maps every object via matrix        |
| **F‑21** | Eigen‑Ray Highlighter     | Detects rays unchanged by current matrix   |
| **F‑25** | Derivative Gizmo          | Secant slider → tangent, slope read‑out    |
| **F‑26** | Riemann Rectangles        | Under any function line; adjustable _n_    |
| **F‑27** | Complex Multiplier        | Rotate + scale ray by input complex number |
| **F‑28** | Directrix Tool            | Draggable line; origin focus → conic       |
| **F‑29** | Conic Classifier          | Live label: ellipse / parabola / hyperbola |
| **F‑44** | Log / Semi‑Log Axes       | Toggle log10 scaling on x, y, or both      |
| **F‑45** | Similar‑Triangle Ghosts   | Auto‑draw scaled right‑triangles along ray |
| **F‑46** | Parallelogram Sum Shading | Resultant vector visual (for 2 vectors)    |
| **F‑47** | Limit Grapher             | Live chart of value as _x_ → 0 or ∞        |

_(Earlier features stay available; these are additive.)_

---

## 2 · `tools.worldD.json` (excerpt)

```jsonc
[
  /* ——— Orange: Matrix & Transform ——— */
  {
    "id": "matrix-warp",
    "name": "Matrix Warp",
    "color": "orange",
    "icon": "matrix.svg",
    "features": ["F-19", "F-20", "F-21"]
  },

  /* ——— Red: Calculus ——— */
  {
    "id": "derivative",
    "name": "Derivative",
    "color": "red",
    "icon": "dydx.svg",
    "features": ["F-25"]
  },
  {
    "id": "riemann",
    "name": "Riemann Sum",
    "color": "red",
    "icon": "riem.svg",
    "features": ["F-26"]
  },
  {
    "id": "limit-grapher",
    "name": "Limit Graph",
    "color": "red",
    "icon": "limit.svg",
    "features": ["F-47"]
  },

  /* ——— Purple: Complex Plane ——— */
  {
    "id": "complex-twist",
    "name": "Complex ×",
    "color": "purple",
    "icon": "cplx.svg",
    "features": ["F-27"]
  },

  /* ——— Teal: Conic Sections ——— */
  {
    "id": "conic-maker",
    "name": "Conic Factory",
    "color": "teal",
    "icon": "conic.svg",
    "features": ["F-28", "F-29"]
  },

  /* ——— Blue: Log/Grid Enhancements ——— */
  {
    "id": "log-axis",
    "name": "Log Axis",
    "color": "blue",
    "icon": "log.svg",
    "features": ["F-44"]
  },
  {
    "id": "sim-tri",
    "name": "Similar Δ",
    "color": "blue",
    "icon": "simtri.svg",
    "features": ["F-45"]
  },
  {
    "id": "vec-sum",
    "name": "Vector Σ",
    "color": "blue",
    "icon": "vsum.svg",
    "features": ["F-46"]
  }
]
```

Icons follow the 24 × 24 SVG guideline; place in `ui/src/assets/`.

---

## 3 · Plugin Notes

| F‑ID | Implementation Highlights                                                                              |
| ---- | ------------------------------------------------------------------------------------------------------ |
| F‑19 | Controlled `<form>` for a,b,c,d; validation; emits `matrix:update`                                     |
| F‑20 | Applies matrix to every canvas coordinate at render pass; keeps raw props untouched for undo integrity |
| F‑21 | On `matrix:update`, solves eigenvectors via core linear‑alg helper; highlights in SVG                  |
| F‑25 | Adds draggable Δx handle; shows secant slope; when Δx < ε, locks to tangent                            |
| F‑26 | Generates `n` `<rect>` under selected function; integral approximation label                           |
| F‑27 | Parses complex _a + bi_; converts to rotation θ + scale r; transforms selected ray                     |
| F‑28 | Renders draggable directrix `<line>`; computes eccentricity with focus at origin                       |
| F‑29 | Uses e value to classify; badge auto‑updates                                                           |
| F‑44 | Switches axis scale; transforms existing object positions via `log10` mapping                          |
| F‑45 | Clones right‑triangle at every integer scaling factor along ray                                        |
| F‑46 | Listens to two vectors; draws parallelogram fill + resultant arrow                                     |
| F‑47 | Plots slope/value vs. `x` in small SVG chart positioned in sidebar                                     |

---

## 4 · Acceptance Checklist

- [ ] All new plugins (F‑19,20,21,25,26,27,28,29,44,45,46,47) implemented & unit‑tested.
- [ ] Dock shows 10 new icons across Orange, Red, Purple, Teal, Blue groups.
- [ ] Matrix warp handles 1000 objects at 60 fps.
- [ ] Eigen‑ray accuracy within 0.5° of analytic solution.
- [ ] Derivative gizmo matches numeric diff within 1 % for lines.
- [ ] Conic classifier correct on e = 0.5,1,1.5 test cases.
- [ ] Log‑axis overlay preserves relative positions for power‑law rays.
- [ ] Backward compatibility: canvases from Worlds A–C load without migration.

---

### 🚀 Add this spec’s plugins & tool JSON to unlock **World D — Advanced Explorations** without touching core architecture.
