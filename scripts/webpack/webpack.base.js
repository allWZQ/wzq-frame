const path = require('path');
const { dirs, modules, entries } = require('./base');

module.exports = {
  context: dirs.src,
  entry: entries,
  resolve: {
    //     If you want to include a polyfill, you need to:
    //         - add a fallback 'resolve.fallback: { "crypto": require.resolve("crypto-browserify") }'
    //         - install 'crypto-browserify'
    // If you don't want to include a polyfill, you can use an empty module like this:
    //         resolve.fallback: { "crypto": false }
    fallback: { crypto: false },
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '~': dirs.src,
      '@assets': path.resolve(dirs.src, './assets'),
    },
  },
  module: modules,
  //规定一个性能指标，当达到该指标提示报错。文档地址：https://webpack.docschina.org/configuration/performance/#performance
  performance: {
    hints: 'error', //报错提示
    maxAssetSize: 1024 * 1024 * 10, //此选项根据单个资源体积
    maxEntrypointSize: 1024 * 1024 * 10, //此选项根据入口起点的最大体积
  },
};
