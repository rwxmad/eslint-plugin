import js from '@eslint/js'
import prettier from 'eslint-config-prettier/flat'

export const baseConfig = [js.configs.recommended]
export const prettierConfig = [prettier]

const defaultConfig = [...baseConfig, ...prettierConfig]

export default defaultConfig
