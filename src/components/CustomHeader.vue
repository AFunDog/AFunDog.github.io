<script setup lang="ts">
import { DefineComponent } from 'vue';

// import { getCurrentInstance } from 'vue';


const props = withDefaults(defineProps<{
  content: string,
  icon?: DefineComponent | null
}>(), {
  content: ""
})

const emits = defineEmits<{ (e: 'headerTitleClick'): void, (e: 'headerIconClick'): void }>()

function onHeaderTitleClick() {
  emits('headerTitleClick')
}

function onHeaderIconClick() {
  emits('headerIconClick')
}



</script>

<template>
  <div class="header-bottom-line">
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
  </div>
</template>

<style scoped>
.header-container {
  display: flex;

  /* cursor: pointer; */

  /* width: fit-content; */

  justify-content: center;
  align-items: center;

  /* margin-top: 1rem; */
  padding-top: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;

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
  position: absolute;

  /* margin-top: 0.75rem; */
  padding-top: 1.5rem;
  left: 2%;

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
</style>