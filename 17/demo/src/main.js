import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局组件
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
// 注册全局组件
Vue.component("MyHeader", MyHeader)
Vue.component("MyFooter", MyFooter)
// 懒加载插件 vue-lazyload
import VueLazyload from 'vue-lazyload'
// 配置
Vue.use(VueLazyload, {
  preLoad: 3,
  error: 'error.jpg',
  loading: 'loading.jpg',
  attempt: 1,
  listenEvents: ['scroll']
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')