import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局组件
import MyFooter from "@/components/MyFooter";
import Axios from 'axios';
//注册全局组件
Vue.component("MyFooter",MyFooter)
// axios放到原型上
Vue.prototype.$http = Axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
