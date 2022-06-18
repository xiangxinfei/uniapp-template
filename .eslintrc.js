module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    es6: true,
    node: true,
  },
  globals: {
    uni: true,
    getApp: true,
  },
  rules: {
    'vue/html-self-closing': 'off',
    'no-console': 'warn', // 警告调用 console 对象的方法。
    'no-var': 'error', // 阻止 var 的使用，推荐使用 const 或 let
    'no-unused-vars': 'warn', // 声明变量但未使用
    semi: [2, 'never'], // 去除语句末尾分号
    quotes: [1, 'single'], // 使用单引号
    eqeqeq: 2, // 必须使用全等
    'object-curly-spacing': ['error', 'always'], // 要求花括号内有空格 (除了 {})
    'vue/attributes-order': 0, // 属性换行提示
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always', // 匿名函数, 要求在参数的 ( 前面有一个空格
        named: 'never', // 命名的函数, 禁止在参数的前面有空格
        asyncArrow: 'always', // 异步的箭头函数, 要求在参数的 ( 前面有一个空格
      },
    ],
    'vue/singleline-html-element-content-newline': 'off', // 关闭在只有一个属性的标签里面的文字需要换行的提示
    'vue/multiline-html-element-content-newline': 'off', // 关闭在有多个属性的标签里面的文字需要换行的提示
    //强制在逗号前后使用一致的空格
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    //
    'comma-style': [2, 'last'],
    //要求遵循大括号约定
    curly: [2, 'multi-line'],
    //当变量在其被定义的范围之外被使用时，该规则会发出警告, 帮助语言初学者避免因变量声明提升而产生的 bug
    'block-scoped-var': 2,
    'no-alert': 2,
    //禁止函数名和左括号之间有空格
    'func-call-spacing': ['error', 'never'],
  }

}
