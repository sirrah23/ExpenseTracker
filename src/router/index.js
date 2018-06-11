import Vue from 'vue'
import Router from 'vue-router'
import Monthly from '@/components/Monthly'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Monthly',
      component: Monthly
    }
  ]
})
