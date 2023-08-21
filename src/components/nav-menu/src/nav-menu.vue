<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      :collapse="!collapse"
      :unique-opened="true"
      active-text-color="#0099ff"
      background-color="#304156"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
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
              @click="handleMenuItemClick(menuItem)"
              >{{ menuItem.meta.title }}
            </el-menu-item>
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
import router from '@/router'
import { useStore } from '@/store'
import { toRefs } from 'vue'

const props = defineProps({
  collapse: Boolean
})
const { collapse } = toRefs(props)

const store = useStore()
const userMenus = store.state.login.userMenus
// console.log(userMenus)

const handleMenuItemClick = (item: any) => {
  console.log(item, item.name, 'zhezhezhe2222')
  router.push({
    name: item.name
  })
  // router.push({
  //   path: '/main/system/user'
  // })
}
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  width: 100%;
  :deep(.el-menu) {
    border: 0;
  }
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
    background-color: #304156;
  }
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 6px 8px 6px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #304156;
    color: #fff;

    .img {
      height: 100%;
      margin: 0 10px;
    }
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
  height: calc(100% - 48px);
}
</style>
