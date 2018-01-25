import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import Home from '@/components/Home'

Vue.use(Router)

Vue.prototype.$http = Axios

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
