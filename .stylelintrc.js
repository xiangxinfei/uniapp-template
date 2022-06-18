module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier"],
  rules: {
    "declaration-colon-space-after": "always-single-line",  // 冒号后的声明需要一个空格或不允许空白
    "declaration-colon-space-before": "never", // 冒号之前的声明需要一个空格或不允许空白
    "declaration-block-trailing-semicolon": "always", // 要求或不允许在声明块后面的分号
    "block-closing-brace-newline-before": "always", // 在块的右大括号前指定一个换行符或禁止留有空格
    "unit-no-unknown": [ // 允许未知的单位
      true,
      {
        "ignoreUnits": "/rpx/"
      }
    ],
    "selector-type-no-unknown": null, // 不允许未知类型选择器
    "rule-empty-line-before": [ // 不允许rules前空一行
      "always",
      {
        ignore: ["after-comment", "first-nested"]
      }
    ],
    "indentation": 2, // 缩进
    'no-descending-specificity': null, // 禁止低优先级的选择器出现在高优先级的选择器之后
    "no-duplicate-selectors": null, // 禁止重复的选择器
    "no-empty-source": null, // 不允许空的来源
  }
}
