import helloWorld from '@/components/common/helloWorld'

export default [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'helloWorld',
    component: helloWorld
  }
]
