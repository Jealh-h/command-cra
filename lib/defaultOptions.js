export const TEMPLATE = [
  {
    type: 'list',
    name: 'template',
    message: 'choice a template',
    choices: [
      { name: 'create-react-app', value: 'cra' },
      { name: 'manual', value: 'manual' },
    ]
  },
]

export const FEATURES = [
  {
    type: 'list',
    name: 'pkgManager',
    message: 'package manager',
    choices: [
      { name: 'npm', value: 'npm' },
      { name: 'yarn', value: 'yarn' },
      { name: 'pnpm', value: 'pnpm' }
    ]
  },
  {
    type: 'list',
    name: 'cssPreprocessor',
    message: 'cssPreprocessor',
    choices: [
      { name: 'less', value: 'less' },
      { name: 'sass', value: 'sass' },
      { name: 'css', value: 'css' }
    ]
  },
  {
    type: 'list',
    name: "language",
    message: "jsLang",
    choices: [
      { name: 'typescript', value: 'typescript' },
      { name: 'javascript', value: 'js' }
    ]
  },
  {
    type: 'list',
    name: 'buildTool',
    message: 'build tool',
    choices: [
      { name: 'webpack', value: 'webpack' },
      { name: 'vite', value: 'vite' }
    ]
  }
];