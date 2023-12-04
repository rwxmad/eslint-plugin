# eslint-plugin

## Install

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then you need to install everything needed by the plugin:

```bash
npm i eslint @rwxmad/eslint-plugin --save-dev
```

3. Then, add this to your `.eslintrc` file:

- Default config

```json
{
  "extends": ["plugin:@rwxmad/eslint-plugin/default"]
}
```

- Typescript config

```json
{
  "extends": ["plugin:@rwxmad/eslint-plugin/typescript"]
}
```

- React config

```json
{
  "extends": ["plugin:@rwxmad/eslint-plugin/react"]
}
```

- React + typescript config

```json
{
  "extends": ["plugin:@rwxmad/eslint-plugin/react-typescript"]
}
```

- Vue config

```json
{
  "extends": ["plugin:@rwxmad/eslint-plugin/vue"]
}
```

- Vue + typescript config

```json
{
  "extends": ["plugin:@rwxmad/eslint-plugin/vue-typescript"]
}
```

3. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

4. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`.
