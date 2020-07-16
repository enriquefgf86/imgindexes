import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dice1 from '../views/Dice1.vue'
import Dice2 from '../views/Dice2.vue'

import Dice3 from '../views/Dice3.vue'

import Dice4 from '../views/Dice4.vue'

import Dice5 from '../views/Dice5.vue'
import Dice6 from '../views/Dice6.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dice/1',
    name: 'Dice1',
    component: Dice1,
  },
  {
    path: '/dice/2',
    name: 'Dice2',
    component: Dice2,
  },
  {
    path: '/dice/3',
    name: 'Dice3',
    component: Dice3,
  },
  {
    path: '/dice/4',
    name: 'Dice4',
    component: Dice4,
  },
  {
    path: '/dice/5',
    name: 'Dice5',
    component: Dice5,
  },
  {
    path: '/dice/6',
    name: 'Dice6',
    component: Dice6,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
