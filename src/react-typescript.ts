import tseslint from 'typescript-eslint'
import { baseConfig, prettierConfig } from './default.js'
import { reactConfig } from './react.js'

const reactTypescriptConfig = [
  ...baseConfig,
  ...reactConfig,
  ...tseslint.configs.recommended,
  ...prettierConfig,
]

export default reactTypescriptConfig
