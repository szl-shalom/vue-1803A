import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/index"
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import( /* webpackChunkName: "Index" */ '../views/Index.vue')
  },
  {
    path: '/car',
    name: 'Car',
    component: () => import( /* webpackChunkName: "Car" */ '../views/Car.vue')
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

router.beforeEach((to, from, next) => {
  // if (to.path === "/car") {
  //   localStorage.getItem("token") ? next() : next(false)
  // } else {
  next()
  // }
})


export default router