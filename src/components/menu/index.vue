<template>
  <el-aside width="200px" class="bg-gray-600 overflow-hidden">
    <el-menu
      :collapse="isCollapse"
      active-text-color="#ffd04b"
      background-color="#4B5563"
      text-color="#fff"
      class="h-full"
      :unique-opened='true'
      :router="true"
      default-active="/"
    >
      <template v-for="(item, index) in menuData" :key="index">
        <el-menu-item v-if="!item.children" :index='item.url'>
          <template #title>{{ item.title }}</template>
        </el-menu-item>
        <el-sub-menu v-else :index='item.url'>
          <template #title><span>{{item.title}}</span></template>
          <el-menu-item v-for='(sitem, sindex) in item.children' :key='sindex' :index='sitem.url'>
            {{sitem.title}}
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { computed } from "@vue/reactivity";
const store = useStore()
const isCollapse = computed(() => store.state.isCollapse);
const menuData = [
  { title: "系统首页", url: "/"},
  { title: "基础表格", url: "/table" },
  { title: "表单相关", url: "/form", children: [{ title: "基本表单", url: "/form" }, { title: "文件上传", url: "/upload" }]},
  { title: "自定义图标", url: "/icons"},
  { title: "图表", url: "/charts"},
  { title: "拖拽", url: "/drag", children: [{ title: "拖拽列表", url: "/draglist" }, { title: "拖拽弹窗", url: "/dialog" }] },
  { title: "国际化功能", url: "/i18n"},
  { title: "错误处理", url:'error',children: [{ title: "权限测试", url: "/permission" }, { title: "404", url: "/404" }]},
  { title: "关于", url: "/about"}
];
</script>

<style scoped lang="scss"></style>
