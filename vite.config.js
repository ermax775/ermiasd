import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Top-level await (e.g. in three.webgpu.js from deps) requires es2022+
    target: 'esnext',
  },
  resolve: {
    dedupe: ['three'],
  },
  // Dev: allow top-level await in pre-bundled deps (three.webgpu.js)
  optimizeDeps: {
    esbuildOptions: { target: 'esnext' },
  },
})
