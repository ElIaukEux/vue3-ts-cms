<template>
  <div class="main">
    <el-container class="main-contain">
      <el-aside width="230px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container class="page-contain">
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import NavMenu from '@/components/nav-menu'
</script>

<style scoped lang="less">
.main {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.main-contain,
.page-contain {
  height: 100%;
}
</style>
