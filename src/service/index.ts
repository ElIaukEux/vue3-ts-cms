import MyRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("实例的请求拦截器")
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log(err)
    },
    responseInterceptor(res) {
      console.log("实例的响应拦截器")
      return res
    },
    responseInterceptorCatch(err) {
      console.log(err)
    }
  }
})

export default myRequest
