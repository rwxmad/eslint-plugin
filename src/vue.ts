import vuePlugin from 'eslint-plugin-vue'
import { baseConfig, prettierConfig } from './default.js'

export const vueConfig = [
  ...vuePlugin.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    plugins: { vue: vuePlugin },
  },
]

const config = [...baseConfig, ...vueConfig, ...prettierConfig]

export default config
