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
      component: () => import('@/views/Home')
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: () => import('@/views/Documentation'),
      redirect: 'documentation/start',
      children: [
        {
          path: 'start',
          name: 'documentation/start',
          component: () => import('@/components/Documentation/Start')
        },
        {
          path: 'usage',
          name: 'documentation/usage',
          component: () => import('@/components/Documentation/Usage')
        },
        {
          path: 'parameters',
          name: 'documentation/parameters',
          component: () => import('@/components/Documentation/Parameters')
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
