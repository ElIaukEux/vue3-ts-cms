<template>
  <div class="nav-menu">
    <el-menu
      active-text-color="#0099ff"
      background-color="#304156"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item, index) in userMenus" :key="index">
        <template v-if="item.children">
          <el-sub-menu :index="item.path">
            <template #title>
              <el-icon><component :is="item.meta.icon"></component></el-icon>
              <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item
              :index="menuItem.path"
              v-for="(menuItem, index) in item.children"
              :key="index"
              >{{ menuItem.meta.title }}</el-menu-item
            >
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.path" class="el-else-item"
            ><template #title>
              <el-icon><component :is="item.meta.icon"></component></el-icon>
              <span>{{ item.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'

const store = useStore()
const userMenus = store.state.login.userMenus
console.log(userMenus)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  width: 230px;
  :deep(.el-menu-item) {
    font-size: 16px;
    background-color: #1f2d3d;
    padding-left: 51px !important;
  }
  :deep(.el-sub-menu__title) {
    font-size: 18px;
  }
  .el-else-item {
    padding-left: 20px !important;
  }
}

.el-submenu {
  background-color: #001529 !important;
  // 二级菜单 ( 默认背景 )
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135 !important;
  }
}
.el-menu-item:hover {
  background-color: rgb(0, 153, 255);
  color: #fff;
}
.el-menu--vertical {
  height: 100%;
}
</style>
