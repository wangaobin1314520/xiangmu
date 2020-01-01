import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path:"/login",
    name:"login",
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
