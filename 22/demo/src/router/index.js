import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import( /* webpackChunkName: "Home" */ '../views/Home.vue')
  }, {
    path: '/like',
    name: 'Like',
    component: () => import( /* webpackChunkName: "Like" */ '../views/Like.vue')
  }, {
    path: '/list',
    name: 'List',
    component: () => import( /* webpackChunkName: "List" */ '../views/List.vue')
  }, {
    path: '/my',
    name: 'My',
    component: () => import( /* webpackChunkName: "My" */ '../views/My.vue')
  },
  {
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