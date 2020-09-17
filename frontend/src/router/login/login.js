import loginView from '@/components/login/loginView'

export default [{
  path: '/login/loginView',
  name: 'loginView',
  component: loginView,
  beforeEnter: function (to, from, next) {
    next()
  }
}]
