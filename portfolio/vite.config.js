import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['portfolio-thom-legros.onrender.com'],
    proxy: {
      '/api': {
        target: 'https://portfolio-thom-legros.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});