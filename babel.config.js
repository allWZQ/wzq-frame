//编译器  将ts 转为 低版本js
//Plugin 会运行在 Preset 之前
module.exports = {
  presets: [
    //主要可以根据配置的目标浏览器或者运行环境来自动将ES2015+的代码转换为es5。
    ["@babel/preset-env"],
    //react框架需要的
    ["@babel/preset-react"],
    //typescript需要的
    ["@babel/preset-typescript"],
  ],
  plugins: [
    //es6的语法进行转换
    ["@babel/plugin-transform-runtime"],
    //编译类
    ["@babel/plugin-proposal-class-properties"],
    //按需引入antd es模块
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "lib",
        style: true,
      },
    ],
  ],
};
