import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Documentation from '@/components/Documentation'
import Examples from '@/components/Examples'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/documentation',
      name: 'Documentation',
      component: Documentation
    },
    {
      path: '/examples',
      name: 'Examples',
      component: Examples
    }
  ]
})
