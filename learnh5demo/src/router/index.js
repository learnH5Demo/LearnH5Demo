import Vue from 'vue'
import Router from 'vue-router'
import HeaderNav from '@/views/HeaderNav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: HeaderNav
    },
    {
      path: '/HeaderNav',
      name: 'HeaderNav',
      component: HeaderNav
    }
  ]
})
