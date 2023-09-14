import type { IForm } from '@/base-ui/form'
export const userSearch: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'intro',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'intro',
      type: 'select',
      label: '爱好',
      placeholder: '请选择爱好',
      options: [
        { value: '0001', label: '打篮球' },
        { value: '0002', label: '踢足球' },
        { value: '0003', label: '打羽毛球' }
      ]
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
