import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface MyRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

interface MYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MyRequestInterceptors<T>
  isShowLoading?: boolean
}

export { MYRequestConfig, MyRequestInterceptors }
