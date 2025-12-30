<script setup lang="ts">

import { DefineComponent } from 'vue';
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
    <RouterLink v-for="(item, index) in navTopList" :class="['nav-item', { 'selected': router.currentRoute.value.path === item.path }]"
      :to="(item.path)">
      <div class="nav-item-content">
        <component class="nav-item-icon" :is="item.meta.icon as DefineComponent"/>
        <div>
          {{ item.meta.title as string }}
        </div>
      </div>
    </RouterLink>
  </nav>
</template>

<style scoped>
.nav-bar {
  display: flex;

  height: v-bind('itemSize.height * 1.1 + "rem"');

  list-style: none;
  justify-content: center;
  align-items: center;

  color: var(--white-color);
  

  /* background-color: aliceblue; */
}

.nav-item {
  cursor: pointer;

  margin: 0 0.5em;

  text-align: center;
  line-height: v-bind('itemSize.height + "rem"');
  width: v-bind('itemSize.width + "rem"');
  height: v-bind('itemSize.height + "rem"');


  user-select: none;
  transition: all .2s;

  &:hover,
  &.selected {
    font-size: 1.2em;
    color: var(--theme-color);

    &::after {
      margin-left: 0%;
      width: 100%;
      background-color: var(--theme-color);

    }

  }

  /* 底部线 */
  &::after {
    display: block;
    content: '';

    margin-left: 30%;
    width: 40%;
    height: 0.1rem;
   
    background-color: var(--white-color);
    transition: all .2s;
  }
}

.nav-item-content{
  display: flex;

  flex-direction: row;

  justify-content: center;
  align-items: center;

  gap: 0.5em;
}

.nav-item-icon {
  width: 1.5em;
  height: 1.5em;
}
</style>