module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@rwxmad/eslint-plugin/vue',
    'plugin:@rwxmad/eslint-plugin/typescript',
    '@vue/typescript/recommended',
  ],
};
