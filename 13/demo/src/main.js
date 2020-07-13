import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MyFooter from "@/components/MyFooter";
import MyHeader from "@/components/MyHeader";

// 注册全局组件
Vue.component("MyFooter", MyFooter)
Vue.component("MyHeader", MyHeader)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')