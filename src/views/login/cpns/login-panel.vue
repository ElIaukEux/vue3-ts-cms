<template>
  <div class="login-panel">
    <h2>后台管理系统</h2>
    <el-tabs
      v-model="activeName"
      type="border-card"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span class="title">账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span class="title">手机登录</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="rememberPsw">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <div class="button-login">
      <el-button type="primary" @click="SubmitEvent">立即登录</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { UserFilled, Iphone } from '@element-plus/icons-vue'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

const activeName = ref('account')
const accountRef = ref<InstanceType<typeof LoginAccount>>()
console.log(accountRef.value)

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const isKeepPassword = ref(true)
const SubmitEvent = () => {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction()
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 100px;
  width: 430px;
  text-align: center;

  .title {
    margin-left: 5px;
  }
  /deep/ .el-tabs__nav {
    width: 100%;
  }
  /deep/ .el-tabs__item {
    flex: 1;
  }
  /deep/ .el-tabs--border-card {
    box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.1);
  }
  .rememberPsw {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .button-login {
    margin-top: 10px;
    width: 100%;
    button {
      width: 100%;
      height: 40px;
    }
  }
}
</style>
