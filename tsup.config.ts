import { defineConfig } from "tsup";

const { BUILD_ENV } = process.env;

console.log(process.env.NODE_ENV);

export default defineConfig({
  entry: ["lib/**/*"],
  splitting: false,
  sourcemap: false,
  format: ["cjs", "esm"],
  clean: true,
  dts: true,
});
