import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/views/Home')
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: () => import('@/components/views/Documentation'),
      redirect: 'documentation/start',
      children: [
        {
          path: 'start',
          name: 'documentation/start',
          component: () => import('@/components/partials/documentation/Start')
        },
        {
          path: 'usage',
          name: 'documentation/usage',
          component: () => import('@/components/partials/documentation/Usage')
        },
        {
          path: 'parameters',
          name: 'documentation/parameters',
          component: () => import('@/components/partials/documentation/Parameters')
        }
      ]
    },
    {
      path: '/examples',
      name: 'examples',
      component: () => import('@/components/views/Examples')
    }
  ]
})
