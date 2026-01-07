import type { Linter } from 'eslint'
import tseslint from 'typescript-eslint'
import { baseConfig, prettierConfig } from './default.js'

const typescriptConfig: Linter.Config[] = [
  ...baseConfig,
  ...tseslint.configs.recommended,
  ...prettierConfig,
]

export default typescriptConfig
