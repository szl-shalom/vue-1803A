import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carData: [],
    initData: [],
  },
  mutations: {
    // 添加到购物车
    ADD_CAR_DATA(state, obj) {
      // 通过id找
      let result = state.carData.find(item => item.id === obj.id);
      // 判断是否存在
      if (result) {
        result.count++;
      } else {
        // 不存在推入新数据
        state.carData.push({
          ...obj,
          count: 1
        })
      }
      console.log(state.carData)
    },
    INIT_DATA(state, arr) {
      state.initData = arr;
      console.log("initData 初始化了")
      console.log(state.initData)
    },
    // 数量-
    REDUCE_CAR_DATA(state, id) {
      // 通过ID找到对象
      let result = state.carData.find(item => item.id === id);
      // 数量是否大于 1
      if (result.count > 1) {
        result.count--;
      } else {
        // 小于   过滤id 
          if(window.confirm("确认要删除吗？")){
              state.carData = state.carData.filter(item=>item.id !==id);
          }
      }
      console.log("carData 数据发生了改变")
    }
  },
  actions: {
    GET_INIT_DATA(context, arr) {
      context.commit("INIT_DATA", arr)
    }
  },
  getters: {
    // 总数量  不计算选中效果
    count(state) {
      return state.carData.reduce((p, n) => {
        return p + +n.count
      }, 0)
    },
    // 总价钱  计算选中效果
    price(state) {
      return state.carData.reduce((p, n) => {
        return n.checked ? p + n.count * n.price : p;
      }, 0)
    }
  }
})