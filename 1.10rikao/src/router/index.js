import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/tab1"
  },
  {
    path: '/tab1',
    name: 'tab1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pages/Tab1.vue')
  },
  {
    path: '/tab2',
    name: 'tab2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pages/Tab2.vue')
  },
  {
    path: '/tab3',
    name: 'tab3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pages/Tab3.vue')
  },
  {
    path: '/tab4',
    name: 'tab4',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pages/Tab4.vue')
  },
  {
    path: '/tab5',
    name: 'tab5',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pages/Tab5.vue')
  },
  {
    path: '/tab6',
    name: 'tab6',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pages/Tab6.vue')
  },
  {
    path: '/tab7',
    name: 'tab7',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pages/Tab7.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log(to,"到哪个页面去")
  next()
})

export default router
