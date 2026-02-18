import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Setting base to './' ensures the site works correctly on Vercel and GitHub Pages
  base: './', 
  
  plugins: [
    // The React and Tailwind plugins are both required for Make
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory for easier imports
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
