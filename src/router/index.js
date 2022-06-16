import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TagBadge from "@/views/TagBadge";

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
    path: '/cascade',
    name: 'Cascade',


    component: () => import( '@/views/Cascade.vue')
  },
  {
    path: '/switch',
    name: 'Switch',


    component: () => import( '@/views/Switch.vue')
  },{
    path: '/slider',
    name: 'Slider',


    component: () => import( '@/views/Slider.vue')
  },
  {
    path: '/timepicker',
    name: 'TimePicker',


    component: () => import( '@/views/TimePicker.vue')
  },
  {
    path: '/datepicker',
    name: 'DatePicker',


    component: () => import( '@/views/DatePicker.vue')
  },


  {
    path: '/about',
    name: 'about',

    component: () => import( '@/views/AboutView.vue')
  },


  {
    path: '/rate',
    name: 'Rate',

    component: () => import( '@/views/Rate.vue')
  },


  {
    path: '/colorpicker',
    name: 'ColorPicker',

    component: () => import( '@/views/ColorPicker.vue')
  },

  {
    path: '/transfer',
    name: 'Transfer',

    component: () => import( '@/views/Transfer.vue')
  },
  {
    path: '/form',
    name: 'Form',

    component: () => import( '@/views/Form.vue')
  },

  {
    path: '/avatar',
    name: 'Avatar',

    component: () => import( '@/views/Avatar.vue')
  },



  {
    path: '/tag-badge',
    name: TagBadge,

    component: () => import( '@/views/TagBadge.vue')
  },

  {
    path: '/upload',
    name: 'Upload',


    component: () => import( '@/views/Upload.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
