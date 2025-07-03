import defaultConfig from './default.config.js';
import tseslint from 'typescript-eslint';

export default [...defaultConfig, ...tseslint.configs.recommended];
