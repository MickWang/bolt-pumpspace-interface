import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/variables/breakpoints";
          @import "./src/styles/variables/colors";
          @import "./src/styles/variables/spacing";
        `
      }
    }
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles')
    }
  }
});
