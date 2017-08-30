<template>
  <div id="login">
    <div class="input-cont pr">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="input-item pr">
        <el-input v-model="params.name" placeholder="账号" icon="edit" @change="checkUser"></el-input><i class="i-user dis-in-b pa"></i></div>
      <div class="input-item pr">
        <el-input v-model="params.password" type="password" placeholder="密码"></el-input><i class="i-pwd dis-in-b pa"></i></div>
      <el-button type="primary" :disabled="isLogin" @click.native="login">登录</el-button>
    </div>
  </div>
</template>
<script>
import service from '../service'
export default {
  name: 'login',
  data() {
    return {
      params: {
        name: '',
        password: ''
      },
      isLogin: true
    };
  },
  methods: {
    login() {
      var _this = this;
      this.$ajax({
        method: 'post',
        url: 'http://60.205.205.160:8080/YiWu-Server/auth/login',
        data: this.params
      }).then(res => {
        if (res.data.success) {
          console.log(res.data.details.id)
          this.$router.push({
            name: 'home',
            params: {
              id:res.data.details.id
            }
          })
        }
        console.log(res)
        // this.$router.push({ name: 'home' })
      })

    },
    checkUser(value) {
      this.isLogin = value == '' ? true : false
    }
  }
}

</script>
<style>
html {
  background: #fafafa
}

#login {
  height: 100%;
}

.logo {
  margin-bottom: 20px;
}

.input-cont {
  width: 300px;
  height: 330px;
  left: 50%;
  margin-left: -150px;
  top: 50%;
  margin-top: -160px;
}

.input-item {
  margin-bottom: 10px;
}

.el-input__inner {
  text-indent: 25px;
  height: 40px;
}

.i-user {
  background: url('../assets/i-user.png');
  width: 20px;
  height: 20px;
  background-size: 100%;
  left: 10px;
  top: 8px;
}

.i-pwd {
  background: url('../assets/i-pwd.png');
  width: 16px;
  height: 20px;
  background-size: 100%;
  left: 10px;
  top: 8px;
}

.input-cont .el-button {
  width: 100%;
}

</style>
