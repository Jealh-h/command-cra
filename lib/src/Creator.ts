import EventEmitter from "events";
import inquirer from "inquirer";
import createAppByCRA from "./cra";
import { validateFeaturesOptions } from "../utils/validate";
import { TEMPLATE, FEATURES, Answers } from "./defaultOptions";
import type { CommandOption } from "../types/cmd-options";

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
    console.log("create instance of Creator");
    this.presets = [];
  }
  async run() {
    this.answers = await inquirer.prompt(TEMPLATE);
    // 使用npx create-react-app
    if (this.answers.template !== "manual") {
      createAppByCRA(this.appName, this.cliOptions);
      console.log("使用create-react-app创建项目,解析参数");
    } else {
      this.answers = await inquirer.prompt(FEATURES);
      let validResult = validateFeaturesOptions(this.answers);
      console.log("使用自定义参数，构建项目", this.answers);
    }
  }
  // 解析添加的特性，如：less、vite
  // resolveFeatures(features) {}
}
