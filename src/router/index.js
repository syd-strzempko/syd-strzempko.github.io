import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/art',
    name: 'art',
    component: () => import(/* webpackChunkName: "art" */ '../views/ArtList.vue')
  },
  {
    path: '/art/:id',
    name: 'artsingle',
    component: () => import(/* webpackChunkName: "art" */ '../views/ArtSingle.vue'),
  },
  {
    path: '/work',
    name: 'work',
    component: () => import(/* webpackChunkName: "work" */ '../views/WorkList.vue'),
  },
  {
    path: '/work/:id',
    name: 'worksingle',
    component: () => import(/* webpackChunkName: "work" */ '../views/WorkSingle.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
