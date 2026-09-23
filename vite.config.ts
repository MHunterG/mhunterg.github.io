import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site: served from the domain root.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    target: 'es2022',
    cssCodeSplit: false,
  },
})
