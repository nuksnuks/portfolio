import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nuksnuks/portfolio/', // Replace with your GitHub username
  build: {
    outDir: 'dist'
  }
})
