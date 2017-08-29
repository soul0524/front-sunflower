<template>
  <div id="header-menu">
    <el-menu :default-active="activeIndex1" class="el-menu-demo" mode="horizontal">
      <div class="logo"><i class="i-logo dis-in-b"></i>共享吧</div>
      <el-menu-item index="1">购物车</el-menu-item>
      <el-button type="primary" class="login-btn" @click.native="login">登录</el-button>
      <el-button class="register-btn">注册</el-button>
      <!--  <el-submenu index="2">
       <template slot="title"><i class="i-user dis-in-b"></i></template>
       <el-menu-item index="2-1">个人中心</el-menu-item>
       <el-menu-item index="2-2">我的消息</el-menu-item>
       <el-menu-item index="2-3">退出</el-menu-item>
     </el-submenu> -->
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'm-header',
  data() {
    return {
      activeIndex1: '1'
    };
  },
  methods: {
    login() {
      console.log(this.$router)
     this.$router.push({
        name: 'login'
      })
    }
  }
}

</script>
<style>
.dis-in-b {
  display: inline-block;
}

#header-menu .i-user {
  background: url('../assets/user.png');
  width: 24px;
  height: 24px;
  background-size: 100%;
}

.logo {
  float: left;
  height: 60px;
  line-height: 60px;
  margin-right: 20%;
  font-size: 16px;
  font-family: 'simhei';
}

#header-menu .i-logo {
  background: url('../assets/i-logo.png');
  width: 48px;
  height: 48px;
  background-size: 100%;
  vertical-align: middle;
  margin: 0 10px 0 20px;
}

.login-btn,
.register-btn {
  margin: 12px 20px 0 0;
  float: right;
}

.el-menu--horizontal .el-submenu {
  float: right;
}

.el-submenu .el-menu-item {
  min-width: 100px;
}

.el-menu--horizontal .el-submenu>.el-menu {
  right: 0;
  left: -100%;
}

</style>
