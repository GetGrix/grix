# CLAUDE.md - Grix Project Guide

## Project Overview

**Grix** is a playground-first mathematical grid system that scales from 3rd-grade fractions to professional linear algebra. It uses a monorepo architecture with npm workspaces, featuring a headless core and React UI with a plugin-based architecture.

## Repository Structure

```
/grix/
├── LICENSE                  - MIT License (Copyright 2025 GetGrix)
├── README.md               - Main project documentation
├── specs.worlda.md         - World A (Number Playground) specification
├── specs.worldb.md         - World B (Lines & Shapes) specification  
├── specs.worldc.md         - World C (Vectors & Motion) specification
├── specs.worldd.md         - World D (Advanced Explorations) specification
└── (planned structure):
    ├── packages/
    │   ├── core/           - @getgrix/core (headless math engine)
    │   └── ui/             - @getgrix/ui (React + SVG plugin host)
    ├── demo-app/           - Vite playground
    └── package.json        - npm workspaces root
```

## Current Status

This repository contains **specification documents only**. The actual implementation is not yet present.

### Available Files:
- **LICENSE**: MIT License for the project
- **README.md**: Project overview, installation, and usage instructions
- **specs.worlda.md**: Detailed specification for World A implementation
- **specs.worldb.md**: Specification for World B features (builds on World A)
- **specs.worldc.md**: Specification for World C features (builds on A+B)
- **specs.worldd.md**: Specification for World D features (builds on A+B+C)

## Planned Architecture

### Core Packages
1. **@getgrix/core** - Framework-agnostic math/geometry engine (pure TypeScript)
2. **@getgrix/ui** - React + SVG implementation with plugin system

### World System
Grix is designed around four progressive "worlds":

- **World A - Number Playground** ✅ (spec ready)
  - Fractions, areas, basic number operations
  - 13 plugins (F-01 through F-42)
  - Features: Ray renderer, rectangle selector, area counter, prime detector, etc.

- **World B - Lines & Shapes** 🟡 (spec ready)
  - Algebraic slopes, distance, trigonometry intro
  - 10 additional plugins (F-04, F-05, F-06, F-09, F-10, F-11, F-13, F-14, F-15, F-16, F-37, F-39, F-40, F-41)
  - Features: Slope labels, distance ruler, angle arcs, inequality regions

- **World C - Vectors & Motion** 🟡 (spec ready)
  - Vector fundamentals, addition, polar motion
  - 6 additional plugins (F-12, F-17, F-18, F-22, F-23, F-24)
  - Features: Scalar multiples, vector addition, parametric animation

- **World D - Advanced Explorations** 🟡 (spec ready)
  - Linear algebra, calculus previews, complex plane
  - 11 additional plugins (F-19, F-20, F-21, F-25, F-26, F-27, F-28, F-29, F-44, F-45, F-46, F-47)
  - Features: Matrix transforms, derivatives, complex multiplication, conic sections

## Technology Stack (Planned)

- **Language**: TypeScript (ESM modules)
- **UI Framework**: React 18+ with SVG rendering
- **State Management**: Zustand
- **Build Tool**: Vite
- **Testing**: Vitest
- **Package Manager**: npm workspaces
- **Distribution**: npm packages + CDN (UMD/ESM)

## Development Workflow (Planned)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build all packages
npm run build

# Run tests
npm test

# Publish packages
npm run pub:core
npm run pub:ui
```

## Plugin Architecture

Each world adds plugins following this pattern:
- Plugin files in `packages/ui/src/plugins/`
- Tool metadata in `packages/ui/src/data/tools.worldX.json`
- SVG icons in `packages/ui/src/assets/`
- Event-bus based communication
- Headless core functions from `@getgrix/core`

## Key Features (Planned)

- **High-resolution SVG grid** with infinite pan/zoom
- **Snap-to-grid** functionality
- **Global undo/redo** system (100 steps)
- **Layer system** for rendering order
- **Dock & Sidebar** UI with color-grouped tools
- **Plugin system** for extensible functionality
- **Keyboard accessibility** (WCAG 2.2 AA compliance)
- **Touch support** with pinch-zoom and two-finger pan

## Next Steps

To implement this project:

1. **Set up monorepo structure** with npm workspaces
2. **Implement @getgrix/core** package with math/geometry utilities
3. **Build @getgrix/ui** with React components and plugin system
4. **Create demo-app** for testing and development
5. **Implement World A plugins** according to specs.worlda.md
6. **Add progressive worlds** (B, C, D) with additional plugins

## Important Notes

- All specifications are designed to be **additive** - new worlds only add plugins, never modify core architecture
- **Schema versioning** and **migration support** planned for data persistence
- **Collaboration features** mentioned in specs for future consideration
- **Performance targets**: 60 fps with 200 rectangles + 10 rays

## Git Information

- **Current branch**: main
- **Recent commits**: 
  - 7a5ecd1 Small change
  - ac607c8 Initial commit with world specs
- **Modified files**: LICENSE, README.md, specs.worlda.md, specs.worldb.md, specs.worldc.md, specs.worldd.md

This repository serves as the planning and specification foundation for the Grix mathematical visualization system.