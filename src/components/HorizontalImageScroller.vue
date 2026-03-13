<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import ImageLoader from './ImageLoader.vue';

interface ImageItem {
  url: string;
  alt?: string;
}

interface Props {
  images: ImageItem[];
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  height: '400px',
  autoPlay: true,
  interval: 3000,
  showIndicators: true,
  showArrows: true
});

const currentIndex = ref(0);
const carouselRef = ref<HTMLElement | null>(null);
let autoPlayTimer: number | null = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
  updateSlidePosition();
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
  updateSlidePosition();
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
  updateSlidePosition();
};

const updateSlidePosition = () => {
  if (carouselRef.value) {
    const slideWidth = carouselRef.value.clientWidth;
    carouselRef.value.style.transform = `translateX(-${currentIndex.value * slideWidth}px)`;
  }
};

const startAutoPlay = () => {
  if (props.autoPlay) {
    autoPlayTimer = window.setInterval(nextSlide, props.interval);
  }
};

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

onMounted(() => {
  updateSlidePosition();
  startAutoPlay();
  
  // 监听窗口大小变化
  window.addEventListener('resize', updateSlidePosition);
});

onUnmounted(() => {
  stopAutoPlay();
  window.removeEventListener('resize', updateSlidePosition);
});

// 监听自动播放属性变化
watch(() => props.autoPlay, (newValue) => {
  if (newValue) {
    startAutoPlay();
  } else {
    stopAutoPlay();
  }
});

// 监听图片数组变化
watch(() => props.images, () => {
  currentIndex.value = 0;
  updateSlidePosition();
}, { deep: true });
</script>

<template>
  <div class="carousel-container">
    <div class="carousel-wrapper">
      <div 
        ref="carouselRef" 
        class="carousel"
      >
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="carousel-slide"
        >
          <ImageLoader 
            :src="image.url" 
            :alt="image.alt || `Image ${index + 1}`"
            class="carousel-image"
          />
        </div>
      </div>
      
      <!-- 左右箭头 -->
      <button 
        v-if="showArrows" 
        class="carousel-arrow left" 
        @click="prevSlide"
        @mouseenter="stopAutoPlay"
        @mouseleave="startAutoPlay"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <button 
        v-if="showArrows" 
        class="carousel-arrow right" 
        @click="nextSlide"
        @mouseenter="stopAutoPlay"
        @mouseleave="startAutoPlay"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
    
    <!-- 指示器 -->
    <div v-if="showIndicators" class="carousel-indicators">
      <button 
        v-for="(image, index) in images" 
        :key="index"
        class="indicator"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: var(--background-color-10);
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
}

.carousel-slide {
  flex: 0 0 100%;
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
}

.carousel-arrow:hover {
  background-color: var(--theme-color);
  transform: translateY(-50%) scale(1.1);
}

.carousel-arrow.left {
  left: 10px;
}

.carousel-arrow.right {
  right: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background-color: var(--theme-color);
  transform: scale(1.2);
}

.indicator:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .carousel-arrow {
    width: 32px;
    height: 32px;
  }
  
  .carousel-arrow svg {
    width: 16px;
    height: 16px;
  }
  
  .indicator {
    width: 8px;
    height: 8px;
  }
}
</style>