import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: "/",
  redirect: "/index"
}, {
  path: "/index",
  component: () => import("@/views/Index")
}, {
  path: "/car",
  component: () => import("@/views/Car")
}, {
  path: "*",
  component: () => import("@/views/404")
}, {
  path: "/detail",
  component: () => import("@/views/Detail")
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router