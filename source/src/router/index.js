import Vue from 'vue'
import Router from 'vue-router'

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
      component: () => import('@/views/Documentation'),
      children: [
        {
          path: 'start',
          name: 'documentation/start'
        },
        {
          path: 'customization',
          name: 'documentation/customization'
        },
        {
          path: 'constructor-options',
          name: 'documentation/constructor-options'
        },
        {
          path: 'layout',
          name: 'documentation/layout'
        }
      ]
    },
    {
      path: '/examples',
      name: 'examples',
      component: () => import('@/views/Examples')
    }
  ]
})
