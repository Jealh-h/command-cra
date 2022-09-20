import os from "os";
import fs from "fs";
export default class PackageJsonManager {
  packageJSON: { [key: string]: string };

  constructor(private context: string) {
    this.packageJSON = {};
    this.context = context;
  }
  set(key: string, value: string) {
    this.packageJSON[key] = value;
  }
  sortPkg(order = []) {}
  writeToJSON() {
    fs.writeFileSync(
      this.context,
      JSON.stringify(this.packageJSON, null, 2) + os.EOL
    );
  }
}
