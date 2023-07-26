import { App } from "vue"

import "element-plus/theme-chalk/base.css"
import "element-plus/dist/index.css"
import { ElButton } from "element-plus"

const components = [ElButton]

export default function (app: App): void {
  for (const component of components) {
    console.log("有没有来着了")
    app.component(component.name, component)
  }
}
