<script setup lang="ts">
import { DefineComponent } from "vue";
import GithubIcon from "../assets/icons/GithubIcon.vue";

const props = withDefaults(defineProps<{
  link?: string | null;
  title?: string | null;
}>(), {
  link: null,
  title: null
})

</script>

<template>
  <a :href="link"
    class="grid grid-cols-[auto_1fr] gap-x-2 items-center h-fit p-2 bg-(--background-color) rounded-(--global-border-radius-2) cursor-pointer transition-all hover:transform-[scale(1.1)]">
    <div>
      <slot></slot>
    </div>
    <div class="justify-self-center">{{ title }}</div>
  </a>
</template>

<style scoped></style>