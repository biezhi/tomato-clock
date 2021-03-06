import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'tomato',
    component: require('@/components/Tomato').default
  },
  {
    path: '/chart',
    name: 'chart',
    component: require('@/components/Chart').default
  },
  {
    path: '/settings',
    name: 'settings',
    component: require('@/components/Settings').default
  },
  {
    path: '/sleeptime',
    name: 'sleeptime',
    component: require('@/components/SleepTime').default
  },
  {
    path: '*',
    redirect: '/'
  }
  ]
})
