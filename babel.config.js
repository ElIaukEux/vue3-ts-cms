module.exports = {
  // 按需引入element样式
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus/lib/components',
        // customStyleName: (name) => {
        //   return `element-plus/theme-chalk/${name}.css`
        // },
        customName: (name) => {
          return `element-plus/lib/components/${name.slice(3)}`
        },
        style: true
      }
    ]
  ],
  presets: ['@vue/cli-plugin-babel/preset']
}
