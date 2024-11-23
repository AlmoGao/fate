import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layout/Layout.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
  },
  {
    // 找不到路由时
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]



const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to) => {
  setTimeout(() => {
    const layout = document.querySelector('.page-layout')
    if (layout) {
      layout.scrollTop = 0
    }
  }, 300)
})
export default router
