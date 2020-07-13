import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    initData: [],
    isActive: true,
    carData: JSON.parse(localStorage.getItem("car")) || [],
  },
  mutations: {
    INIT_DATA(state, arr) {
      // 设置数据
      state.initData = arr
      console.log("initData 被设置初始值了")
    },
    TOGGLE_ISACTIVE(state) {
      state.isActive = !state.isActive
      console.log("isActive 值被改变了")
    },
    ADD_CARDATA(state, obj) {
      // 添加数据 需要去重
      // 通过id找数据
      let result = state.carData.find(item => item.id === obj.id);
      // 数据存在++
      if (result) {
        result.count++;
      } else {
        // 不存在推入
        state.carData.push({
          ...obj,
          count: 1
        });
      }
      console.log(state.carData)
    },
    ADD_COUNT(state, index) {
      state.carData[index].count++;
    },
    REDUCE_COUNT(state, index) {
      if (state.carData[index].count === 1) {
        if (window.confirm("确认要删除吗？")) {
          state.carData.splice(index, 1)
        }
      } else {
        state.carData[index].count--
      }
    }
  },
  actions: {
    GET_INIT_DATA(content, arr) {
      // 提交mutations 
      content.commit("INIT_DATA", arr)
    }
  },
  getters: {
    allPrice(state) {
      return state.carData.reduce((p, n) => {
        return p + n.count * n.price
      }, 0)
    },
    allCount(state) {
      return state.carData.reduce((p, n) => {
        return p + +n.count
      }, 0)
    }
  }
})

// 插件 监听mutations提交是  
store.subscribe((mutations, state) => {
  localStorage.setItem("car", JSON.stringify(state.carData))
})

export default store;