<template>
  <div class="nav-header">
    <el-icon :size="40" color="#424242" @click="handleIconClick">
      <component :is="!isFold ? 'expand' : 'fold'"></component>
    </el-icon>
    <div class="nav-bread">
      <nav-breadcrumb :breadcrumb-list="breadcrumbList"></nav-breadcrumb>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { pathMapBread } from '@/utils/makeRoute'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import navBreadcrumb from '@/components/nav-breadcrumb'

const store = useStore()
const route = useRoute()

let isFold = ref(true)
const emit = defineEmits(['foldChange'])
const breadcrumbList = computed(() => {
  const userMenus = store.state.login.userMenus
  const currentPath = route.path
  return pathMapBread(userMenus, currentPath)
})

const handleIconClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  padding-top: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  .nav-bread {
    margin-left: 20px;
    :deep(.el-breadcrumb__inner) {
      font-size: 18px;
    }
  }
}
</style>
