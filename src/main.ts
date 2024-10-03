import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import './css/def.css'
import App from './App.vue'
import MainView from './views/MainView.vue'
import WebFrontEndView from './views/WebFrontEndView.vue'
import DoNetView from './views/DoNetView.vue'
import SQLView from './views/SQLView.vue'
import CppAlgorithmView from './views/CppAlgorithmView.vue'
import OtherView from './views/OtherView.vue'

const routes = [
    { path: '/', component: MainView, meta: { index: 0, label: '主页', title: '我的主页' } },
    { path: '/WebFrontEnd', component: WebFrontEndView, meta: { index: 1, label: '前端', title: '前端' } },
    { path: '/DoNet', component: DoNetView, meta: { index: 2, label: 'C#', title: 'C#' } },
    { path: '/SQL', component: SQLView, meta: { index: 3, label: 'SQL', title: 'SQL' } },
    { path: '/CppAlgorithm', component: CppAlgorithmView, meta: { index: 4, label: 'C++与算法', title: 'C++与算法' } },
    { path: '/Other', component: OtherView, meta: { index: 5, label: '其他分享', title: '其他分享' } },

]

const router = createRouter({ history: createMemoryHistory(), routes })

createApp(App).use(router).mount('#app')
