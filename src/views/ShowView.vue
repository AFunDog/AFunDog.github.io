<script setup lang="ts">
import PCStateCard from '../components/PCStateCard.vue';
import SlideShowCard from '../components/SlideShowCard.vue';
import card1 from '../assets/showcards/card1.png';
import card2 from '../assets/showcards/card2.png';
import card4 from '../assets/showcards/card4.png';

</script>
<template>
  <div class="show-item-container">
    <div class="vspace"></div>
    <!-- <PCStateCard /> -->
    <SlideShowCard title="革命" :items="[
      {
        url: card1, saying: '死亡不属于工人阶级', author: '列宁'
      },
      {
        url: card2, saying: '世界是属于你们的', author: '毛泽东'
      },
      {
        url: card4, saying: '全世界无产者，联合起来!', author: '马克思'
      },
    ]" />
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
</style>