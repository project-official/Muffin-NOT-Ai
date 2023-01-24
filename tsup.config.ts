import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  format: ['esm'],
  entry: ['src/index.ts'],
  minify: true,
  splitting: true,
})
