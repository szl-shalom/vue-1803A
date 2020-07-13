import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: "/",
  redirect: "/index"
}, {
  path: "/index",
  component: () => import("@/views/Index"),
  children: [{
    path: "/index",
    redirect: "/index/list"
  }, {
    path: "/index/list",
    component: () => import("@/views/List")
  }, {
    path: "/index/Commend",
    component: () => import("@/views/Commend")
  }]
}, {
  path: "/home",
  component: () => import("@/views/Home")
}, {
  path: "/car",
  component: () => import("@/views/Car")
}, {
  path: "/detail/:id",
  component: () => import("@/views/Detail")
}]

routes.push({
  path: "*",
  component: () => import("@/views/404")
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // ...
  // 判断跳转的是不是 购物车路由 
  if (to.path === "/car") {
    // 登录就进入购物车  没有登录跳转登录页面
      localStorage.getItem("token") ? next() :next("/home")
  } else {
    next()
  }

})

export default router