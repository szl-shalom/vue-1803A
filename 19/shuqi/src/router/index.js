import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index',
  },
  {
    path: '/carBook',
    name: 'CarBook',
    component: () => import( /* webpackChunkName: "CarBook" */ '@/views/CarBook.vue')
  }, {
    path: '/home',
    name: 'Home',
    component: () => import( /* webpackChunkName: "Home" */ '@/views/Home.vue')
  }, {
    path: '/index',
    name: 'Index',
    component: () => import( /* webpackChunkName: "Index" */ '@/views/Index.vue'),
    children: [{
      path: "/index",
      redirect: "/index/girl",
    }, {
      path: "/index/girl",
      component: () => import("@/views/Girl")
    }, {
      path: "/index/boy",
      component: () => import("@/views/Boy")
    }]
  },
  {
    path: "/detail",
    component: () => import("@/views/Detail")
  },
  {
    path: "/read",
    name: "Read",
    component: () => import("@/views/Read")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path === "/home") {
    next();
    return;
  }
  

  if (to.path === "/read") {
    localStorage.getItem("token") ? next() : next("/home")
  } else {
    next()
  }
})


export default router