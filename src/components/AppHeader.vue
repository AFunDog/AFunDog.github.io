<script setup lang="ts">
import { inject, ref } from 'vue';
import LineMdSunnyOutlineToMoonTransitionIcon from '../assets/icons/LineMdSunnyOutlineToMoonTransitionIcon.vue';
import LineMdMoonToSunnyOutlineTransitionIcon from '../assets/icons/LineMdMoonToSunnyOutlineTransitionIcon.vue';
import NavBar from './NavBar.vue';
import ImageLoader from './ImageLoader.vue';
import MyIcon from '../assets/头像.png';

// import { getCurrentInstance } from 'vue';


// const props = withDefaults(defineProps<{
//   content: string,
//   icon?: DefineComponent | null
// }>(), {
//   content: ""
// })

const emits = defineEmits<{ (e: 'headerTitleClick'): void, (e: 'headerIconClick'): void }>()

const isDarkMode = inject('isDarkMode', ref(true))

// function onHeaderTitleClick() {
//   emits('headerTitleClick')
// }

function onHeaderIconClick() {
  emits('headerIconClick')
}



</script>

<template>
  <div class="header-root header-bottom-line">
    <div class="grid grid-cols-[auto_1fr_auto] place-items-center">
      <div class="header-icon-container" @click="onHeaderIconClick">
        <ImageLoader class="w-12 h-12 rounded-full header-icon" :src="MyIcon" />
        <p class="caption-name">曾昆</p>
      </div>
      <header class="header-container w-full">
        <!-- <div class="header-title-container" @click="onHeaderTitleClick">
          <component class="header-title-icon" :is="props.icon as DefineComponent"></component>
          <div class="header-title">{{ props.content }}</div>
        </div> -->

        <NavBar :index="0"/>
      </header>
      <div class="change-theme-container">
        <component @click="isDarkMode = !isDarkMode" class="change-theme-icon" :is="isDarkMode ? LineMdSunnyOutlineToMoonTransitionIcon : LineMdMoonToSunnyOutlineTransitionIcon"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-root {
  color: var(--white-color);

  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.header-container {
  display: flex;

  justify-self: flex-start;

  justify-content: center;
  align-items: center;


  text-align: center;
  font-weight: bold;
  user-select: none;

  &>div {
    cursor: pointer;
    /* width: fit-content; */
  }
}

.header-bottom-line {

  &::after {
    display: block;

    width: 96%;
    height: 0.1rem;

    margin: 0 auto;
    margin-top: 0.25rem;
    content: '';
    background-color: rgba(255, 255, 255, 0.33);
  }
}

.header-icon-container {
  display: flex;
  flex-direction: row;

  justify-self:flex-start;
  /* position: absolute; */

  /* margin-top: 0.75rem; */
  /* padding-top: 1.5rem; */
  /* left: 2%; */

  margin-left: 2em;

  justify-content: left;
  align-items: center;

  transition: all .2s;


  cursor: pointer;

  &:hover {
    scale: 1.1;
  }

}

.header-icon {
  box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.33);
}

.caption-name {

  margin-left: 1rem;

  font-size: 1.5rem;
  font-weight: bold;

  user-select: none;
  /* width: 10rem; */
  letter-spacing: 0.25rem;
}

.header-title-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  gap: 1rem;
}

/* 顶部标题图标 */
.header-title-icon {
  height: 1em;
  width: 1em;
}

.change-theme-container{
  justify-self: center;

  margin-right: 1em;
}

.change-theme-icon {
  width: 2em;
  height: 2em;

  cursor: pointer;
}
</style>