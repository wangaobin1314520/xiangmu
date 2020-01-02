import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {
        path: 'tab1',
        name: 'tab1',
        component: () => import(/* webpackChunkName: "tab1" */ '../views/Pages/Tab1.vue')
      },
      {
        path: 'tab2',
        name: 'tab2',
        component: () => import(/* webpackChunkName: "tab2" */ '../views/Pages/Tab2.vue')
      },
      {
        path: 'tab3',
        name: 'tab3',
        component: () => import(/* webpackChunkName: "tab3" */ '../views/Pages/Tab3.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
