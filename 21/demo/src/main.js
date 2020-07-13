import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyFooter from "@/components/MyFooter";
import ListItem from "@/components/ListItem"
import Axios from 'axios';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.prototype.$http = Axios
Vue.component("MyFooter", MyFooter)
Vue.component("ListItem", ListItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')