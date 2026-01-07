import type { TSESLint } from '@typescript-eslint/utils'
import type { Linter } from 'eslint'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
import { baseConfig, prettierConfig } from './default.js'
import { vueConfig } from './vue.js'

type FlatConfigItem = Linter.Config | TSESLint.FlatConfig.Config

const config: FlatConfigItem[] = defineConfigWithVueTs(
  baseConfig,
  vueConfig,
  vueTsConfigs.recommended,
)

const vueTypescriptConfig: FlatConfigItem[] = [...config, ...prettierConfig]

export default vueTypescriptConfig
