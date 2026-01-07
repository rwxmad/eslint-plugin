import js from '@eslint/js'
import type { Linter } from 'eslint'
import prettier from 'eslint-config-prettier/flat'

export const baseConfig = [js.configs.recommended]
export const prettierConfig = [prettier]

const defaultConfig: Linter.Config[] = [...baseConfig, ...prettierConfig]

export default defaultConfig
