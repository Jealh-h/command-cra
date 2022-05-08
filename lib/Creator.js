import EventEmitter from 'events';
import inquirer from 'inquirer';
import createAppByCRA from './cra.js';
import { validateFeaturesOptions } from './utils/validate.js';
import { TEMPLATE, FEATURES } from './defaultOptions.js';
export default class Creator extends EventEmitter {
  constructor(appName, cliOptions) {
    super();
    this.appName = appName;
    this.cliOptions = cliOptions | {};
    this.answers = {};
    console.log('create instance of Creator');
    this.presets = [];
  }
  async run() {
    this.answers = await inquirer.prompt(TEMPLATE);
    // 使用npx create-react-app
    if (answers.template !== "manual") {
      createAppByCRA(this.appName, this.cliOptions);
      console.log('使用create-react-app创建项目,解析参数');
    } else {
      answers = await inquirer.prompt(FEATURES);
      let validResult = validateFeaturesOptions(answers);
      console.log("使用自定义参数，构建项目", answers);
    }
  }
  // 解析添加的特性，如：less、vite
  resolveFeatures(features) {

  }
}