import { defineConfig } from 'tsup'

const sourcemap = process.env.NODE_ENV === 'development' ? true : false

export default defineConfig({
  clean: true,
  format: ['cjs'],
  entry: [
    'src/index.ts',
    'src/Commands/*.ts',
    'src/listeners/*.ts',
    'src/interaction-handlers/*.ts',
  ],
  minify: true,
  sourcemap,
})
