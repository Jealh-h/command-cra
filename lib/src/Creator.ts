import EventEmitter from "events";
import inquirer from "inquirer";
import createAppByCRA from "./cra";
import { validateFeaturesOptions } from "../utils/validate";
import { TEMPLATE, FEATURES, Answers } from "./defaultOptions";
import type { CommandOption } from "../types/cmd-options";
import chalk from "chalk";

/**
 * class Creator 项目创建
 */
export default class Creator extends EventEmitter {
  appName: string;
  cliOptions: CommandOption;
  answers: Answers;
  presets: Array<any>;
  constructor(appName: string, cliOptions: CommandOption) {
    super();
    this.appName = appName;
    this.cliOptions = cliOptions || {};
    this.answers = {};
    console.log(chalk.blue("create instance of Creator"));
    this.presets = [];
  }

  /**
   * 根据用户选项、执行相应的创建方式
   * 如：create-react-app
   */
  async run() {
    this.answers = await inquirer.prompt(TEMPLATE);
    // 使用npx create-react-app
    if (this.answers.template !== "manual") {
      console.log(chalk.blue("使用create-react-app创建项目,解析参数"));
      createAppByCRA(this.appName, this.cliOptions);
    } else {
      this.answers = await inquirer.prompt(FEATURES);
      let validResult = validateFeaturesOptions(this.answers);
      console.log("使用自定义参数，构建项目", this.answers);
    }
  }
  // 解析添加的特性，如：less、vite
  // resolveFeatures(features) {}
}
