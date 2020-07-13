import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: "/",
  redirect: "/index"
}, {
  path: "/index",
  name: "Index",
  component: () => import("@/views/Index"),
  children: [{
    path: "/index",
    redirect: "/index/commend",
  }, {
    path: "/index/commend",
    component: () => import("@/views/Commend")
  }, {
    path: "/index/tel",
    component: () => import("@/views/Tel")
  }]
}, {
  path: "/home",
  name: "Home",
  component: () => import("@/views/Home")
}, {
  path: "/car",
  name: "Car",
  component: () => import("@/views/Car")
}, {
  path: "/detail",
  component: () => import("@/views/Detail")
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 前置全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/car") {
    localStorage.getItem("token") ? next() : next("/home")
  } else {    
    next();
  }
})

export default router