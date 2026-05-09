<script setup lang="ts">
import PCStateCard from '../components/PCStateCard.vue';
import SlideShowCard from '../components/SlideShowCard.vue';
import HorizontalImageScroller from '../components/HorizontalImageScroller.vue';
import card1 from '../assets/showcards/card1.png';
import card2 from '../assets/showcards/card2.png';
import card4 from '../assets/showcards/card4.png';

// 准备横向滚动的图片数据
const scrollerImages = [
  { url: card1, alt: '革命图片1' },
  { url: card2, alt: '革命图片2' },
  { url: card4, alt: '革命图片3' },
  { url: 'https://picsum.photos/800/600?random=1', alt: '随机图片1' },
  { url: 'https://picsum.photos/800/600?random=2', alt: '随机图片2' },
  { url: 'https://picsum.photos/800/600?random=3', alt: '随机图片3' },
];

// 准备幻灯片数据
const slideShowItems = [
  {
    url: card1, saying: '死亡不属于工人阶级', author: '列宁'
  },
  {
    url: card2, saying: '世界是属于你们的', author: '毛泽东'
  },
  {
    url: card4, saying: '全世界无产者，联合起来!', author: '马克思'
  },
];



</script>
<template>
  <div class="show-item-container">
    <div class="vspace"></div>
    <div class="horizontal-scroller-section">
      <HorizontalImageScroller  :images="scrollerImages"  :auto-play="true" :interval="5000"
        :show-indicators="true" :show-arrows="true" />
    </div>

    <div class="vspace"></div>
    <!-- <PCStateCard /> -->
    <SlideShowCard title="革命" :items="slideShowItems" />

    <div class="vspace"></div>

  </div>
</template>
<style scoped>
.show-item-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.vspace {
  height: 5rem;
}

.horizontal-scroller-section {
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--foreground-color);
}
</style>