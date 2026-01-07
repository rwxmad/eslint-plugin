import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    'src/default.ts',
    'src/typescript.ts',
    'src/react.ts',
    'src/react-typescript.ts',
    'src/vue.ts',
    'src/vue-typescript.ts',
  ],
  dts: {
    tsconfig: 'tsconfig.build.json',
  },
  format: ['esm'],
  outDir: 'dist',
  clean: true,
})
