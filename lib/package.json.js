import os from 'os';
import fs from 'fs';
export default class PackageJsonManager {
  constructor(context) {
    this.packageJSON = {};
    this.context = context;
  }
  set(key, value) {
    this.packageJSON[key] = value;
  }
  sortPkg(order = []) {

  }
  writeToJSON() {
    fs.writeFileSync(this.context, JSON.stringify(this.packageJSON, null, 2) + os.EOL);
  }
}

