import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname),
  optimizeDeps: {
    exclude: ['@getgrix/core', '@getgrix/ui'],
  },
  server: {
    port: 5173,
    host: true, // Allow access from other devices for testing
  },
  resolve: {
    alias: {
      '@getgrix/core': resolve(__dirname, '../packages/core/src'),
      '@getgrix/ui': resolve(__dirname, '../packages/ui/src'),
    },
  },
});