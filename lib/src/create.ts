import ora from "ora";
import Creator from "./Creator.js";
import type { CommandOption } from "../types/cmd-options.js";

const spinner = ora("下载中...");

export default function createReactApp(
  appName: string,
  options: CommandOption
) {
  const cwd = process.cwd();
  console.log(appName, options);
  const creator = new Creator(appName, options);
  creator.run();
}
