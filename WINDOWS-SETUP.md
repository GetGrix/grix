# Grix - Windows Setup Guide

## 🚀 Quick Start (Windows PowerShell)

```powershell
# 1. Navigate to the project root
cd C:\Users\barre\source\personalRepos\grix

# 2. Install dependencies (one time only)
npm install

# 3. Start the development server (choose one method)

# Method 1: Using npm (recommended)
npm run dev

# Method 2: If npm fails, use the batch file
dev.bat

# Method 3: Manual approach
cd demo-app
npx vite
```

**Your mathematical playground will be available at: `http://localhost:5173/`**

## 📋 Available Commands

Run these from the **root directory** (`C:\Users\barre\source\personalRepos\grix`):

```powershell
npm run dev          # Start development server
npm run build        # Build all packages
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run lint         # Run code linting
npm run clean        # Clean build artifacts
```

## 🎯 Using the Application

### Available Tools:
- **📏 Ray Builder**: Create mathematical rays to explore slopes and fractions
- **⬜ Rectangle Selector**: Create rectangles to explore area and multiplication
- **📊 Real-time Calculations**: Watch area calculations update as you resize

### Navigation:
- **Mouse**: Click and drag to pan, scroll wheel to zoom
- **Touch**: Tap and drag to pan, pinch to zoom (on touch devices)
- **Pencil**: Full pressure sensitivity on tablets

### How to Create Objects:
1. Click a tool button in the toolbar (Ray Builder or Rectangle Selector)
2. Click and drag on the grid to create the mathematical object
3. Drag the endpoints/corners to modify existing objects
4. Use the mouse wheel or touch gestures to zoom in/out
5. Drag with middle mouse button or touch to pan around

## 🛠 Development Notes

- All dependencies are now properly installed in the root `node_modules`
- Scripts use `npx` to ensure Windows compatibility
- Cross-platform file operations with `rimraf` instead of Unix `rm`
- Hot reload works automatically when you edit source files

## 💻 VS Code Integration

**Using VS Code NPM Scripts Panel:**
1. Open the project in VS Code
2. Look for "NPM Scripts" in the Explorer panel (bottom left)
3. Expand `package.json` (root)
4. Click the ▶️ play button next to `dev`

**If VS Code tries to use Yarn instead of npm:**
- The project includes `.vscode/settings.json` to force npm usage
- Restart VS Code if you're still seeing yarn commands

## 🚨 Troubleshooting

**If you get "command not found" errors:**
1. Make sure you're in the root directory: `C:\Users\barre\source\personalRepos\grix`
2. Run `npm install --force` to ensure all dependencies are installed
3. Use the exact commands listed above

**If you get "'vite' is not recognized" error on Windows:**
1. Try running `dev.bat` instead of `npm run dev`
2. Or manually: `cd demo-app` then `npx vite`
3. The issue is Windows PowerShell path resolution with npm workspaces

**If you get Rollup/Vite dependency errors:**
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install --force`
3. Try `npm run dev` again

**If the server won't start:**
1. Check if port 5173 is already in use
2. Kill any existing Node processes
3. Try running `npm run clean` then `npm run dev`

**If VS Code uses Yarn instead of npm:**
1. Check that `.vscode/settings.json` exists
2. Restart VS Code
3. Use Command Palette (`Ctrl+Shift+P`) > "Tasks: Run Task" > "npm: dev"

## 📱 Testing on Different Devices

- **Desktop**: Full mouse and keyboard support
- **Tablets**: Touch + pen input with pressure sensitivity
- **Mobile**: Optimized touch gestures for smaller screens
- **Classroom**: Large screen touch display support (65"+ TVs)

---

**Happy Mathematical Exploration!** 🧮✨

*Your Grix MVP is ready for mathematical visualization and learning!*