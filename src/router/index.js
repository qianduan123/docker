import Vue from 'vue'
import Router from 'vue-router'
import Docker from '@/components/docker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Docker',
      component: Docker
    }
  ]
})
