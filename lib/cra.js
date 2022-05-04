// const execaSync = require('execa');
// (async () => {
//   const { execaSync } = await import('execa');
//   console.log(execaSync);
// })();
const childProcess = require('child_process');
module.exports = function createAppByCRA(appName, options) {
  var command = `npx create-react-app`;
  if (!!appName) {
    command += ` ${appName}`;
  }
  if (options.template) {
    command += ` --template${options.template}`;
  }
  // console.log(command);
  // childProcess.exec("echo 'hello world'")
  // childProcess.exec("npx create-react-app demo");
}

