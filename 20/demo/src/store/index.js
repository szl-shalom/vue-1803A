import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initList: [],
    carData: [],
  },
  mutations: {
    INIT_LIST(state, arr) {
      state.initList = arr;
      console.log("initList 数据初始化了 ！！！！！")
    },
    ADD_CAR_DATA(state, obj) {
      let res = state.carData.find(item => item.id === obj.id);
      if (res) {
        res.count++;
      } else {
        state.carData.push({
          ...obj,
          count: 1,
          checked: false,
        })
      }
      console.log("数量发生改变！！")
      console.log(state.carData)
    },
    DEL_CAR_DATA(state){
      state.carData = state.carData.filter(item=>!item.checked)
    }
    
  },
  actions: {
    GET_INIT_LIST(context, arr) {
      context.commit("INIT_LIST", arr)
    }
  },
  modules: {},
  getters: {
    AllPrice(state) {
      return state.carData.reduce((p, n) => {
        return n.checked ? p + n.count * n.price : p;
      }, 0)
    }
  }
})