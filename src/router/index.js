import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/index'
  },
  { path: '/index', component: Index },
  {
    path: '/canteen',
    name: 'canteen',
    component: () => import(/* webpackChunkName: "about" */ '../views/canteen.vue')
  },
  {
    path: '/search', name: 'search', component: () => import('../views/search.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
