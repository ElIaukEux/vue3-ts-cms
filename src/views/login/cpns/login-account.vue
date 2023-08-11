<template>
  <div class="login-account">
    <el-form :model="accountInfo" :rules="rules" ref="ruleFormRef">
      <el-form-item prop="username">
        <el-input
          v-model="accountInfo.username"
          placeholder="请输入账号"
          :prefix-icon="UserFilled"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="accountInfo.password"
          type="password"
          placeholder="请输入密码"
          :prefix-icon="Lock"
        />
      </el-form-item>
      <el-form-item class="captcha-box">
        <el-input
          v-model="accountInfo.code"
          :prefix-icon="Key"
          placeholder="请输入验证码"
          class="captcha"
        ></el-input>
        <img @click="captchBtn" :src="captchaImg" alt="" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { Key, UserFilled, Lock } from '@element-plus/icons-vue'
import { computed, onMounted, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { FormInstance } from 'element-plus'
import { accountCaptchaImg } from '@/service/login/login'
import { useStore } from 'vuex'

onMounted(() => {
  captchBtn()
})

const store = useStore()

const test = computed(() => store.state.name)

console.log(test.value)

const accountInfo = reactive({
  username: '',
  password: '',
  code: '',
  uuid: ''
})

let captchaImg = ref<string>()

const ruleFormRef = ref<FormInstance>()
const loginAction = (): void => {
  ruleFormRef.value?.validate((voild) => {
    if (voild) {
      // console.log("随便打印一下")
      store
        .dispatch('login/acccountLoginActions', {
          ...accountInfo
        })
        .then((res) => {
          console.log(res, '这个是啥----500')
          if (res && res.code === 500) {
            captchBtn()
          }
        })
    }
  })
}

const captchBtn = async () => {
  try {
    const res = await accountCaptchaImg()
    captchaImg.value = 'data:image/gif;base64,' + res.img
    accountInfo.uuid = res.uuid
  } catch (err) {
    console.log('111报错了')
  }
}

defineExpose({
  loginAction
})
</script>

<style scoped lang="less">
.login-account {
  :deep(.el-input__inner) {
    height: 40px;
  }
  :deep(.el-form-item) {
    align-items: center;
  }
  .captcha {
    // margin-right: 40px;
    width: 50%;
  }
  .captcha-box :deep(.el-form-item__content) {
    justify-content: space-between;
  }
}
</style>
