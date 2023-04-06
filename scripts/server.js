const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const {
  createCompiler,
  prepareUrls,
} = require("react-dev-utils/WebpackDevServerUtils");
const ignoredFiles = require("react-dev-utils/ignoredFiles");
const { dirs } = require("./webpack/base");
const config = require("./webpack/webpack.dev");
const { PORT, HOST } = require("./config");
const envUrl = require(dirs.root + `/.greatrc.${process.env.RUN_ENV}`);

try {
  const devServerConfigs = {
    host: HOST,
    port: PORT,
    historyApiFallback: true,
    webSocketServer: "ws",
    client: false,
    static: {
      staticOptions: {
        watchContentBase: true,
        contentBase: dirs.dist,
      },
      watch: {
        ignored: ignoredFiles(dirs.src),
      },
    },
    //配置跨域代理
    // proxy: {
    //   "/api": {
    //     target: envUrl.API_HOST,
    //     changeOrigin: true,
    //   },
    // },
  };

  const appName = require(dirs.package).name;
  const urls = prepareUrls("http", HOST, PORT, "");
  const devSocket = {
    warnings: (warnings) =>
      devServer.sockWrite(devServer.sockets, "warnings", warnings),
    errors: (errors) =>
      devServer.sockWrite(devServer.sockets, "errors", errors),
  };

  const compiler = createCompiler({
    appName,
    config,
    urls,
    webpack,
    devSocket,
  });
  const devServer = new WebpackDevServer(devServerConfigs, compiler);
  (async () => {
    await devServer.start();
  })();
} catch (err) {
  if (err) {
    console.log(err);
  }
  process.exit(1);
}
