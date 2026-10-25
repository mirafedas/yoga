import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: '/yoga/',
  server: {
    port: 3000,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        sequencing: 'sequencing.html'
      },
      output: {
        manualChunks: undefined
      }
    }
  }
}));

