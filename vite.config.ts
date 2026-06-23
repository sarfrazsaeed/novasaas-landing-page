import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: change this to match your GitHub repository name
  // e.g. if your repo is github.com/yourname/novasaas-landing-page
  // then base should be '/novasaas-landing-page/'
  base: process.env.VERCEL ? '/' : '/novasaas-landing-page/',
})