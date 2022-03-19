<template>
  <div class="common-layout">
      <Header></Header>
      <el-container>
        <Menu></Menu>
        <el-main>
          <router-view></router-view>
        </el-main>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import Header from '../header'
import Menu from '../menu'

</script>

<style lang="scss" scoped>
.common-layout {
  height: 100vh;
  width: 100vw;
  .el-container {
    height: calc(100vh - 60px);
  }
}
</style>
