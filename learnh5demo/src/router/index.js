import Vue from 'vue'
import Router from 'vue-router'
import TestView from '@/views/TestView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestView',
      component: TestView
    }
  ]
})
