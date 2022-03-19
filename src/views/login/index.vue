<template>
  <div class='login-wrap'>
    <el-form :model="form" label-width="70px" class='login-form'>
      <el-form-item label="用户名">
        <el-col :span="22">
          <el-input v-model="form.username" />
        </el-col>
      </el-form-item>
      <el-form-item label="密码">
        <el-col :span="22">
          <el-input v-model="form.password" type='password'/>
        </el-col>
      </el-form-item>
       <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
      <el-form-item>
        <span>用户名: admin</span>
        <span>密码: admin</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
const USERNAME = 'admin'
const PASSWORD = 'admin'
import { reactive } from 'vue'

const form = reactive({
  username: '',
  password: ''
})

const onSubmit = () => {
  if (form.value === 'admin' && form.password === 'admin') {
    this.$message({
      message: '登录成功',
      type: 'success',
    })
  } else {
    this.$message.error('登录信息有误!')
  }
}
</script>

<style scoped lang='scss'>
.login-wrap {
  height: 100vh;
  width: 100vw;
  background: url("../../assets/dva.jpeg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  .login-form {
    padding-top: 20px;
    width: 500px;
    background: rgba($color: #fff, $alpha: 0.3)
  }
}
</style>
