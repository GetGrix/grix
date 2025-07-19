# Grix - Quick Start Guide

## 🚀 Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

## 🎯 What You Can Do

### Available Tools:
- **📏 Ray Builder**: Create draggable mathematical rays to explore slopes and fractions
- **⬜ Rectangle Selector**: Create rectangles to explore area and multiplication concepts
- **📊 Area Counter**: Real-time area calculations (width × height = result)

### Navigation:
- **Mouse**: Click and drag to pan, scroll wheel to zoom
- **Touch**: Tap and drag to pan, pinch to zoom
- **Pen/Pencil**: Full pressure sensitivity support on tablets

### How to Use:
1. Click a tool button in the toolbar
2. Click and drag on the canvas to create mathematical objects
3. Drag endpoints/corners to modify existing objects
4. Use pan and zoom to navigate the infinite coordinate grid

## 🛠 Development

### Project Structure:
```
grix/
├── packages/core/     # Mathematical utilities and types
├── packages/ui/       # React components and plugins
├── demo-app/         # Development playground
└── package.json      # Workspace root
```

### Building:
```bash
# Build all packages
npm run build

# Run tests
npm run test
```

## 📱 Device Support

- **Desktop**: Full mouse and keyboard support
- **Tablets**: Touch + pencil input with pressure sensitivity
- **Mobile**: Touch gestures optimized for small screens
- **Classroom Displays**: Large screen optimizations

## 🧩 Plugin Architecture

New mathematical tools can be added as plugins in `packages/ui/src/plugins/`. Each plugin follows a simple interface:

```typescript
export interface Plugin {
  id: string;
  name: string;
  init(context: PluginContext): void;
  onPointerDown?(event: UnifiedPointerEvent): void;
  onPointerMove?(event: UnifiedPointerEvent): void;
  onPointerUp?(event: UnifiedPointerEvent): void;
}
```

## 🎨 Current Features

✅ Multi-input support (mouse/touch/pen)
✅ Infinite SVG canvas with mathematical grid
✅ Ray tool for exploring slopes and fractions
✅ Rectangle tool for area and multiplication
✅ Real-time mathematical calculations
✅ Responsive design for all device sizes
✅ Plugin architecture for extensibility

## 🔜 Next Steps

- Add more World A features (Answer Line, Lattice Highlighter)
- Implement World B tools (Lines & Shapes)
- Add World C features (Vectors & Motion)
- Enhanced accessibility features
- Collaborative multi-user support

---

**Happy Mathematical Exploration!** 🧮✨