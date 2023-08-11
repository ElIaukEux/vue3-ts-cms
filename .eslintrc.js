module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true // defineExpose 报错
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
