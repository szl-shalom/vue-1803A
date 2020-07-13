import Vue from 'vue'
import App from './App.vue'
import ListItem from "@/components/ListItem";

// 注册全局组件 ListItem
Vue.component("ListItem", ListItem)
// 注册事件处理中心
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')