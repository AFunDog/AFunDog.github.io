<script setup lang="ts">
import {  DefineComponent, provide, ref, watch } from 'vue';
import NavBar from './components/NavBar.vue'
import CustomHeader from './components/CustomHeader.vue';
import { useRouter } from 'vue-router';
import AppBackgroundImage from './assets/app_background.jpg'
import AppLastImage from './assets/app_last.png'
import SubNavBar from './components/LeftNavBar.vue';



// const globalProps = getCurrentInstance()?.appContext.config.globalProperties

// const subNavBar = ref<HTMLElement | null>(null)
const router = useRouter()
const viewTransition = ref('')
const curIndex = ref(0)

const isLeftNavBarShow = ref(false)
const isLastImageShow = ref(true)
const isInfoBorderShow = ref(true)

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
const isDarkMode = ref(mediaQuery.matches)
// 监听主题颜色发生改变
mediaQuery.addEventListener('change', (e) => {
  isDarkMode.value = e.matches
  console.debug("主题发生变化 Dark",e.matches)
})
watch(isDarkMode,(value) =>{
  document.documentElement.classList.toggle('light', !value)
})

provide('isInfoBorderShow', isInfoBorderShow)
provide('isDarkMode', isDarkMode)

// watchEffect(() =>{
//   console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)
// })

router.beforeEach((to, from) => {
  curIndex.value = to.meta.index as number
  if ((to.meta.index as number) > (from.meta.index as number)) {
    viewTransition.value = 'slide-right'
  }
  else if ((to.meta.index as number) < (from.meta.index as number)) {
    viewTransition.value = 'slide-left'
  }
  else {
    viewTransition.value = ''
  }
})

function onBeforeLeaved() {
  isLastImageShow.value = false
}

function onAfterLeaved() {
  isLastImageShow.value = true
}

function onHeaderTitleClick() {
  document.body.style.overflowY = document.body.style.overflowY == 'hidden' ? 'auto' : 'hidden'
}

function onHeaderIconClick() {
  isInfoBorderShow.value = !isInfoBorderShow.value
  // isLeftNavBarShow.value = !isLeftNavBarShow.value
  // if (!isLeftNavBarShow.value) {
  // console.log(subNavBar.value?.focus)
  // }
}

</script>

<template>
  <div>

    <img class="main-background-image" :src="AppBackgroundImage" />
    <div class="main-background-image-mask">
    </div>

    <CustomHeader :icon="$route.meta.icon as DefineComponent" :content="($route.meta.title as string)" @header-title-click="onHeaderTitleClick"
      @header-icon-click="onHeaderIconClick" />

    <NavBar :index="curIndex" />
    <!--     
    <div class="top-background-image-container">
      <img src="/src/assets/main_background.jpg" />
    </div> -->

    <SubNavBar @focusin="isLeftNavBarShow = true" @focusout="isLeftNavBarShow = false" :is-show="isLeftNavBarShow"
      :items="router.getRoutes().map(route => {
        return { path: route.path, icon: route.meta.icon as DefineComponent, title: route.meta.title as string }
      })" />

    <!-- 导航页 -->
    <main class="main-container">
      <div class="view-container">
        <RouterView v-slot="{ Component, route }">
          <Transition :name="viewTransition" @before-leave="onBeforeLeaved" @after-leave="onAfterLeaved">
            <component :is="Component" :key="route.path" />
          </Transition>
        </RouterView>
      </div>

    </main>
    <!-- 展示末尾图片 -->
    <div :class="['last-image-container', { 'hide': !isLastImageShow }]">
      <img alt="剧终图" :src="AppLastImage" />
    </div>
  </div>
</template>

<style scoped>
.main-background-image-mask {
  position: fixed;
  top: 0;

  width: 100%;
  height: 100%;


  z-index: -1;


  /* filter: saturate(); */

  background-image:
    radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5)),
    radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, .3) 166%);


  transition: all 1s;
}

.main-background-image {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;


  object-fit: cover;

  z-index: -2;

  transition: all 1s;
}

.last-image-container {
  width: 100%;

  z-index: -1;

  &>img {
    width: 100%;
  }

  &.hide {
    opacity: 0;
    transition: none;
  }

  transition: all 1s;

}



.main-container {
  /* overflow-x: hidden; */
  /* overflow-y: hidden; */

  &>.view-container {

    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
      position: absolute;
      width: 100%;
      transition: transform .3s cubic-bezier(.215, .61, .355, 1);
    }

    .slide-left-enter-active {
      left: -100%;
    }

    .slide-left-enter-to {
      transform: translateX(100%);

    }

    .slide-left-leave-active {
      left: 0;
    }

    .slide-left-leave-to {
      transform: translateX(100%);

    }

    .slide-right-enter-active {
      left: 100%;
    }

    .slide-right-enter-to {
      transform: translateX(-100%);
    }

    .slide-right-leave-active {
      left: 0;
    }

    .slide-right-leave-to {
      transform: translateX(-100%);
    }

  }
}
</style>
