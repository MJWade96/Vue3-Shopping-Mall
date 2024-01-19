import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/', // http://localhost:8080/#/
  name: 'Home',
  component: () => import('../views/Home/Home')
}, {
  path: '/login', // http://localhost:8080/#/login
  name: 'Login',
  component: () => import('../views/Login/Login'),
  beforeEnter (to, from, next) {
    localStorage.isLogin ? next({ name: 'Home' }) : next()
  }
}, {
  path: '/register',
  name: 'Register',
  component: () => import('../views/Register/Register'),
  beforeEnter (to, from, next) {
    localStorage.isLogin ? next({ name: 'Home' }) : next()
  }
}, {
  path: '/shop/:id',
  name: 'Shop',
  component: () => import('../views/Shop/Shop')
}, {
  path: '/confirmOrder/:id',
  name: 'confirmOrder',
  component: () => import('../views/confirmOrder')
}, {
  path: '/OrderList',
  name: 'OrderList',
  component: () => import('../views/OrderList')
}, {
  path: '/Search',
  name: 'Search',
  component: () => import(/* webpackChunkName: "search" */ '../views/Search')
}, {
  path: '/searchList',
  name: 'SearchList',
  component: () => import(/* webpackChunkName: "SearchList" */ '../views/SearchList')
}, {
  path: '/userCart',
  name: 'UserCart',
  component: () => import(/* webpackChunkName: "UserCart" */ '../views/UserCart')
}, {
  path: '/newAddress',
  name: 'newAddress',
  component: () => import(/* webpackChunkName: "newAddress" */ '../views/Address/NewAddress')
}, {
  path: '/editAddress',
  name: 'EditAddress',
  component: () => import(/* webpackChunkName: "EditAddress" */ '../views/Address/EditAddress')
}, {
  path: '/selectAddress',
  name: 'SelectAddress',
  component: () => import(/* webpackChunkName: "SeletAddress" */ '../views/Address/SelectAddress')
}
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  (localStorage.isLogin || to.name === 'Login' || to.name === 'Register') ? next() : next({ name: 'Login' })
})

export default router
