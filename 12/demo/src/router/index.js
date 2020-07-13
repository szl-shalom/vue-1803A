import Vue from 'vue'
// 引入vue-router  官方路由管理插件
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)


// 路由注册表
const routes = [{
  path: "/",
  // 路由重定向 
  redirect: "/index"
}, {
  path: "/index",
  component: () => import("@/views/index.vue")
}, {
  path: "/home",
  component: () => import("@/views/home.vue"),
  children: [{
      path: "/home",
      redirect: "/home/list"
    }, {
      path: "/home/list",
      component: () => import("@/views/List.vue")
    },
    {
      path: "/home/item",
      component: () => import("@/views/Item.vue")
    }
  ]
}, {
  path: "/banner",
  component: () => import("@/views/Banner.vue")
}, {
  path: "/detail",
  component: () => import("@/views/detail.vue")
}, {
  // 路由404页面
  path: "*",
  component: () => import("@/views/404.vue")
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router