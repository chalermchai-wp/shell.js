import Vue from 'vue'
import Router from 'vue-router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home')
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: () => import('@/views/Documentation')
    },
    {
      path: '/examples',
      name: 'examples',
      component: () => import('@/views/Examples')
    }
  ]
})
