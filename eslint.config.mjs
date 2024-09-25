import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  typescript: true,
  vue: true,
  react: true,

  // 在Flat配置中不再支持' .eslintignore '，请使用' ignore '代替
  ignores: [
    // '**/a.ts',
  ],

  // 自定义风格规则 https://eslint.style/rules
  // stylistic: {
  //   indent: 2, // 4, or 'tab'
  //   quotes: 'single', //  or 'double'
  // },

  // 取消 Anthony 喜好的一些固执己见的规则。
  lessOpinionated: true,
  // 覆盖规则
  rules: {
    'style/no-multiple-empty-lines': ['error', { max: 2 }], // 最大空行
    'no-console': 'warn',
    'unocss/blocklist': 'warn', // 禁止特定的类选择器
    'unocss/enforce-class-compile': 'off', // 强制类编译
    'unocss/order-attributify': 'warn', // 对属性选择器强制执行特定顺序
    'unocss/order': 'warn', // 对类选择器强制执行特定的顺序
    'unused-imports/no-unused-vars': 'warn',
    'symbol-description': 'warn',
    'no-unused-vars': 'warn',
    'unused-imports/no-unused-imports': 'error', // 禁止未使用的导入
  },
  formatters: {
    css: true,
    html: true,
  },
}).overrideRules({
  // 强制类型和接口中的属性名和类型注释之间保持一致的间距
  // 'style/key-spacing': ['warn', { align: 'colon', mode: 'strict' }],
  // 强制执行模板中每行的多个属性
  'vue/max-attributes-per-line': ['error', {
    singleline: { max: 5 },
    multiline: { max: 1 },
  }],
}).override('antfu/typescript/rules', {
  rules: {
    'ts/no-explicit-any': 'off', // 使用any
    'jsdoc/sort-tags': ['warn'],
    'ts/ban-ts-comment': 'off', // 禁止使用 @ts-ignore
    // 'ts/no-unused-expressions': 'off',
  },
})

// 有关代码格式化的配置规则，可参阅源码 😅
// https://github.com/eslint-stylistic/eslint-stylistic/blob/main/packages/eslint-plugin/configs/customize.ts
