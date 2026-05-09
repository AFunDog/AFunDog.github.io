<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import ImageLoader from './ImageLoader.vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

/**
 * 图片项接口，定义轮播图中每张图片的结构
 */
interface ImageItem {
  url: string;      // 图片地址
  alt?: string;     // 图片描述
}

/**
 * 组件属性接口，定义轮播图组件的配置选项
 */
interface Props {
  images: ImageItem[];        // 图片数组
  height?: string | number;   // 轮播图高度
  aspectRatio?: number;       // 宽高比（宽度/高度），例如 16/9
  autoPlay?: boolean;         // 是否自动播放
  interval?: number;          // 自动播放间隔（毫秒）
  showIndicators?: boolean;   // 是否显示指示器
  showArrows?: boolean;       // 是否显示左右箭头
}

// 定义组件属性并设置默认值
const props = withDefaults(defineProps<Props>(), {
  height: '400px',      // 默认高度为 400px
  aspectRatio: 16/9,    // 默认宽高比为 16:9
  autoPlay: true,       // 默认开启自动播放
  interval: 3000,       // 默认间隔为 3000 毫秒
  showIndicators: true, // 默认显示指示器
  showArrows: true      // 默认显示左右箭头
});

// 响应式状态
const currentIndex = ref(0);           // 当前显示的幻灯片索引
const carouselRef = ref<HTMLElement | null>(null); // 轮播图容器引用
let autoPlayTimer: number | null = null; // 自动播放定时器

/**
 * 切换到下一张幻灯片
 */
const nextSlide = () => {
  // 使用取模运算实现循环切换
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
  // 更新幻灯片位置
  updateSlidePosition();
};

/**
 * 切换到上一张幻灯片
 */
const prevSlide = () => {
  // 使用取模运算实现循环切换
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
  // 更新幻灯片位置
  updateSlidePosition();
};

/**
 * 跳转到指定索引的幻灯片
 * @param index 目标幻灯片索引
 */
const goToSlide = (index: number) => {
  currentIndex.value = index;
  updateSlidePosition();
};

/**
 * 更新幻灯片位置，通过修改 transform 实现滑动效果
 */
const updateSlidePosition = () => {
  if (carouselRef.value) {
    // 获取每张幻灯片的宽度
    const slideWidth = carouselRef.value.clientWidth;
    // 计算并设置 transform 值
    carouselRef.value.style.transform = `translateX(-${currentIndex.value * slideWidth}px)`;
  }
};

/**
 * 开始自动播放
 */
const startAutoPlay = () => {
  if (props.autoPlay) {
    // 设置定时器，每隔指定间隔切换到下一张幻灯片
    autoPlayTimer = window.setInterval(nextSlide, props.interval);
  }
};

/**
 * 停止自动播放
 */
const stopAutoPlay = () => {
  if (autoPlayTimer) {
    // 清除定时器
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

// 组件挂载时执行
onMounted(() => {
  // 初始化幻灯片位置
  updateSlidePosition();
  // 开始自动播放
  startAutoPlay();
  
  // 监听窗口大小变化，确保幻灯片位置正确
  window.addEventListener('resize', updateSlidePosition);
});

// 组件卸载时执行
onUnmounted(() => {
  // 停止自动播放
  stopAutoPlay();
  // 移除窗口大小变化监听
  window.removeEventListener('resize', updateSlidePosition);
});

// 监听自动播放属性变化
watch(() => props.autoPlay, (newValue) => {
  if (newValue) {
    // 开启自动播放
    startAutoPlay();
  } else {
    // 停止自动播放
    stopAutoPlay();
  }
});

// 监听图片数组变化
watch(() => props.images, () => {
  // 重置到第一张幻灯片
  currentIndex.value = 0;
  // 更新幻灯片位置
  updateSlidePosition();
}, { deep: true });
</script>

<template>
  <div class="sc-container w-full relative overflow-hidden rounded-lg bg-(--background-color-10)">
    <div class="relative w-full h-full">
      <div 
        ref="carouselRef" 
        class="flex h-full transition-transform duration-500 ease"
      >
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="shrink-0 w-full h-full"
        >
          <ImageLoader 
            :src="image.url" 
            :alt="image.alt || `Image ${index + 1}`"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <!-- 左右箭头 -->
      <button 
        v-if="showArrows" 
        class="absolute top-1/2 -translate-y-1/2 left-2.5 w-10 h-10 rounded-full bg-black/50 text-white border-none flex items-center justify-center cursor-pointer z-10 transition-all duration-300 
        opacity-0
        hover:opacity-100 hover:scale-110"
        @click="prevSlide"
        @mouseenter="stopAutoPlay"
        @mouseleave="startAutoPlay"
        aria-label="Previous slide"
      >
        <ChevronLeft :size="24" />
      </button>
      
      <button 
        v-if="showArrows" 
        class="absolute top-1/2 -translate-y-1/2 right-2.5 w-10 h-10 rounded-full bg-black/50 text-white border-none flex items-center justify-center cursor-pointer z-10 transition-all duration-300 opacity-0
        hover:opacity-100 hover:scale-110"
        @click="nextSlide"
        @mouseenter="stopAutoPlay"
        @mouseleave="startAutoPlay"
        aria-label="Next slide"
      >
        <ChevronRight :size="24" />
      </button>
    </div>
    
    <!-- 指示器 -->
    <div v-if="showIndicators" class="absolute  bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-10 opacity-0 hover:opacity-100 transition-opacity duration-300 px-12 py-4">
      <button 
        v-for="(image, index) in images" 
        :key="index"
        class="w-2.5 h-2.5 rounded-full bg-white/70 border-none cursor-pointer transition-all duration-300 
        hover:bg-white/90"
        :class="{ 'bg-theme-color scale-125': index === currentIndex }"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>
<style scoped>
.sc-container{
  aspect-ratio: v-bind('props.aspectRatio');
}
</style>