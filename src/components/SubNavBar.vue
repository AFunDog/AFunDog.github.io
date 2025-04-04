<script setup lang="ts">
import { DefineComponent, watch } from 'vue';


const props = withDefaults(defineProps<{
  isShow?: boolean,
  index?: number,
  items?: { path: string, icon?: DefineComponent | null, title: string }[]
}>()
  , { isShow: false, index: 0, items: () => [] }
)

watch(() => props.isShow, (value) => {
  if (value)
    focus()
})



</script>

<template>
  <div tabindex="0" class="container">
    <div :class="['border', { 'show': props.isShow }]">
      <RouterLink v-for="(item) in props.items" :to="item.path" class="sub-link">
        <component :is="item.icon"></component>
        <div>
          {{ item.title }}
        </div>
      </RouterLink>
    </div>
  </div>

</template>

<style scoped>
.container {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;

  height: 100%;

  /* 永远展示在最前面 */
  z-index: 99;

  /* 不响应鼠标事件 */
  pointer-events: none;
}

.border {

  --border-width: 16em;

  display: flex;

  flex-direction: column;
  overflow: hidden;


  /* width: 0; */
  width: var(--border-width);
  height: 30em;

  margin-left: calc(0em - var(--border-width) + 2em);
  padding-right: 2em;

  border-radius: 0.5em;

  backdrop-filter: blur(0.5em);

  background-color: color-mix(in srgb, var(--background-color), transparent 40%);
  box-shadow: 0.2em 0.2em 0.4em 0.1em rgba(0, 0, 0, 0.33);

  user-select: none;
  pointer-events: all;
  transition: all 0.2s;

  &.show {

    margin-left: 2em;
    padding-right: 0em;
  }


}

.sub-link {
  display: flex;

  flex-direction: row;

  align-items: center;
  gap : 1em;

  text-decoration: none;
  cursor: pointer;

  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  border-radius: 0.25em;
  font-size: 1.2em;

  transition: all 0.13s;

  &:hover {
    background-color: color-mix(in srgb, var(--theme-color), transparent 10%);
    /* color: var(--background-color); */
  }
}
</style>