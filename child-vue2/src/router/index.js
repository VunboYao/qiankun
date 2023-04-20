import HomeView from '../views/HomeView.vue'

export default [
  {
    path: '/vue2',
    redirect: '/vue2/home'
  },
  {
    path: '/vue2/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vue2/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
