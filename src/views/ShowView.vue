<script setup lang="ts">
import PCStateCard from '../components/PCStateCard.vue';
import SlideShowCard from '../components/SlideShowCard.vue';
</script>
<template>
  <div class="show-item-container">
    <div class="vspace"></div>
    <PCStateCard />
    <SlideShowCard />
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