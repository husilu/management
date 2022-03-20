<template>
  <el-header class='bg-gray-700 flex justify-between items-center pl-5 pr-5'>
    <div class="flex items-center">
      <el-icon class='mr-1 text-white cursor-pointer'><d-arrow-right /></el-icon>
      <div class='text-lg antialiased text-white'>后台管理系统</div>
    </div>
    <div class='right'>
      <el-icon class='rounded-full h-10 w-10 text-blue-600 bg-white cursor-pointer mr-3'><avatar /></el-icon>
      <span>
         {{username}}
      </span>
    </div>
  </el-header>
</template>

<script lang="ts" setup>
import { useStore } from '@/store';
import { computed } from "@vue/reactivity";
const store = useStore()
const username = computed(() => store.state.user?.username);
</script>

<style scoped lang="scss">
</style>
