<script setup lang="ts">


import CaptionBar from '../components/CaptionBar.vue';
import InfoBar from '../components/InfoBar.vue';
import ImageLoader from '../components/ImageLoader.vue';






</script>

<template>
  <div>
    <div class="vspace"></div>
    <InfoBar/>
    
    <div class="vspace"></div>
    
    <CaptionBar />

    <div class="vspace"></div>

    <!-- <div class="image-container">
      <h2>图片加载示例</h2>
      <ImageLoader 
        src="https://picsum.photos/800/600?random=1" 
        alt="示例图片1" 
      />
      <div class="vspace"></div>
      <ImageLoader 
        src="https://picsum.photos/800/600?random=2" 
        alt="示例图片2" 
      />
    </div> -->

  </div>
</template>

<style scoped>
.vspace {
  height: 5rem;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
}

.image-container h2 {
  margin-bottom: 2rem;
  color: #333;
}

</style>