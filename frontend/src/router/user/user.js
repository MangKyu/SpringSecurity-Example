import signUpView from '@/components/user/signUpView'

export default [{
  path: '/user/signUpView',
  name: 'signUpView',
  component: signUpView,
  beforeEnter: function (to, from, next) {
    next()
  }
}]
