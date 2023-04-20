import { createRouter, createWebHashHistory } from 'vue-router'
const div = {
  template: '<div></div>'
}
const routes = [
  {
    path: '/',
    redirect: '/vue2',
    component: div
  },
  {
    path: '/vue2/:chap*',
    component: div
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
