import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存放数据
  state: {
    initData: [],
  },
  mutations: {
    // 设置stat.initData 初始化
    INIT_DATA(state, arr) {
      // 4 初始化数据
      state.initData = arr;
      console.log("initData 初始化了")
    },
    ADD_DATA(state, obj) {
      // IV 添加数据
      state.initData.push(obj);
      console.log("initData 发生了改变")
    },
    // 三 ： 删除  使用filter
    DEL_DATA(state, id) {
      state.initData = state.initData.filter(item => item.id != id);
      console.log("initData 发生了删除")
    }
  },
  actions: {
    // 调用mutations 
    GET_INIT_DATA(content, arr) {
      // 3 调用方法 INIT_DATA
      content.commit("INIT_DATA", arr)
    }
  },
  getters: {
    finish(state) {
      return state.initData.filter(item => item.done)
    },
    process(state) {
      return state.initData.filter(item => !item.done)
    }
  }
})