# GitHub Actions Deployment

This workflow automatically deploys the Grix demo app to GitHub Pages when changes are pushed to the main branch.

## Setup Required

1. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: "GitHub Actions"
   - Custom domain: `grix.app` (if using custom domain)

2. **Repository permissions**:
   - The workflow uses `GITHUB_TOKEN` with Pages permissions
   - No additional secrets needed

## Deployment Process

1. **Trigger**: Push to `main` branch
2. **Build**: 
   - Install dependencies
   - Build @getgrix/core package
   - Build @getgrix/ui package
   - Build demo-app with Vite
3. **Deploy**: Upload build artifacts to GitHub Pages

## Build Output

The demo app builds to `/demo-app/dist/` and includes:
- `index.html` - Main app entry point
- `assets/` - JavaScript and CSS bundles
- `grix-favicon.svg` - App icon
- `manifest.json` - PWA manifest

## Custom Domain

If using the custom domain `grix.app`:
- Ensure DNS CNAME record points to `getgrix.github.io`
- GitHub Pages will automatically handle HTTPS