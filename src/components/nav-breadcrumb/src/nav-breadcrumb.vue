<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in props.breadcrumbList" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IBreadcrumb } from '../types'

const props = defineProps({
  breadcrumbList: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
})

console.log(props.breadcrumbList, '909090')
</script>

<style scoped lang="less"></style>
