import { execSync } from 'child_process'

// cache
let _hasYarn;

export function hasYarn() {
  if (_hasYarn !== null) {
    return true;
  }
  try {
    execSync('yarn --version', { stdio: "ignore" });
    return (_hasYarn = true);
  } catch (error) {
    return (_hasYarn = false);
  }
}

export function hasPnpm() {

}

export function hasNpm() {

}