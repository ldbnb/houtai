import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    meta: { auth: false },
    component: () => import('@/views/Login')
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      auth: true
    },
    component: () => import('@/views/Home'),
    children:[{
      path:'users',
      name:'users',
      component: () => import('@/views/Users'),
    }]
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('to', to)
  next()
  const flag = to.matched.some((item) => {
    return to.meta.auth
  })
  // console.log(flag)
  if (flag) {
    const token = sessionStorage.getItem('token')
    if (!token) {
      return next({
        path: '/login'
      })

    } else {
      next()
    }
  }
})

export default router
