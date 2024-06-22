import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  format: ['cjs'],
  entry: ['src/index.ts', 'src/commands/*.ts', 'src/listeners/*.ts'],
  // minify: true,
  // splitting: true,
})
