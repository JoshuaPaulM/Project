import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react', 'lightweight-charts'],
  },
  build: {
    commonjsOptions: {
      include: []
    }
  },
  server: {
    force: true // Force the server to ignore the cache
  }
});