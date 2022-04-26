const EventEmitter = require('events');
const inquirer = require('inquirer');
module.exports = class Creator extends EventEmitter {
  constructor() {
    super();
    console.log('create instance of Creator');
    this.presets = [];
  }
  async run() {
    const answers = await inquirer.prompt(this.getPreset())
    console.log(answers);
  }
  getPreset() {
    return [
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
        name: 'css Preprocessor',
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
    ]
  }
}