<template>
  <div class="nav-header">
    <el-icon :size="40" color="#424242" @click="handleIconClick">
      <component :is="!isFold ? 'expand' : 'fold'"></component>
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let isFold = ref(true)
const emit = defineEmits(['foldChange'])

const handleIconClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  border-bottom: 1px solid #eee;
}
</style>
