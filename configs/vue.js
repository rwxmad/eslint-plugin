import defaultConfig from './default.js';
import vuePlugin from 'eslint-plugin-vue';

import pluginVue from 'eslint-plugin-vue';
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript';

export default defineConfigWithVueTs(
  defaultConfig,
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    plugins: { vue: vuePlugin },
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
);
