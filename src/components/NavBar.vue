<script setup lang="ts">

import { RouterLink, useRouter } from 'vue-router';


const props = defineProps<{
  index: number
}>()


const itemSize = { width: 8, height: 3 }

const router = useRouter()


const navTopList = router.getRoutes()

</script>

<template>
  <nav class="nav-bar">
    <RouterLink v-for="(item, index) in navTopList" :class="[props.index == index ? 'nav-item selected' : 'nav-item']"
      :to="(item.path)">
      {{ item.meta.title as string }}
    </RouterLink>
    <RouterLink v-for="(item, index) in navTopList" :class="[props.index == index ? 'nav-item selected' : 'nav-item']"
      :to="(item.path)">
      {{ item.meta.title as string }}
    </RouterLink>
  </nav>
  <!-- <div class="nav-bottom-line"></div> -->
  <!-- <div class="nav-bottom-line"></div> -->
</template>

<style scoped>
.nav-bar {
  position: relative;
  display: flex;

  left: 5%;
  width: 90%;
  height: v-bind('itemSize.height * 1.1 + "rem"');
  height: v-bind('itemSize.height * 1.1 + "rem"');
  margin-top: 1rem;

  list-style: none;
  justify-content: center;
  align-items: center;

  /* background-color: aliceblue; */
}

.nav-item {
  text-decoration: none;
  cursor: pointer;

  margin: 0 0.5rem;





  text-align: center;
  line-height: v-bind('itemSize.height + "rem"');
  width: v-bind('itemSize.width + "rem"');
  height: v-bind('itemSize.height + "rem"');

  /* border-style: solid;
  border-width: 0 0 0.1rem 0; */
  line-height: v-bind('itemSize.height + "rem"');
  width: v-bind('itemSize.width + "rem"');
  height: v-bind('itemSize.height + "rem"');

  /* border-style: solid;
  border-width: 0 0 0.1rem 0; */

  /* border-radius: 0.5rem; */

  /* background-color: var(--dark-control-color); */
  /* border-radius: 0.5rem; */

  /* background-color: var(--dark-control-color); */

  user-select: none;
  transition: all .2s;

  &:hover,
  &.selected {
    /* line-height: v-bind('itemSize.height * 1.04 + "rem"'); */
    /* width: v-bind('itemSize.width * 1.04 + "rem"'); */
    /* height: v-bind('itemSize.height * 1.04 + "rem"'); */
    /* background-color: #d35400; */
    font-size: 1.2rem;
    color: var(--theme-color);
    &::after {
      margin-left: 0%;
      width: 100%;
      background-color: var(--theme-color);

    }

  }

  &::after {
    display: block;
    content: '';

    margin-left: 30%;
    width: 40%;
    height: 0.1rem;
    background-color: var(--foreground-color);

    transition: all .2s;
  }
}
</style>