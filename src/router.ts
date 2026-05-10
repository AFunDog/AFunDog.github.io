import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FluentPeopleHomeIcon from './assets/icons/FluentColorPeopleHomeIcon.vue'
import FluentColorLightBulbIcon from './assets/icons/FluentColorLightBulbIcon.vue'
import FluentColorBookDatabaseIcon from './assets/icons/FluentColorBookDatabaseIcon.vue'
import FluentColorLaptopIcon from './assets/icons/FluentColorLaptopIcon.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('./views/MainView.vue'), meta: { icon: FluentPeopleHomeIcon, title: '我的主页' } },
  { path: '/Show', component: () => import('./views/ShowView.vue'), meta: { icon: FluentColorLightBulbIcon, title: '展示' } },
  { path: '/Blog', component: () => import('./views/BlogView.vue'), meta: { icon: FluentColorLaptopIcon, title: '博客' } },
  { path: '/Library', component: () => import('./views/LibraryView.vue'), meta: { icon: FluentColorBookDatabaseIcon, title: '资料' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 重新设置路由的索引
router.getRoutes().forEach((route, index) => route.meta.index = index)

export default router