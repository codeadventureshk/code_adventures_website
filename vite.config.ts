import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'client',       // <-- this tells Vite where index.html is
  build: {
    outDir: '../dist',  // <-- output goes to dist folder at project root
    emptyOutDir: true
  },
  plugins: [react()]
})
