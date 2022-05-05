import EventEmitter from 'events';
import inquirer from 'inquirer';
// const { TEMPLATE, FEATURES } = require('./defaultOptions.js');
export default class Creator extends EventEmitter {
  constructor() {
    super();
    console.log('create instance of Creator');
    this.presets = [];
  }
  async run() {
    let answers = await inquirer.prompt(TEMPLATE);
    if (answers.template !== "manual") {
      console.log('使用create-react-app创建项目,解析参数');
    } else {
      answers = await inquirer.prompt(FEATURES);
      console.log("使用自定义参数，构建项目", answers);
    }
  }
}