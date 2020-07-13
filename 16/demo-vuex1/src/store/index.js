import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存放数据
  state: {
    num: 1,
    todos: [{
      title: "item-1",
      done: true
    }, {
      title: "item-2",
      done: true
    }, {
      title: "item-3",
      done: false
    }, {
      title: "item-4",
      done: false
    }],
    list: [],
  },
  // 存放方法
  // 方法的第一个参数必须是state
  // 方法的第二个参数起 是实参
  mutations: {
    ADD(state, obj) {
      state.num += obj.num2
      // setTimeout(() => {

      // }, 2000)
      console.log("state change !!")
    },
    SET_LIST(state,arr){
        state.list = arr
    }
  },
  getters: {
    finish: state => {
      return state.todos.filter(item => !item.done)
    }
  },
  actions: {
    setData: context => {
      console.log(context)
      context.commit("ADD", {
        num2: 3
      })
    },
    setList: (context, arr) => {
      console.log(arr)
      context.commit("SET_LIST",arr)
    }
  },
  modules: {},
})