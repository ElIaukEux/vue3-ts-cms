<template>
  <div class="main">
    <el-container class="main-contain">
      <!-- <el-aside width="230"> -->
      <el-aside :width="isFold ? '60' : '230'">
        <nav-menu :collapse="isFold"></nav-menu>
      </el-aside>
      <el-container class="page-contain">
        <el-header
          ><nav-header @foldChange="foldChange"></nav-header
        ></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

const isFold = ref(true)
const foldChange = (palyLoad: boolean) => {
  isFold.value = palyLoad
}
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
