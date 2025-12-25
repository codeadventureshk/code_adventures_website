import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'client',  // <-- Add this
  plugins: [react()],
  build: {
    outDir: '../dist', // output to root/dist
  },
})
