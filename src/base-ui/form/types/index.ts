type IformType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  type: IformType
  label: string
  placeholder?: string
  otherOptions?: any
  options?: any[]
}

export interface IForm {
  labelWidth?: string
  formItems: IFormItem[]
  colLayout?: any
  itemStyle?: any
}
