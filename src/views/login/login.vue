<template>
  <div class="login">
    <login-pannel></login-pannel>
  </div>
</template>

<script lang="ts">
import LoginPannel from "./cpns/login-panel.vue"
import { defineComponent } from "vue"

export default defineComponent({
  components: {
    LoginPannel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login-bg.svg");
}
</style>
