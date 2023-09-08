<template>
  <div class="App">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import "element-plus/theme-chalk/el-button.css"

export default defineComponent({
  name: 'App'
})
</script>

<style lang="less">
.App {
  height: 100%;
  background-color: #ccc;
}
</style>
