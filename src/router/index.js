import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('@/template/home')), 'home')
const login = r => require.ensure([], () => r(require('@/template/login')), 'login')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
