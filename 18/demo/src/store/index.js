import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [], //列表数据
    car: [],
  },
  mutations: {
    INIT_LIST(state, arr) {
      state.list = arr;
      console.log("list数据 初始化了")
    },
    ADD_CAR(state, obj) {
      // 通过id 查重  如果你找到了id 返回该对象   
      let result = state.car.find(item => item.id == obj.id);
      if (result) {
        // 找到了数量++
        result.count++;
      } else {
        // 没有找到到推入新的数据
        // 新的数据数量为1
        state.car.push({
          ...obj,
          count: 1
        })
      }
      console.log("car 数据的数量发生了改变")
      console.log(state.car)
    }
  },
  actions: {
    SET_LIST(context, arr) {
      context.commit("INIT_LIST", arr)
    }
  },
  modules: {},
  getters: {
    AllPrice(state) {
      return state.car.reduce((p,n)=>{
        return p + n.count * n.price
      },0)
    }
  }
})