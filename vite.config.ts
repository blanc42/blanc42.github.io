import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'

/**
 * Copies index.html to 404.html so GitHub Pages serves the app
 * for client-side routes like /blog.
 */
function spaFallback(): Plugin {
  return {
    name: 'spa-fallback-404',
    writeBundle() {
      const out = resolve(process.cwd(), 'build')
      copyFileSync(resolve(out, 'index.html'), resolve(out, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss(), spaFallback()],
  build: {
    outDir: '.dist',
  },
})
