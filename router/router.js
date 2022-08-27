import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
        {
            name: 'index',
            path: '/',
            component: Index
          },
    ],
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    }
  })
}
