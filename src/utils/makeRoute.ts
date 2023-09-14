import type { RouteRecordRaw } from 'vue-router'
import type { IBreadcrumb } from '@/components/nav-breadcrumb'

let firstName: any = null

export function pathMapBread(userMenusList: any, currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenusList, currentPath, breadcrumbs)
  return breadcrumbs
}

export function pathMapToMenu(
  userMenusList: any,
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  const routerList = makeRoute(userMenusList)
  const currentRouterName = currentPath.split('/')
  let a: any
  for (let i = 0; i < routerList.length; i++) {
    if (routerList[i].path === currentRouterName[2]) {
      if (breadcrumbs) {
        breadcrumbs.push({
          name: routerList[i].meta?.title as string
          // path:routerList[i].
        })
      }
      a = routerList[i]
    }
  }
  const currentName = a.children?.find((element: any) => {
    return element?.path === currentRouterName[currentRouterName.length - 1]
  })
  breadcrumbs?.push({
    name: currentName.meta.title
  })
  return currentName
}

export default function makeRoute(userMenusList: any[]): RouteRecordRaw[] {
  const userMenus = JSON.parse(JSON.stringify(userMenusList))
  let firsrFlag = false

  const routes: RouteRecordRaw[] = []
  userMenus.forEach((item: any) => {
    if (item.name === 'System') {
      item.component = () => import(`@/views/main/system/index.vue`)
      item.redirect = '/main/system/user'
    }
    if (!item.hidden) {
      item.path = item.path.replace('/', '')
      if (item.children) {
        item.children.forEach((element: RouteRecordRaw) => {
          try {
            if (!firsrFlag) {
              // console.log(element, 'pppppp----678')
              firstName = element.name
              firsrFlag = true
            }
            const path = element.component + '.vue'
            // element.component = require.ensure([], (require) =>
            //   require(`@/views/main/${element.component}.vue`)
            // )
            //  import中不能使用变量
            element.component = () => import(`@/views/main/${path}`)
            // }
          } catch (e) {
            console.log(e)
          }
        })
      }
      if (item.path.indexOf('http://') === -1) {
        routes.push(item)
      }
    }
  })
  return routes
}

export { firstName }
