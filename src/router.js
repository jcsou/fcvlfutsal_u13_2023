import Vue from 'vue'
import Router from 'vue-router'
import AccueilView from './views/AccueilView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
    {
        path: '/U13Poules',
        name: 'U13Poules',
        component: () => import('./views/U13PoulesView.vue')
    },
    {
        path: '/U13Finales',
        name: 'U13Finales',
        component: () => import('./views/U13FinalesView.vue')
    },
    {
        path: '/U13FPoules',
        name: 'U13FPoules',
        component: () => import('./views/U13FPoulesView.vue')
    },
    {
        path: '/U13FFinales',
        name: 'U13FFinales',
        component: () => import('./views/U13FFinalesView.vue')
    },
    {
         path: '/U13Timeline',
         name: 'U13Timeline',
         component: () => import('./views/U13TimelineView.vue')
    }
  ]
})