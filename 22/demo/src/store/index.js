import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initData: [],
    carData: [],
  },
  mutations: {
    INIT_DATA(state, arr) {
      state.initData = arr;
      console.log("initData 初始化了")
      console.log(state.initData)
    },
    CHANGE_FLAG(state, id) {
      let result = state.initData.find(item => item.id === id);
      result.flag = !result.flag
      console.log("状态发生了改变")
    },
    ADD_CAR_DATA(state, obj) {
      let result = state.carData.find(item => item.id === obj.id);
      if (result) {
        result.count++
      } else {
        state.carData.push({
          ...obj,
          count: 1
        })
      }
      console.log(state.carData)
    },
    DEL_CAR_DATA(state, id) {
      let result = state.carData.find(item => item.id === id);
      if (result.count > 1) {
        result.count--
      } else {
        if (window.confirm("确认要删除吗？")) {
          state.carData = state.carData.filter(item => item.id !== id)
        }
      }


    }
  },
  actions: {
    SET_INIT_DATA(context, arr) {
      context.commit("INIT_DATA", arr)
    }
  },
  modules: {},
  getters: {
    likeArr(state) {
      return state.initData.filter(item => item.flag)
    },
    allPrice(state) {
      return state.carData.reduce((p, n) => {
        return n.flag ? p + n.price * n.count : p;
      }, 0)
    },
    allCount(state) {
      return state.carData.reduce((p, n) => {
        return p + +n.count;
      }, 0)
    }
  }
})