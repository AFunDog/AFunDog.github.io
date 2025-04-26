<script setup lang="ts">
import { inject, ref } from 'vue';
import GithubIcon from '../assets/icons/GithubIcon.vue'


const isInfoBorderShow = inject('isInfoBorderShow', ref(false))
</script>

<template>
  <div>
    <div class="info-container">
      <div class="info-border acrylic" :class="[isInfoBorderShow ? 'show' : '']">
        <!-- <div class="github-info-container">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AFunDog&locale=cn&layout=donut&theme=codeSTACKr"/>
            <img src="https://github-readme-stats.vercel.app/api?username=AFunDog&locale=cn&show_icons=true&theme=codeSTACKr"/>
        </div> -->

        <div class="header-icon-container">
          <img class="header-icon" src="../assets/头像.png" />
        </div>
        <div class="link-info-container">
          <div class="my-name-container">
            <div>
              曾昆
            </div>
            <div>
              AFunDog
            </div>
          </div>
          <div class="link-info-button-container">
            <a href="https://github.com/AFunDog" class="link-info-button-border">
              <GithubIcon class="link-info-button-icon"/>
              <div>GitHub</div>
            </a>
          </div>
          <!-- <div class="link-info-button-container">
            <a href="https://zengkun.me" class="link-info-button-border">
              <HugeiconsInternetIcon class="link-info-button-icon"/>
              <div>我的网站</div>
            </a>
          </div> -->

        </div>
        <div class="desc-info-container">
          <div style="font-style: italic !important;font-size: 1.2em;">
            一个喜欢做全栈开发和游戏的程序员
          </div>
          <br />
          ✨ 想要完成一套自己的全栈生态
          <br />
          ✨ 想要制作一个属于自己的游戏
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-container {

  display: flex;

  justify-content: center;
  align-items: center;

  

  /* filter: blur(1em); */

}

.info-border {
  /* display: none; */
  display: grid;

  grid-template-columns: auto 2fr 6fr;

  justify-items: center;
  align-items: center;

  width: 0;
  height: 0;
  max-width: 50em;

  overflow: hidden;

  border-radius: var(--global-border-radius);

  scale: 0;

  transition: all .2s;

  &.show {

    scale: 1;
    /* overflow: auto; */
    width: 80%;
    height: 14em;
    /* height: fit-content; */

  }

}

.header-icon-container {
  display: flex;
  flex-direction: row;

  /* margin-top: 0.75rem; */
  /* padding-top: 1.5rem; */

  margin-left: 2em;
  margin-right: 1em;

  justify-content: left;
  align-items: center;

  transition: all .2s;
}

.header-icon {

  width: 8em;
  height: 8em;

  border-radius: 50%;

  box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.33);
}

.link-info-container {
  display: flex;

  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  gap: 1em;
}

.my-name-container {

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;


  /* user-select: none; */
  /* width: 10rem; */
  
  &>div {
    display: block;
    &:nth-child(-n+1) {
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 0.25rem;

    }
  }

}



.link-info-button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;


}

.link-info-button-border {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  height: fit-content;

  padding: 0.5em;
  background-color: var(--background-color);
  

  border-radius: var(--global-border-radius);

  cursor: pointer;
  transition: all .1s;
  &:hover {
    transform: scale(1.1);
    background-color: var(--theme-color);
  }
  /* border: 1px solid var(--border-color); */
}

.link-info-button-icon {
  width: 1.5em;
  height: 1.5em;

  margin-right: 0.5em;
}

.desc-info-container {
  display: flex;

  flex-direction: column;

  align-items: center;
}

</style>