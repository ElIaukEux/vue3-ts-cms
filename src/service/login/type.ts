export interface IAccountType {
  username: string
  password: string
  code: string
  uuid: string
}

export interface ICaptcha {
  code: number
  uuid: string
  img: string
}

export interface loginResult {
  code: number
  token: string
}
