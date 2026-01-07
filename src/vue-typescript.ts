import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
import { baseConfig, prettierConfig } from './default.js'
import { vueConfig } from './vue.js'

const config = defineConfigWithVueTs(
  baseConfig,
  vueConfig,
  vueTsConfigs.recommended,
)

const vueTypescriptConfig = [...config, ...prettierConfig]

export default vueTypescriptConfig
