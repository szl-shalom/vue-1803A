import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    girlData: [], //女生数据
    bookList: [], //书架
    isExit:true,//实现显示加入书架
  },
  mutations: {
    INIT_GIRL_DATA(state, arr) {
      state.girlData = arr;
      console.log("girlData 初始化了！！！")
    },
    ADD_BOOK_LIST(state, obj) {
      state.bookList.push(obj);
      console.log("bookList 数据改变了")
      console.log(state.bookList)
    },
    IS_EXIT(state, id) {
      state.isExit = !state.bookList.some(item => item.id === id)
    }
  },
  actions: {
    GET_GIRL_DATA(context, arr) {
      context.commit("INIT_GIRL_DATA", arr)
    }
  },
  modules: {}
})