<template>
  <div class="login-account">
    <el-form :model="accountInfo" :rules="rules" ref="ruleFormRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountInfo.name" />
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input v-model="accountInfo.passWord" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { rules } from "../config/account-config"
import { FormInstance } from "element-plus"

const accountInfo = reactive({
  name: "",
  passWord: ""
})

const ruleFormRef = ref<FormInstance>()
const loginAction = (): void => {
  ruleFormRef.value?.validate((voild) => {
    if (voild) {
      console.log("验证通过")
    } else {
      console.log("没通过")
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style scoped lang="less">
.login-account {
  /deep/ .el-input__inner {
    height: 40px;
  }
  /deep/ .el-form-item {
    align-items: center;
  }
}
</style>
