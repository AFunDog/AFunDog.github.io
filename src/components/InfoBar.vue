<script setup lang="ts">
import { inject, ref } from 'vue';
import GithubIcon from '../assets/icons/GithubIcon.vue'
import { cn } from '../lib/tools';
import MyIcon from '../assets/头像.png';
import OutsideWebLinkButton from './OutsideWebLinkButton.vue';
import BiliBiliIcon from '../assets/icons/BiliBiliIcon.vue';
import ImageLoader from './ImageLoader.vue';


const isInfoBorderShow = inject('isInfoBorderShow', ref(false))
</script>

<template>
  <div>
    <div class="flex justify-center items-center">
      <div
        :class="cn('flex justify-center items-center max-w-200 shadow-2xl rounded-(--global-border-radius-4)', [isInfoBorderShow ? 'w-4/5 scale-100 h-100' : 'w-0 h-0 scale-0'])">
        <div
          :class="cn('flex flex-row justify-evenly items-center infobar-bg  acrylic  h-full w-full rounded-(--global-border-radius-4) p-4 ')">
          <div class="flex flex-col justify-center items-center gap-y-2 ">
            <!-- 头像 -->
            <div class="flex flex-row justify-start items-center">
              <ImageLoader class="w-32 h-32 rounded-[50%] shadow-[0_0_0.25rem_0.25rem_rgba(0,0,0,0.33)]"
                :src="MyIcon" />
            </div>

            <!-- 关于我 -->
            <div class="flex flex-col justify-center items-center gap-4">
              <div class="flex flex-col items-center">
                <div class="text-2xl font-bold tracking-[0.25rem] no-underline">
                  曾昆
                </div>
                <div>
                  AFunDog
                </div>
              </div>

              <div class="flex flex-col gap-y-2 *:select-none">
                <!-- GitHub -->
                <OutsideWebLinkButton title="Github" link="https://github.com/AFunDog">
                  <GithubIcon class="size-6" />
                </OutsideWebLinkButton>
                <!-- B站 -->
                <OutsideWebLinkButton title="哔哩哔哩" link="https://space.bilibili.com/102505755" class="bg-pink-500">
                  <BiliBiliIcon class="size-6" />
                </OutsideWebLinkButton>
              </div>


            </div>

          </div>
          <!-- 描述 -->
          <div class="flex flex-col items-center">
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

.infobar-bg {
  background-color: color-mix(in srgb, var(--background-color), transparent 33%);
}

.border-animation {

  box-sizing: content-box;

  background: linear-gradient(90deg,
      #ff000080, #ff990080, #9933ff80, #ff000080);

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
</style>