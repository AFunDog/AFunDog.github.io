import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'


import './css/defStyle.css'
// github markdown 格式
import 'github-markdown-css'
// 从定义 markdown 格式
import './css/markdownStyle.css'
// 代码高亮
import 'highlight.js/styles/github-dark.css'

import App from './App.vue'
import MainView from './views/MainView.vue'
import ShowView from './views/ShowView.vue'
// import WebFrontEndView from './views/WebFrontEndView.vue'
// import DOTNETView from './views/DOTNETView.vue'
// import SQLView from './views/SQLView.vue'
// import CppAlgorithmView from './views/CppAlgorithmView.vue'
// import OtherView from './views/OtherView.vue'
import LibraryView from './views/LibraryView.vue'
import FluentPeopleHomeIcon from './assets/icons/FluentPeopleHomeIcon.vue'

// const routes: Readonly<RouteRecordRaw[]> = [
//     { path: '/', component: MainView, meta: { index: 0, label: '主页', title: '我的主页' } },
//     { path: '/Show', component: ShowView, meta: { index: 1, label: '展示', title: '展示' } },
//     { path: '/Library', component: LibraryView, meta: { index: 2, label: '资料', title: '资料' } },
//     // { path: '/WebFrontEnd', component: WebFrontEndView, meta: { index: 2, label: '前端', title: '前端' } },
//     // { path: '/DOTNET', component: DOTNETView, meta: { index: 3, label: '.NET', title: '.NET' } },
//     // { path: '/SQL', component: SQLView, meta: { index: 4, label: 'SQL', title: 'SQL' } },
//     // { path: '/CppAlgorithm', component: CppAlgorithmView, meta: { index: 5, label: 'C++与算法', title: 'C++与算法' } },
//     // { path: '/Other', component: OtherView, meta: { index: 6, label: '其他分享', title: '其他分享' } },
// ]

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/', component: MainView, meta: { icon: FluentPeopleHomeIcon, title: '我的主页' } },
        { path: '/Show', component: ShowView, meta: { title: '展示' } },
        { path: '/Library', component: LibraryView, meta: { title: '资料' } },
    ]
})
// 重新设置路由的索引
router.getRoutes().forEach((route, index) => route.meta.index = index)

createApp(App)
    .use(router)
    .mount('#app')

