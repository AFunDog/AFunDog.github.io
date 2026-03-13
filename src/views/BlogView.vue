<script setup lang="ts">
import { ref } from 'vue';
import ImageLoader from '../components/ImageLoader.vue';

// 模拟博客数据
const blogPosts = ref([
  {
    id: 1,
    title: 'Vue 3 组合式 API 最佳实践',
    content: 'Vue 3 的组合式 API 为我们提供了更灵活的代码组织方式，本文将分享一些使用组合式 API 的最佳实践...',
    date: '2026-03-10',
    category: '前端',
    image: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: 2,
    title: 'TypeScript 高级类型技巧',
    content: 'TypeScript 的类型系统非常强大，掌握一些高级类型技巧可以让你的代码更加健壮和可维护...',
    date: '2026-03-05',
    category: '前端',
    image: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: 3,
    title: 'Tailwind CSS 自定义配置',
    content: 'Tailwind CSS 提供了丰富的工具类，但有时我们需要根据项目需求进行自定义配置...',
    date: '2026-02-28',
    category: '前端',
    image: 'https://picsum.photos/800/400?random=3'
  },
  {
    id: 4,
    title: 'Git 分支管理策略',
    content: '良好的 Git 分支管理策略可以提高团队协作效率，本文将介绍几种常见的分支管理模式...',
    date: '2026-02-20',
    category: '工具',
    image: 'https://picsum.photos/800/400?random=4'
  }
]);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8 text-center" :style="{ color: 'var(--foreground-color)' }">我的博客</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="post in blogPosts" 
        :key="post.id"
        class="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
        :style="{ backgroundColor: 'var(--background-color-10)' }"
      >
        <div class="h-48 overflow-hidden">
          <ImageLoader 
            :src="post.image" 
            :alt="post.title"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-6">
          <div class="flex justify-between items-center mb-2">
            <span 
              class="text-sm px-3 py-1 rounded-full"
              :style="{ 
                backgroundColor: 'var(--theme-color)',
                color: 'white'
              }"
            >
              {{ post.category }}
            </span>
            <span 
              class="text-sm"
              :style="{ color: 'var(--foreground-color-10)' }"
            >
              {{ post.date }}
            </span>
          </div>
          <h2 
            class="text-xl font-bold mb-3"
            :style="{ color: 'var(--foreground-color)' }"
          >
            {{ post.title }}
          </h2>
          <p 
            class="text-sm mb-4"
            :style="{ color: 'var(--foreground-color-10)' }"
          >
            {{ post.content }}
          </p>
          <button 
            class="px-4 py-2 rounded-md transition-colors duration-300"

          >
            阅读更多
          </button>
        </div>
      </div>
    </div>
  </div>
</template>