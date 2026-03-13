import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainView from './views/MainView.vue'
import ShowView from './views/ShowView.vue'
import LibraryView from './views/LibraryView.vue'
import BlogView from './views/BlogView.vue'
import FluentPeopleHomeIcon from './assets/icons/FluentColorPeopleHomeIcon.vue'
import FluentColorLightBulbIcon from './assets/icons/FluentColorLightBulbIcon.vue'
import FluentColorBookDatabaseIcon from './assets/icons/FluentColorBookDatabaseIcon.vue'
import FluentColorLaptopIcon from './assets/icons/FluentColorLaptopIcon.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: MainView, meta: { icon: FluentPeopleHomeIcon, title: '我的主页' } },
  { path: '/Show', component: ShowView, meta: { icon: FluentColorLightBulbIcon, title: '展示' } },
  { path: '/Blog', component: BlogView, meta: { icon: FluentColorLaptopIcon, title: '博客' } },
  { path: '/Library', component: LibraryView, meta: { icon: FluentColorBookDatabaseIcon, title: '资料' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 重新设置路由的索引
router.getRoutes().forEach((route, index) => route.meta.index = index)

export default router