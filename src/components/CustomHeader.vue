<script setup lang="ts">

const props = withDefaults(defineProps<{ content: string }>(), { content: "" })


</script>

<template>
  <div class="header-bottom-line">
    <div class="header-icon-container">
      <img class="header-icon def-shadow" src="../assets/头像.png" />
      <p class="caption-name">曾昆</p>
    </div>
    <header class="header-container">
      {{ props.content }}
    </header>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;

  justify-content: center;
  align-items: center;

  margin-top: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;

  user-select: none;
}

.header-bottom-line::after {
  display: block;

  width: 96%;
  height: 0.1rem;

  margin: 0 auto;
  margin-top: 0.25rem;
  content: '';
  background-color: rgba(255, 255, 255, 0.33);
}


.header-icon-container {
  display: flex;
  flex-direction: row;
  position: absolute;

  margin-top: 0.75rem;
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
}

.caption-name {

  margin-left: 1rem;

  font-size: 1.5rem;
  font-weight: bold;

  user-select: none;
  /* width: 10rem; */
  letter-spacing: 0.25rem;
}
</style>