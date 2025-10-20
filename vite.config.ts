import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  // base: '/scanner',
  plugins: [react()],
  publicDir: './public/scanner/',
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`
    }
  },

  build: {
    cssCodeSplit: true,
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['react-helmet', 'react-router-dom'],
          utils: ['i18next', 'axios', 'react-i18next', 'mobx', 'mobx-react-lite'],
          ui: ['react-toastify', 'zod']
        }
      }
    }
  }
})
