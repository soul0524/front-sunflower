import Vue from 'vue'
import Vuex from 'vuex'
import global from './module/global'
import request from '../request'
import service from '../service'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectData: {}, // 下拉数据的对象
    formData: {}, // 存储表单数据的对象
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    /**
     * 存储本地可配置的选择器数据
     * @param  {[object]} state [本地数据]
     */
    saveSelectData(context) {
      return request.get('static/data.json').then((res) => {
        context.state.selectData = res.data
      })
    },
    /**
     * 存储表单数据的变量
     * @param  {[object]} context [context对象]
     * @param  {[string]} id      [变量名称]
     */
    saveFormData({state}, data) {
       state.formData[data.name] = data.data
    },
  },
  modules: {
    global
  },
})
