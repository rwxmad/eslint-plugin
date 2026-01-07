import { ESLint } from 'eslint'

const cases = [
  {
    name: 'default',
    importPath: '@rwxmad/eslint-plugin/default',
    filePath: 'src/index.js',
    text: 'const foo = 1; foo.toString();',
  },
  {
    name: 'typescript',
    importPath: '@rwxmad/eslint-plugin/typescript',
    filePath: 'src/index.ts',
    text: 'const foo: number = 1; foo.toString();',
  },
  {
    name: 'react',
    importPath: '@rwxmad/eslint-plugin/react',
    filePath: 'src/App.jsx',
    text: 'const App = () => <div />; export default App;',
  },
  {
    name: 'react-typescript',
    importPath: '@rwxmad/eslint-plugin/react-typescript',
    filePath: 'src/App.tsx',
    text: 'const App = () => <div />; export default App;',
  },
  {
    name: 'vue',
    importPath: '@rwxmad/eslint-plugin/vue',
    filePath: 'src/App.vue',
    text: '<template><div /></template><script>export default {};</script>',
  },
  {
    name: 'vue-typescript',
    importPath: '@rwxmad/eslint-plugin/vue-typescript',
    filePath: 'src/App.vue',
    text: '<template><div /></template><script lang="ts">export default {};</script>',
  },
]

const run = async () => {
  let hasFailure = false

  for (const testCase of cases) {
    let config

    try {
      const mod = await import(testCase.importPath)
      config = mod.default
    } catch (error) {
      hasFailure = true
      console.error(`[fail] ${testCase.name}`)
      console.error(`  Failed to import ${testCase.importPath}`)
      console.error(`  ${error.message}`)
      continue
    }

    const eslint = new ESLint({
      overrideConfig: config,
      overrideConfigFile: true,
    })

    const [result] = await eslint.lintText(testCase.text, {
      filePath: testCase.filePath,
    })

    if (result.fatalErrorCount > 0) {
      hasFailure = true

      console.error(`[fail] ${testCase.name}`)

      for (const message of result.messages) {
        if (message.fatal) {
          console.error(`  ${message.message}`)
        }
      }
    } else {
      console.log(`[ok] ${testCase.name}`)
    }
  }

  if (hasFailure) {
    process.exitCode = 1
  }
}

run().catch(error => {
  console.error(error)
  process.exitCode = 1
})
