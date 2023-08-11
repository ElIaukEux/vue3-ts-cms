<template>
  <div class="login-phone">
    <el-form :model="phoneInfo">
      <el-form-item label="手机号">
        <el-input v-model="phoneInfo.phone" />
      </el-form-item>
      <el-form-item label="验证码" class="code">
        <el-input v-model="phoneInfo.code" />
        <el-button type="primary" class="code-btn">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const phoneInfo = reactive({
  phone: '',
  code: ''
})
</script>

<style scoped>
.login-phone {
  /deep/ .el-input__inner {
    height: 40px;
  }
  >>> .el-form-item__content {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  .code-btn {
    margin-left: 5px;
    height: 40px;
  }
  >>> .el-form-item {
    align-items: center;
  }
}
</style>
