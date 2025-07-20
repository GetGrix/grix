import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh for better HMR
      fastRefresh: true,
    })
  ],
  root: resolve(__dirname),
  publicDir: resolve(__dirname, 'public'),
  optimizeDeps: {
    exclude: ['@getgrix/core', '@getgrix/ui'],
    include: ['zustand', 'react', 'react-dom'],
    // Force re-optimization when workspace packages change
    force: true,
  },
  server: {
    port: 5173,
    host: true, // Allow access from other devices for testing
    hmr: {
      overlay: true, // Show error overlay
      port: 24678, // Use a specific port for HMR
    },
    // Watch workspace packages for changes
    watch: {
      ignored: ['!**/node_modules/@getgrix/**', '!**/dist/**'],
      usePolling: false, // Disable polling for better performance
      interval: 100, // Check for changes every 100ms
    },
    // Force file watching to include workspace packages
    fs: {
      allow: ['..'],
    },
  },
  resolve: {
    alias: {
      '@getgrix/core': resolve(__dirname, '../packages/core/src'),
      '@getgrix/ui': resolve(__dirname, '../packages/ui/src'),
    },
  },
  // Better source maps for debugging
  build: {
    sourcemap: true,
  },
});