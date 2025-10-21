import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages under a repository (not a user/org page),
  // set the base to the repository name so asset URLs are correct.
  // Replace '/code-kid-portfolio/' with your repo name if it differs.
  base: '/code-kid-portfolio/',
  plugins: [react()],
})
