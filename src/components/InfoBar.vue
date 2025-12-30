<script setup lang="ts">
import { inject, ref } from 'vue';
import GithubIcon from '../assets/icons/GithubIcon.vue'
import { cn } from '../lib/tools';


const isInfoBorderShow = inject('isInfoBorderShow', ref(false))
</script>

<template>
  <div>
    <div class="flex justify-center items-center">
      <div
        :class="cn('flex justify-center items-center border-animation max-w-200 rounded-(--global-border-radius-4)', [isInfoBorderShow ? 'w-4/5 scale-100 h-50' : 'w-0 h-0 scale-0'])">
        <div :class="cn('info-border acrylic h-full w-full')">
          <!-- <div class="github-info-container">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AFunDog&locale=cn&layout=donut&theme=codeSTACKr"/>
            <img src="https://github-readme-stats.vercel.app/api?username=AFunDog&locale=cn&show_icons=true&theme=codeSTACKr"/>
        </div> -->

          <div class="flex flex-row ml-8 mr-4 justify-start items-center">
            <img class="w-32 h-32 rounded-[50%] shadow-[0_0_0.25rem_0.25rem_rgba(0,0,0,0.33)]" src="../assets/头像.png" />
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
                <GithubIcon class="link-info-button-icon" />
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
  </div>
</template>

<style scoped>
/* 渐变边框动画 */
@keyframes gradientBorderMove {
  0% {
    background-position: 0% 0%;
  }

  100% {
    background-position: 200% 0%;
  }
}

.border-animation {

  box-sizing: content-box;

  background: linear-gradient(90deg,
      #ff0000, #ff9900, #9933ff, #ff0000);

  background-clip: border-box;
  background-origin: border-box;
  background-size: 200% 100%;

  border: 0.5rem solid transparent;

  animation: gradientBorderMove 8s linear infinite;

}

.info-border {
  /* display: none; */
  display: grid;

  grid-template-columns: auto 2fr 6fr;

  justify-items: center;
  align-items: center;



  overflow: hidden;

  border-radius: var(--global-border-radius-4);

  /* scale: 0; */

  transition: all .2s;

  /* border: 2px solid transparent;
  background: linear-gradient(90deg,
      #ff0000, #ff9900, #9933ff, #ff0000);
  background-clip: padding-box, border-box;
  background-size: 50% 100% 100% 100%; */


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


  border-radius: var(--global-border-radius-2);

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