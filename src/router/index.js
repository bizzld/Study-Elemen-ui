import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/container',
    name: 'Container',


    component: () => import( '@/views/Container.vue')
  },
  {
    path: '/icon',
    name: 'Icon',


    component: () => import( '@/views/Icon.vue')
  },

  {
    path: '/button',
    name: 'Button',


    component: () => import( '@/views/Button.vue')
  },



  {
    path: '/layout',
    name: 'Layout',


    component: () => import( '@/views/Layout.vue')
  },
  {
    path: '/radio',
    name: 'Radio',


    component: () => import( '@/views/Radio.vue')
  },
  {
    path: '/input',
    name: 'Input',


    component: () => import( '@/views/Input.vue')
  },
  {
    path: '/about',
    name: 'about',

    component: () => import( '@/views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
