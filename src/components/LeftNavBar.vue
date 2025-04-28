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
    <div :class="['border acrylic', { 'show': props.isShow }]">
      <div class="sub-link-container">
        <RouterLink v-for="(item) in props.items" :to="item.path" class="sub-link">
          <component :is="item.icon"></component>
          <div>
            {{ item.title }}
          </div>
        </RouterLink>

      </div>
      <div :class="['right-bar-container',{'hide' : props.isShow}]" >
        <div class="right-bar"></div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.container {
  position: fixed;
  display: grid;

  grid-template-columns: 1fr auto;

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

  --border-width: 12em;
  --border-height: 30em;
  
  --border-hide-width: 1.5em;
  --border-hide-height: 6em;
  
  --border-animation-duration: 0.13s;


  display: flex;

  flex-direction: row;

  justify-content:stretch;

  overflow: hidden;


  /* width: 0; */
  width: var(--border-width);
  height: var(--border-hide-height);

  margin-left: calc(var(--border-hide-width) - var(--border-width));
  /* padding-right: 2em; */

  border-radius: var(--global-border-radius);

  backdrop-filter: blur(0.5em);

  /* background-color: color-mix(in srgb, var(--background-color), transparent 40%); */
  box-shadow: 0.2em 0.2em 0.4em 0.1em rgba(0, 0, 0, 0.33);

  user-select: none;
  pointer-events: all;
  transition: all var(--border-animation-duration);

  &.show {

    margin-left: 2em;

    height: var(--border-height);
  }


}

.sub-link-container {
  display: flex;

  flex-direction: column;

  flex: 1;
  
}

.sub-link {
  display: flex;

  flex-direction: row;

  align-items: center;
  gap: 1em;
  cursor: pointer;

  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  border-radius: calc(var(--global-border-radius) * 0.5);
  font-size: 1.2em;

  transition: all var(--border-animation-duration);

  &:hover {
    background-color: color-mix(in srgb, var(--foreground-color), transparent 90%);
    /* color: var(--background-color); */
  }
}

.right-bar-container {

  display: flex;
  cursor: pointer;

  justify-content: center;
  align-items: center;

  width: var(--border-hide-width);
  height: 100%;

  transition: all var(--border-animation-duration);
  &.hide{
    width: 0;
  }
}
.right-bar {
  width: 40%;
  height: 3em;

  background-color: color-mix(in srgb, var(--foreground-color), transparent 10%);

  border-radius: 2em;

}
</style>