# @rwxmad/eslint-plugin

## Install

```bash
npm i -D @rwxmad/eslint-plugin eslint @eslint/js eslint-config-prettier
```

Add only what you need for the presets you use:

```bash
# TypeScript
npm i -D typescript typescript-eslint

# React
npm i -D eslint-plugin-react eslint-plugin-react-hooks

# Vue
npm i -D eslint-plugin-vue

# Vue + TypeScript (in addition to TypeScript deps)
npm i -D @vue/eslint-config-typescript
```

## Usage (flat config)

Create `eslint.config.js` (or `eslint.config.mjs` if your project is not ESM).

Use subpath entrypoints (root entrypoint is not provided).

```js
import config from '@rwxmad/eslint-plugin/default'

export default [...config]
```

Available presets:

- `@rwxmad/eslint-plugin/default`
- `@rwxmad/eslint-plugin/typescript`
- `@rwxmad/eslint-plugin/react`
- `@rwxmad/eslint-plugin/react-typescript`
- `@rwxmad/eslint-plugin/vue`
- `@rwxmad/eslint-plugin/vue-typescript`

Example (React):

```js
import config from '@rwxmad/eslint-plugin/react'

export default [...config]
```

[!NOTE] The React preset includes the JSX runtime rules (no `react` import required).
If you use the classic runtime, override `react/react-in-jsx-scope` and
`react/jsx-uses-react`.

[!TIP] You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```
