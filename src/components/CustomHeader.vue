<script setup lang="ts">
import { DefineComponent, inject, ref } from 'vue';
import LineMdSunnyOutlineToMoonTransitionIcon from '../assets/icons/LineMdSunnyOutlineToMoonTransitionIcon.vue';
import LineMdMoonToSunnyOutlineTransitionIcon from '../assets/icons/LineMdMoonToSunnyOutlineTransitionIcon.vue';

// import { getCurrentInstance } from 'vue';


const props = withDefaults(defineProps<{
  content: string,
  icon?: DefineComponent | null
}>(), {
  content: ""
})

const emits = defineEmits<{ (e: 'headerTitleClick'): void, (e: 'headerIconClick'): void }>()

const isDarkMode = inject('isDarkMode', ref(true))

function onHeaderTitleClick() {
  emits('headerTitleClick')
}

function onHeaderIconClick() {
  emits('headerIconClick')
}



</script>

<template>
  <div class="header-root header-bottom-line">
    <div style="display: grid;grid-template-columns: 1fr auto 1fr;place-items: center;">
      <div class="header-icon-container" @click="onHeaderIconClick">
        <img class="header-icon" src="../assets/头像.png" />
        <p class="caption-name">曾昆</p>
      </div>
      <header class="header-container">
        <div class="header-title-container" @click="onHeaderTitleClick">
          <component class="header-title-icon" :is="props.icon as DefineComponent"></component>
          <div class="header-title">{{ props.content }}</div>
        </div>
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

  /* cursor: pointer; */

  /* width: fit-content; */

  justify-content: center;
  align-items: center;

  /* margin-top: 1rem; */
  /* padding-top: 1em; */
  text-align: center;
  font-weight: bold;
  font-size: 2em;

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

  margin-left: 3em;

  justify-content: left;
  align-items: center;

  transition: all .2s;


  cursor: pointer;

  &:hover {
    scale: 1.1;
  }

}

.header-icon {

  width: 2.5rem;
  height: 2.5rem;

  /* 让头像圆形展示 */
  border-radius: 50%;

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
  justify-self: flex-end;

  margin-right: 3em;
}

.change-theme-icon {
  width: 2em;
  height: 2em;

  cursor: pointer;
}
</style>