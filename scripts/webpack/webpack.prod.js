const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const basic = require('./webpack.base');
const { dirs, pages } = require('./base');
const { greatrcProcess } = require('../config');
const appName = require(dirs.package).name;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

const plugins = [].concat(pages);
const define = require(dirs.root + `/.greatrc.${process.env.RUN_ENV}`);
let injectedProcessEnvData = {
  ...define,
};
plugins.push(
  new webpack.DefinePlugin({ ...greatrcProcess(injectedProcessEnvData) })
);

const config = {
  ...basic,
  mode: 'production', //为模块和 chunk 启用确定性的混淆名称
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false, //不将注释提取到单独的文件中
      }),
    ],
  },
  //不需要打包的文件
  externals: {},
  //文档地址：https://webpack.docschina.org/configuration/output/
  output: {
    path: dirs.dist, //输出路径
    filename: 'js/[name].[chunkhash:8].js', //此选项决定了每个输出 bundle 的名称
    publicPath: './', //按需加载path
    globalObject: 'this', //为了使 UMD 构建在浏览器和 Node.js 上均可用，应将 output.globalObject 选项设置为 'this'
  },
  plugins: plugins.concat([
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
    //生成性能日志
    // new BundleAnalyzerPlugin({
    //   generateStatsFile: true,
    // }),
  ]),
};

module.exports = config;
