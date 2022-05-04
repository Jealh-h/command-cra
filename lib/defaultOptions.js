const TEMPLATE = [
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

const FEATURES = [
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
    message: 'css',
    choices: [
      { name: 'less', value: 'less' },
      { name: 'sass', value: 'sass' },
      { name: 'css', value: 'css' }
    ]
  },
  {
    type: 'list',
    name: "lang",
    message: "jsLang",
    choices: [
      { name: 'typescript', value: 'ts' },
      { name: 'javascript', value: 'js' }
    ]
  },
  {
    type: 'list',
    name: 'build',
    message: 'build tool',
    choices: [
      { name: 'webpack', value: 'webpack' },
      { name: 'vite', value: 'vite' }
    ]
  }
];
module.exports = {
  TEMPLATE, FEATURES
}