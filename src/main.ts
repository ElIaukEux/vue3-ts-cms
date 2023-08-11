import { createApp } from 'vue'
import App from './App.vue'
import globalRegister from './global'

import router from './router/index'
import store from './store/index'
import { setupStore } from './store'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)
app.use(globalRegister) //按需注册全局element组件
app.use(router)
app.use(store)
setupStore()
app.mount('#app')

// 测试代码
// interface dataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// const test = myRequest.request<dataType>({
//   method: "GET",
//   url: "/home/multidata",
//   interceptors: {
//     requestInterceptor: (config) => {
//       return config
//     },
//     requestInterceptorCatch: (err) => {
//       return err
//     }
//   },
//   isShowLoading: true
// })
// test.then((res) => {
//   console.log(res, "看一下")
// })
