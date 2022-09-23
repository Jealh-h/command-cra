import chalk from "chalk";
import { sync } from "cross-spawn";
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
  const child = sync("npx create-react-app demo", {
    stdio: "inherit",
    shell: true,
  });
  console.log(chalk.green("create-react-app done!"));
}
