const { defineConfig } = require("@vue/cli-service")
const path = require("path")
// const AutoImport = require("unplugin-auto-import/webpack")
// const Components = require("unplugin-vue-components/webpack")
// const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")
module.exports = defineConfig({
  // 方式1：vueCli提供的属性
  transpileDependencies: true,
  devServer: {
    port: 80,
    open: true,
    proxy: {
      "^/dev-api": {
        target: "http://vue.ruoyi.vip/prod-api/",
        pathRewrite: {
          "^/dev-api": ""
        },
        changeOrigin: true
      }
    }
  },
  // 方式2：和webpack属性完全一致，最后会合并
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components"
      }
    }
    // plugins: [
    //   AutoImport({
    //     resolvers: [ElementPlusResolver()]
    //   }),
    //   Components({
    //     resolvers: [ElementPlusResolver()]
    //   })
    // ]
  }

  // 方式3  通过config来修改配置（会覆盖）
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     "@": path.resolve(__dirname, "src"),
  //     components: "@/components"
  //   }
  // }

  // 方式4  可以链式设置属性
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set("@", path.resolve(__dirname, "src"))
  //     .set("components", "@/components")
  // }
})
