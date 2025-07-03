import defaultConfig from './default.js';
import tseslint from 'typescript-eslint';

export default [...defaultConfig, tseslint.configs.recommended];
