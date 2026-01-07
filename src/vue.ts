import type { Linter } from 'eslint'
import vuePlugin from 'eslint-plugin-vue'
import { baseConfig, prettierConfig } from './default.js'

export const vueConfig: Linter.Config[] = [
  ...vuePlugin.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    plugins: { vue: vuePlugin },
  },
]

const config: Linter.Config[] = [...baseConfig, ...vueConfig, ...prettierConfig]

export default config
