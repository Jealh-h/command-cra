import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/*.ts", "bin/*ts"],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
});
