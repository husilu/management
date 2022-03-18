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
          <el-input v-model="form.password" />
        </el-col>
      </el-form-item>
       <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('login')
    }
  }
};
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
