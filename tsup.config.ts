import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  format: ['cjs'],
  entry: ['src/index.ts', 'src/Commands/*.ts'],
})
