import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from "@mdx-js/rollup"
import rehypePrism from '@mapbox/rehype-prism'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mdx({ rehypePlugins: [rehypePrism]}), react()],
})
