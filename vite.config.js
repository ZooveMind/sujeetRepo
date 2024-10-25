import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Listen on all IP addresses
    port: 3000        // Optional, you can choose any port
  },
  build: {
    outDir: 'build',  // Change 'dist' to 'build'
  },
})
