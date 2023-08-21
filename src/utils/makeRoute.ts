import type { RouteRecordRaw } from 'vue-router'

export default function makeRoute(userMenusList: any[]): RouteRecordRaw[] {
  const userMenus = JSON.parse(JSON.stringify(userMenusList))
  const routes: RouteRecordRaw[] = []
  userMenus.forEach((item: any) => {
    if (item.name === 'System') {
      item.component = () => import(`@/views/main/system/user/index.vue`)
    }
    if (!item.hidden) {
      console.log(item.path, '-zhegepath----9090')

      item.path = item.path.replace('/', '')
      if (item.children) {
        item.children.forEach((element: RouteRecordRaw) => {
          try {
            if (element.name === 'User') {
              console.log(element.component, '-----8989')
              const path = element.component + '.vue'
              // element.component = require.ensure([], (require) =>
              //   require(`@/views/main/${element.component}.vue`)
              // )
              //  import中不能使用变量
              element.component = () => import(`@/views/main/${path}`)
            }
          } catch (e) {
            // alert(e)
          }
        })
      }
      if (item.path.indexOf('http://') === -1) {
        routes.push(item)
      }
    }
    // console.log(item, '看一下这个是----7890')
  })
  return routes
}
