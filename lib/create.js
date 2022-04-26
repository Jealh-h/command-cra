const ora = require('ora');

const Creator = require('../lib/Creator.js');
const spinner = ora('下载中...');

function createReactApp(appName, options) {
  const cwd = process.cwd();
  console.log(appName, options);
  const creator = new Creator();
  creator.run();

}

module.exports = (...args) => {
  return createReactApp(...args);
}
