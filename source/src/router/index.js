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
      component: () => import('@/views/Documentation')
    },
    {
      path: '/examples',
      name: 'examples',
      component: () => import('@/views/Examples')
    }
  ]
})
