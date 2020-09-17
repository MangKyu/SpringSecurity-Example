import Vue from 'vue'
import Router from 'vue-router'
import common from './common/common'
import login from './login/login'
import user from './user/user'

Vue.use(Router)

export default new Router({
  routes: [
    ...common,
    ...login,
    ...user
  ],
  mode: 'history'
})
