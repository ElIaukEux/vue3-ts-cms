<template>
  <div class="user">
    <div class="user-search">
      <my-form v-bind="userSearch"></my-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyForm from '@/base-ui/form'
import { userSearch } from './config'
</script>

<style scoped lang="less">
.user {
  .user-search {
  }
}
</style>

<style></style>
