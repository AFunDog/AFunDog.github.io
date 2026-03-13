<script setup lang="ts">
import { DefineComponent, ref, inject } from 'vue';
import CustomHeader from './components/AppHeader.vue';
import { useRouter } from 'vue-router';
import AppBackgroundImage from './assets/app_background.jpg'
import AppLastImage from './assets/app_last.png'
import SubNavBar from './components/LeftNavBar.vue';
import ImageLoader from './components/ImageLoader.vue';

// 从主题插件中注入状态
const isDarkMode = inject('isDarkMode', ref(true));
const isInfoBorderShow = inject('isInfoBorderShow', ref(true));

// const globalProps = getCurrentInstance()?.appContext.config.globalProperties

// const subNavBar = ref<HTMLElement | null>(null)
const router = useRouter()

const viewTransition = ref('')
const curIndex = ref(0)

const isLeftNavBarShow = ref(false)
const isLastImageShow = ref(true)

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

    <ImageLoader class="fixed top-0 w-full h-full object-cover -z-10 dark:visible" :src="AppBackgroundImage" />
    <div class="fixed top-0 w-full h-full -z-10 main-background-image-mask">
    </div>

    <CustomHeader :icon="($route.meta.icon as DefineComponent)" :content="($route.meta.title as string)"
      @header-title-click="onHeaderTitleClick" @header-icon-click="onHeaderIconClick" />

    <SubNavBar @focusin="isLeftNavBarShow = true" @focusout="isLeftNavBarShow = false" :is-show="isLeftNavBarShow"
      :items="router.getRoutes().map(route => {
        return { path: route.path, icon: route.meta.icon as DefineComponent, title: route.meta.title as string }
      })" />

    <!-- 导航页 -->
    <main class="main-container">
      <div class="view-container">
        <RouterView v-slot="{ Component, route }">
          <Transition :name="viewTransition" @before-leave="onBeforeLeaved" @after-leave="onAfterLeaved">
            <KeepAlive>
              <component :is="Component" :key="route.path" />
            </KeepAlive>
          </Transition>
        </RouterView>
      </div>

    </main>
    <!-- 展示末尾图片 -->
    <div :class="['last-image-container', { 'hide': !isLastImageShow }]">
      <ImageLoader class="img" :src="AppLastImage" alt="剧终图" />
    </div>
  </div>
</template>

<style scoped>
.main-background-image-mask {

  background-image:
    radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5)),
    radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, .3) 166%);
}

.last-image-container {
  width: 100%;

  z-index: -1;

  &>.img {
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

.header-title-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;


  margin-top: 1em;
  /* font-family: sans-serif; */

  font-size: 2em;
  font-weight: bold;

  cursor: pointer;
  gap: 0.5em;
}

/* 顶部标题图标 */
.header-title-icon {
  height: 1.5em;
  width: 1.5em;
}
</style>