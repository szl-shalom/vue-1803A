import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/index"
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import( /* webpackChunkName: "Home" */ '../views/Home.vue')
  }, {
    path: '/index',
    name: 'Index',
    component: () => import( /* webpackChunkName: "Index" */ '../views/Index.vue')
  }, {
    path: '/car',
    name: 'Car',
    component: () => import( /* webpackChunkName: "Car" */ '../views/Car.vue')
  }, {
    path: '/search',
    name: 'Search',
    component: () => import( /* webpackChunkName: "Search" */ '../views/Search.vue')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import( /* webpackChunkName: "Detail" */ '../views/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router