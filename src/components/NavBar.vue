<script setup lang="ts">

import { ref } from 'vue'

const navTopList = ref([
  { title: '主页', url: '#' },
  { title: '前端', url: '#' },
  { title: 'C#', url: '#' },
  { title: 'Java', url: '#' },
  { title: 'C++与算法', url: '#' },
  { title: '其他分享', url: '#' }
])

</script>

<template>
  <nav class="nav-bar">
    <a v-for="item in navTopList" class="nav-item" :href="item.url">
      {{ item.title }}
    </a>
  </nav>
</template>

<style scoped>
.nav-bar {
  position: relative;
  display: flex;

  left: 5%;
  width: 90%;
  height: 5rem;
  margin-top: 1rem;

  list-style: none;
  justify-content: center;
  align-items: center;

  /* background-color: aliceblue; */
}

.nav-item{
  
  text-decoration: none;
  cursor: pointer;

  margin: 0 0.5rem;

  text-align: center;
  line-height: 5rem;
  height: 100%;
  width: 100%;

  border-radius: 0.5rem;
  
  background-color: var(--dark-control-color);

  user-select: none;
  transition: all .2s;

  &:hover{
    width: 108%;
    height: 104%;
    line-height: calc(5rem * 1.04);
    background-color: #d35400;
  }
}
</style>