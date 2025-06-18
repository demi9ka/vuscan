import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  base: '/',
  plugins: [react()],
  publicDir: './public/',
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['react-helmet', 'react-router-dom']
        }
      }
    }
  }
})
