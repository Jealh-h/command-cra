import ora from 'ora';
import Creator from '../lib/Creator.js';

const spinner = ora('下载中...');

function createReactApp(appName, options) {
  const cwd = process.cwd();
  console.log(appName, options);
  const creator = new Creator(appName, options);
  creator.run();

}

export default (...args) => {
  return createReactApp(...args);
}
