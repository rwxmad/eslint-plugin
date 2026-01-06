import tseslint from 'typescript-eslint'
import { baseConfig, prettierConfig } from './default.js'

const typescriptConfig = [
  ...baseConfig,
  ...tseslint.configs.recommended,
  ...prettierConfig,
]

export default typescriptConfig
