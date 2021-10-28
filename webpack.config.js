const path = require("path");
const os = require("os");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

let mode = "development";
let target = "web";

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
console.log("IS DEV:", isDev);
console.log("IS PROD:", isProd);

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = (env) => {
  const isProp = env.prop;
  console.log(isProp);
  if (isProp) {
    console.log("true");
    console.log(`IS PROP: ${isProp}\n`);
    console.log("Характеристика компьютера");
    console.log("========================================================");
    console.log(`Операционная система OS: ${os.platform()}\n`);
    console.log(`Архитектура процессора ARCH: ${os.arch()}\n`);
    console.log("Инфа по процессорам CPUS:\n");
    console.log(os.cpus());
    console.log(
      `Свободно памяти Free memory: ${(os.freemem() / 1024 / 1024).toFixed(
        2
      )} Mb\n`
    );
    console.log(
      `Всего памяти  Total memory: ${(
        os.totalmem() /
        1024 /
        1024 /
        1024
      ).toFixed(2)} Gb\n`
    );
    console.log(`Домашняя директория Home Dir: ${os.homedir()}\n`);
    console.log(
      `Время работы On work: ${(os.uptime() / 60 / 60).toFixed(2)} hours\n`
    );
    console.log("========================================================");
    // счетчик остановки скрипта
    setTimeout(function () {
      console.log("Остановка скрипта");
      return process.exit(1);
    }, 1000);
  }

  return {
    mode: mode,
    target: target, // параметр по обновлению страницы в реальном времени

    output: {
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "images/[hash][ext][query]",
      // clean: true,
    },

    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset",
        },
        {
          test: /\.(s[ac]|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { publicPath: "" },
            },
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],

    resolve: {
      extensions: [".js", ".jsx"],
    },

    devtool: "source-map",
    devServer: {
      static: "./dist",
      hot: true,
    },
  };
};
