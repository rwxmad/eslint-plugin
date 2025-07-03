import defaultConfig from './default.js';
import typescriptConfig from './typescript.config.js';
import reactConfig from './react.config.js';
import reactTypescriptConfig from './react-typescript.config.js';
import vueConfig from './vue.config.js';
import vueTypescriptConfig from './vue-typescript.config.js';

export const configs = {
  default: defaultConfig,
  typescript: typescriptConfig,
  react: reactConfig,
  'react-typescript': reactTypescriptConfig,
  vue: vueConfig,
  'vue-typescript': vueTypescriptConfig,
};
