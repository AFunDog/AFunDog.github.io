<script setup lang="ts">



</script>

<template>

  <caption class="caption-container">

    <div class="caption-content-container">
      <img class="caption-icon def-shadow" src="../assets/头像.png">
      <p class="caption-name">曾 昆</p>
    </div>
  </caption>
  <div class="caption-desc">
    广阔天地 大有作为
  </div>
</template>

<style scoped>
.caption-container {
  display: flex;
  position: relative;

  width: 60%;
  left: 20%;

  margin: 3rem 0;

  justify-content: center;
  align-items: center;

  border-radius: 1rem;
  background-image: linear-gradient(to right, #e67e22, #e74c3c);

  overflow: hidden;

  /* border-color: transparent; */

  /* background-clip: padding-box, border-box; */
  /* background-origin: padding-box, border-box; */

  /* background-image: linear-gradient(red,red),linear-gradient(black,transparent); */
  /* background-image: linear-gradient(to right, var(--background-color), var(--background-color)), linear-gradient(to right, #8F41E9, #578AEF); */


}

.caption-content-container {

  display: flex;
  flex-direction: row;


  /* margin: 1rem 0; */
  padding: 1rem 0;


  justify-content: center;
  align-items: center;


  user-select: none;

  transition: all .2s;


  cursor: pointer;

  &:hover {
    scale: 1.06;
  }

}

.caption-icon {
  width: 8rem;
  height: 8rem;

  border-radius: 50%;
}

.caption-name {

  margin-left: 1rem;

  font-size: 2rem;
  font-weight: bold;
}

.caption-desc {
  position: relative;

  width: 80%;
  left: 10%;

  height: 6rem;
  line-height: 6rem;

  text-align: center;

  font-size: 3.5rem;
  font-weight: bold;
  font-family: '华文行楷';

  user-select: none;
  cursor: pointer;

  transition: all .2s;

  &:hover {
    font-size: 4rem;
  }
}
</style>
