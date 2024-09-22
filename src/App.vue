<script setup lang="ts">

import NavBar from './components/NavBar.vue'
import CaptionBar from './components/CaptionBar.vue';
import SlideShowCard from './components/SlideShowCard.vue';

</script>

<template>
  <header>
    我的主页
  </header>
  <NavBar />
  <CaptionBar />
  <SlideShowCard />
</template>

<style scoped>
header {
  margin-top: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;

  user-select: none;
}

header::after {
  display: block;

  width: 96%;
  height: 0.1rem;

  margin: 0 auto;
  margin-top: 0.25rem;
  content: '';
  background-color: rgba(255, 255, 255, 0.33);
}
</style>
