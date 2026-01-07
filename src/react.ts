import type { Linter } from 'eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import { baseConfig, prettierConfig } from './default.js'

const reactFiles = ['**/*.{js,jsx,ts,tsx}']

export const reactConfig = [
  {
    files: reactFiles,
    ...react.configs.flat.recommended,
  },
  {
    files: reactFiles,
    ...react.configs.flat['jsx-runtime'],
  },
  {
    files: reactFiles,
    ...reactHooks.configs['recommended-latest'],
  },
  {
    files: reactFiles,
    settings: {
      react: { version: 'detect' },
    },
  },
]

const config: Linter.Config[] = [
  ...baseConfig,
  ...reactConfig,
  ...prettierConfig,
]

export default config
