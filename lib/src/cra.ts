import chalk from "chalk";
import spawn from "cross-spawn";
import { exec } from "child_process";
import type { CommandOption } from "../types/cmd-options";

export default function createAppByCRA(
  appName: string,
  options: CommandOption
) {
  var command = "npx";
  const args = ["create-react-app"];
  if (!!appName) {
    args.push(appName);
  }
  if (options.template) {
    args.push("--template", options.template);
  }
  console.log("start");
  // const cp = spawn.sync('npm', ['config', 'list'])
  const child = exec("npx create-react-app demo");
  child?.stdout?.on("data", (data) => {
    console.log("data:", data);
  });
  // let result = spawn.sync(command, args);
  // if (result.error) {
  //   console.log(`${chalk.red("create-react-error:" + result.stderr.toString('utf-8'))}`)
  //   process.exit(1);
  // }
  // console.log("output:", cp.stdout.toString());
  console.log(chalk.green("create-react-app done!"));
}
