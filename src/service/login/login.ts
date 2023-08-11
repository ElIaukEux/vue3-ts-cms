import myRequest from '../index'

import { IAccountType, ICaptcha, loginResult } from './type'

export function accountCaptchaImg() {
  return myRequest.get<ICaptcha>({
    url: '/captchaImage'
    // data: account
  })
}

export function accountLogin(account: IAccountType) {
  return myRequest.post<loginResult>({
    url: '/login',
    data: account
  })
}

export function accountGetInfo() {
  return myRequest.get({
    url: '/getInfo'
  })
}

export function accountGetMenu() {
  return myRequest.get({
    url: '/getRouters'
  })
}
