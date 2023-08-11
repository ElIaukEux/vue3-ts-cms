import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { MYRequestConfig, MyRequestInterceptors } from './type'

import { ElLoading, ElMessage } from 'element-plus'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEFAULT_LOADING = true

class MyRequest {
  instance: AxiosInstance
  interceptors?: MyRequestInterceptors
  loading?: LoadingInstance
  isShowLoading?: boolean
  constructor(config: MYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存基本信息
    this.interceptors = config.interceptors
    this.isShowLoading = config.isShowLoading ?? DEFAULT_LOADING
    //使用拦截器（实例拦截器）
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    ),
      // 所有都有的拦截器
      this.instance.interceptors.request.use(
        (config) => {
          // console.log("所有请求的拦截器")
          if (this.isShowLoading) {
            this.loading = ElLoading.service({
              lock: true,
              text: '正在请求数据....',
              background: 'rgba(0, 0, 0, 0.1)',
              fullscreen: true
            })
          }
          return config
        },
        (err) => {
          console.log(err)
        }
      )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有响应的拦截器', res)
        this.loading?.close()
        this.isShowLoading = DEFAULT_LOADING
        // return res
        if (res.data.code === 500) {
          ElMessage({
            message: res.data.msg,
            type: 'error'
          })
        }
        if (res.data.code === 401) {
          ElMessage({
            message: res.data.msg,
            type: 'error'
          })
        }
        return res.data
      },
      (err) => {
        this.loading?.close()
        this.isShowLoading = DEFAULT_LOADING
        console.log(err)
        // return err
      }
    )
  }

  request<T = any>(config: MYRequestConfig<T>) {
    return new Promise<T>((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        // console.log("单独请求的请求拦截")
        config = config.interceptors.requestInterceptor(config)
      }

      // 判断是否需要显示loading
      // 这里需要写false是因为undefined也会进来。
      if (config.isShowLoading === false) {
        this.isShowLoading = config.isShowLoading // 接口中设置是否需要loading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            // console.log("单独请求的响应拦截")
            res = config.interceptors.responseInterceptor(res)
          }
          // console.log(res.data)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: MYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: MYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default MyRequest
