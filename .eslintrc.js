// .eslintrc.js
module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  extends: ['eslint-config-alloy/react', 'eslint-config-alloy/typescript'],
  globals: {
    OnlySVG: true,
    monitor: true,
    CanvasRender: true,
    React: true,
    FOREIGN_PRIVATE_BUILD: true,
  },
  rules: {
    eqeqeq: 0,
    indent: ['error', 2, { SwitchCase: 1 }],
    // 不需要限制require方法的调用，只是新版的require需要require(图片路径).default 才能引入图片
    '@typescript-eslint/no-require-imports': 0,
    // 不需要强制指定方法的 访问性如：public/private等
    '@typescript-eslint/explicit-member-accessibility': 0,
    // 不需要限制this的使用
    '@typescript-eslint/no-invalid-this': 0,
    '@typescript-eslint/no-duplicate-imports': 0,
    '@typescript-eslint/no-unnecessary-type-constraint': 0
  },
};
