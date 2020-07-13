import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: "/",
  redirect: "/index"
}, {
  path: '/index',
  name: 'Index',
  component: () => import('@/views/Index.vue')
}, {
  path: '/car',
  name: 'Car',
  component: () => import('@/views/Car.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router