# Grix 🟦📐

_A playground‑first mathematical visualization system that scales from 3rd‑grade fractions to professional linear algebra._

> **🎯 Live Demo**: [https://grix.dev](https://grix.dev) | **📖 Docs**: [docs.grix.dev](https://docs.grix.dev) | **💬 Community**: [github.com/getgrix/grix/discussions](https://github.com/getgrix/grix/discussions)

---

## ✨ What is Grix?

**Grix** transforms the mathematical coordinate plane into an interactive playground where learners can drag lines, create rectangles, explore triangles, graph functions, and visualize mathematical concepts through hands-on exploration.

🎓 **Perfect for**: K-12 mathematics education, homeschool families, tutoring centers, university courses, and anyone learning or teaching math concepts.

📱 **Works everywhere**: Desktop browsers, tablets with stylus support, smartphones, and large classroom touchscreens.

### ✅ **World A — Number Playground** (IMPLEMENTED)

Interactive tools for foundational math concepts:

- **🔷 Line Builder**: Create lines to explore slopes, fractions, and linear relationships
- **🔸 Rectangle Builder**: Build rectangles to understand area, multiplication, and factors
- **⭕ Circle Builder**: Draw circles to learn about radius, diameter, area, and circumference
- **🔺 Triangle Builder**: Construct triangles for geometry, trigonometry, and angle relationships
- **📈 Function Grapher**: Plot mathematical functions like parabolas, sine waves, and polynomials

### 🎯 **Educational Features**

- **Fraction Visualization**: See equivalent fractions and division concepts through interactive lines
- **Geometry Learning**: Explore triangle classifications, Pythagorean theorem with visual squares
- **Function Analysis**: Hover coordinates, equation editing, domain extensions
- **Real-time Calculations**: Live area, perimeter, slope, and angle measurements
- **Adaptive Learning**: Progressive complexity from elementary to advanced concepts

---

## 🗂 Project Structure

```
grix/
├── packages/
│   ├── core/           # @getgrix/core - Headless math engine
│   └── ui/             # @getgrix/ui - React + SVG components
├── demo-app/           # Live demo application
├── specs/              # World specifications (A, B, C, D)
└── package.json        # npm workspaces configuration
```

---

## 🚀 Quick Start

### 🎮 Try It Now

Visit [grix.dev](https://grix.dev) for the live demo - no installation required!

### 💻 Local Development

```bash
# Clone and install
git clone https://github.com/getgrix/grix.git
cd grix
npm install

# Start the development server
npm run dev            # Opens on localhost:5173

# Build all packages
npm run build
```

### 📦 Use in Your Project

```bash
# Install the UI package (includes core automatically)
npm install @getgrix/ui
```

```tsx
import { GrixApp } from "@getgrix/ui";

export default function App() {
  return <GrixApp />; // Full mathematical playground
}
```

**Headless core only:**

```bash
npm install @getgrix/core
```

```ts
import { vectorMagnitude, calculateTriangleArea } from "@getgrix/core";
```

**CDN (no build step):**

```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@getgrix/ui/dist/grix-ui.umd.js"></script>
<script>
  const { GrixApp } = window.GrixUI;
  ReactDOM.createRoot(document.getElementById("root")).render(
    React.createElement(GrixApp)
  );
</script>
```

---

## 🧰 Features

### 🎯 **Core Mathematical Tools**

| Tool | Description | Educational Value |
|------|-------------|-------------------|
| **Line Builder** | Create draggable lines with slope/fraction display | Linear relationships, fractions, ratios |
| **Rectangle Builder** | Build rectangles with area calculations | Multiplication, factors, geometry |
| **Circle Builder** | Draw circles with measurements | Pi, circumference, area relationships |
| **Triangle Builder** | Construct triangles with angle/side data | Trigonometry, geometry, Pythagorean theorem |
| **Function Grapher** | Plot mathematical functions | Algebra, calculus, function analysis |

### 📐 **Educational Visualizations**

- **Equivalent Fractions**: Green dots showing fraction relationships
- **Division Multiples**: Horizontal lines demonstrating repeated subtraction
- **Area Calculations**: Real-time area and perimeter for all shapes
- **Angle Measurements**: Live angle calculations with degree values
- **Trigonometry**: SOH-CAH-TOA visualizations and special triangles
- **Function Analysis**: Hover coordinates and equation exploration

### 📱 **Cross-Platform Support**

- **Desktop**: Full mouse and keyboard support
- **Tablets**: Stylus/pencil support with pressure sensitivity
- **Mobile**: Touch-optimized with gesture support
- **Classroom**: Large display support with multiple simultaneous users

### ⚙️ **Advanced Features**

- **Settings Panel**: 25+ visualization options organized by mathematical concept
- **Examples Library**: Pre-built mathematical scenarios and templates
- **Context Menus**: Object details, measurements, and editing options
- **Keyboard Shortcuts**: Arrow key movement, rotation, scaling
- **Accessibility**: WCAG 2.2 AA compliant with screen reader support

---

## 📚 Educational Worlds

| World | Status | Focus Area | Features |
|-------|--------|------------|----------|
| **A — Number Playground** | ✅ **Complete** | Fractions, Areas, Basic Algebra | 5 tools, 25+ visualizations |
| **B — Lines & Shapes** | 🔄 **In Development** | Slopes, Trigonometry, Geometry | Enhanced angle/distance tools |
| **C — Vectors & Motion** | 📋 **Planned** | Vector Math, Physics | Vector operations, polar coordinates |
| **D — Advanced** | 📋 **Planned** | Linear Algebra, Calculus | Matrix transforms, derivatives |

Each world builds upon the previous, allowing educators to scale complexity as students advance.

---

## 🤝 Contributing

We welcome contributions from educators, developers, and math enthusiasts!

### 🐛 **Bug Reports & Feature Requests**
- [Open an issue](https://github.com/getgrix/grix/issues) with detailed reproduction steps
- [Join discussions](https://github.com/getgrix/grix/discussions) for feature ideas

### 💻 **Code Contributions**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-idea`
3. Install dependencies: `npm install`
4. Make your changes and test locally: `npm run dev`
5. Submit a pull request with clear description

### 📖 **Documentation & Educational Content**
- Improve tutorials and examples
- Create lesson plans and curriculum guides
- Add mathematical scenarios to the examples library

### 🧪 **Testing**
```bash
npm run test          # Run unit tests
npm run lint          # Code style checks
npm run build         # Production build test
```

---

## 📋 Roadmap

### 🎯 **Current Focus (Q1 2025)**
- [ ] Complete World B implementation (slopes, trigonometry)
- [ ] Enhanced mobile experience
- [ ] Teacher dashboard features
- [ ] Performance optimizations

### 🚀 **Coming Soon (Q2 2025)**
- [ ] World C: Vector mathematics and physics
- [ ] Real-time collaboration for classrooms
- [ ] Plugin marketplace for community extensions
- [ ] Advanced accessibility features

### 🔮 **Future Vision**
- [ ] AR/VR support for immersive mathematics
- [ ] AI-powered tutoring assistance
- [ ] Advanced assessment and analytics tools
- [ ] Integration with popular learning management systems

---

## 📊 Technical Specifications

### 🏗️ **Architecture**
- **Frontend**: React 18+ with TypeScript
- **Rendering**: SVG-based for crisp mathematical graphics
- **State**: Zustand for performance and simplicity
- **Input**: Pointer Events API for universal device support
- **Build**: Vite for fast development and optimized production

### ⚡ **Performance**
- **Target**: 60 FPS with 200+ mathematical objects
- **Mobile**: Optimized touch response <100ms
- **Memory**: Efficient rendering with object pooling
- **Bundle**: <500KB gzipped for fast loading

### 🌐 **Browser Support**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with Pointer Events support

---

## 📄 License

**MIT License** © 2025 GetGrix

Free for educational use, commercial projects, and open source contributions.

---

## 🙏 Acknowledgments

- **Educators**: For invaluable feedback on mathematical pedagogy
- **Students**: For testing and inspiring new features
- **Open Source Community**: For tools and libraries that make Grix possible
- **Math Teachers Worldwide**: For dedicating their lives to mathematical education

---

**💌 Questions?** Email us at [GetGrix@gmail.com](mailto:GetGrix@gmail.com) or [start a discussion](https://github.com/getgrix/grix/discussions)

**⭐ Like Grix?** [Give us a star on GitHub](https://github.com/getgrix/grix) to help others discover the project!