import MiniCssExtractPlugin from "mini-css-extract-plugin";
import fs from "fs";
import path from "path";

const cssRegex = /\*.module.css$/i;
const cssModuleRegex = /\*.css$/i;
const sassRegex = /\.(scss|sass)$/i;
const sassModuleRegex = /\.module\.(scss|sass)$/i;
const lessRegex = /\.less$/i;
const lessModuleRegex = /\.module.less$/i;

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP || false;

const useTailwind = fs.existsSync(path.join());

module.exports = function (webpackEnv /** "development" | "production" */) {
  const isDevp = webpackEnv === "development";
  const isProd = webpackEnv === "production";

  // TODO 根据 manual 选择的 css 预处理器进行配置
  const getStyleLoaders = async (cssOptions, proProcessor) => {
    /** 开发 / 线上 都使用外部的 css 文件 */
    const loaders = [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: await import("css-loader"),
        options: cssOptions,
      },
      {
        // 根据 package.json 的 browser 属性、在 vendor 里面添加浏览器前缀
        loader: await import("postcss-loader"),
        options: {
          postcssOptions: {
            ident: "postcss",
            plugins: !useTailwind
              ? [
                  "postcss-flexbugs-fixes",
                  [
                    "postcss=preset-env",
                    {
                      autoprefixer: {
                        flexbox: "no-2009",
                      },
                      stage: 3,
                    },
                  ],
                ]
              : [],
          },
        },
      },
    ];
  };

  return {
    target: ["browserslist"],
    stats: "errors-warning",
    mode: webpackEnv,
    module: {
      rules: [
        {
          test: cssRegex,
          loader: [],
        },
        {
          test: cssModuleRegex,
          loader: [],
        },
        // Options
        // {
        //   test: sassRegex,
        //   loader: [],
        // },
        // {
        //   test: sassModuleRegex,
        //   loader: [],
        // },
        // {
        //   test: lessRegex,
        //   loader: [],
        // },
        // {
        //   test: lessModuleRegex,
        //   loader: [],
        // },
      ],
    },
  };
};
