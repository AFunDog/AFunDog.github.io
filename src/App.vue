<script setup lang="ts">
import { ref } from 'vue';
import NavBar from './components/NavBar.vue'
import { useRouter } from 'vue-router';
import BackgroundImage from './assets/background.png'

const router = useRouter()
const viewTransition = ref('')
const curIndex = ref(0)

const isBackgroundImageShow = ref(true)

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

function onBeforeLeaved(){
  isBackgroundImageShow.value = false
}

function onAfterLeaved(){
  isBackgroundImageShow.value = true
}

</script>

<template>
  <div>



    <header>
      {{ $route.meta.title as string }}
    </header>

    <NavBar :index="curIndex" />
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
    <div :class="[isBackgroundImageShow ? 'background-image-container' : 'background-image-container hide']" >
      <img alt="剧终图" :src="BackgroundImage" />
    </div>
  </div>
</template>

<style scoped>
.background-image-container {
  width: 100%;

  z-index: -1;

  &>img {
    width: 100%;
    /* object-fit: cover; */
  }

  &.hide{
    opacity: 0;
    transition: none;
  }

  transition:all 1s;
}

header {
  margin-top: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;

  user-select: none;
}

header::after {
  display: block;

  width: 96%;
  height: 0.1rem;

  margin: 0 auto;
  margin-top: 0.25rem;
  content: '';
  background-color: rgba(255, 255, 255, 0.33);
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

    .slide-left-enter-active{
      left: -100%;
    }
    .slide-left-enter-to {
      transform: translateX(100%);

    }
    .slide-left-leave-active{
      left :0;
    }
    .slide-left-leave-to {
      transform: translateX(100%);

    }
    .slide-right-enter-active{
      left: 100%;
    }
    .slide-right-enter-to {
      transform: translateX(-100%);
    }

    .slide-right-leave-active{
      left: 0;
    }
    .slide-right-leave-to {
      transform: translateX(-100%);
    }

  }
}
</style>
