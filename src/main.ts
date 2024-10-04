import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import hljs from 'highlight.js'


import './css/def.css'
// github markdown 格式
import 'github-markdown-css'
// 代码高亮
import 'highlight.js/styles/github-dark.css'

import App from './App.vue'
import MainView from './views/MainView.vue'
import WebFrontEndView from './views/WebFrontEndView.vue'
import DOTNETView from './views/DOTNETView.vue'
import SQLView from './views/SQLView.vue'
import CppAlgorithmView from './views/CppAlgorithmView.vue'
import OtherView from './views/OtherView.vue'

const routes = [
    { path: '/', component: MainView, meta: { index: 0, label: '主页', title: '我的主页' } },
    { path: '/WebFrontEnd', component: WebFrontEndView, meta: { index: 1, label: '前端', title: '前端' } },
    { path: '/DOTNET', component: DOTNETView, meta: { index: 2, label: '.NET', title: '.NET' } },
    { path: '/SQL', component: SQLView, meta: { index: 3, label: 'SQL', title: 'SQL' } },
    { path: '/CppAlgorithm', component: CppAlgorithmView, meta: { index: 4, label: 'C++与算法', title: 'C++与算法' } },
    { path: '/Other', component: OtherView, meta: { index: 5, label: '其他分享', title: '其他分享' } },
]

const router = createRouter({ history: createMemoryHistory(), routes })

createApp(App)
    .use(router)
    // 定义全局 v-highlight 命令 用于对 markdown 文档内部代码块进行高亮显示
    .directive('highlight',el =>{
        const blocks = el.querySelectorAll('pre code');
        blocks.forEach((block : HTMLElement)=>{
          hljs.highlightElement(block)
        })
    })
    .mount('#app')

// 创建 v-highlight 全局指令

