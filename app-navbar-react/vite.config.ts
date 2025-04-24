import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInject from 'vite-plugin-css-injected-by-js'
import { resolve } from 'path'
import type { UserConfig } from 'vite' 

export default defineConfig(({ command }): UserConfig => ({ 
  plugins: [react(), cssInject()],
  server: { 
    port: 3000,
    open: true,
  },
  preview: {
    port: 7500, 
    open: true,
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'src/MicroFrontend.tsx'), // Point to the correct entry file
      preserveEntrySignatures: 'exports-only',
      external: ['react', 'react-dom'], // Externalize React
      output: {
        entryFileNames: 'bundle.js', // Output bundle name
        format: 'esm', // Output format
      },
    },
  },
}))
