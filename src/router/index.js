import Vue from 'vue'
import Router from 'vue-router'
import Monthly from '@/components/Monthly'
import Daily from '@/components/Daily'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Monthly',
      component: Monthly
    },
    {
      path: '/daily',
      name: 'Daily',
      component: Daily
    },
  ]
})
