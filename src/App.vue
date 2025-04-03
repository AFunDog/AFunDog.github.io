<script setup lang="ts">
import { ref } from 'vue';
import NavBar from './components/NavBar.vue'
import CustomHeader from './components/CustomHeader.vue';
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

function onBeforeLeaved() {
  isBackgroundImageShow.value = false
}

function onAfterLeaved() {
  isBackgroundImageShow.value = true
}

</script>

<template>
  <div>

    <img class="main-background-image" src="/src/assets/main_background.jpg" />
    <div class="main-background-image-container" />

    <CustomHeader :content="($route.meta.title as string)" />

    <NavBar :index="curIndex" />
    <!--     
    <div class="top-background-image-container">
      <img src="/src/assets/main_background.jpg" />
    </div> -->

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
    <div :class="[isBackgroundImageShow ? 'background-image-container' : 'background-image-container hide']">
      <img alt="剧终图" :src="BackgroundImage" />
    </div>
  </div>
</template>

<style scoped>
.main-background-image-container {
  position: fixed;
  top: 0;

  width: 100%;
  height: 100%;


  z-index: -1;


  /* filter: saturate(); */

  background-image:
    radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5)), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, .3) 166%);


  transition: all;
}

.main-background-image {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;

  object-fit: cover;

  z-index: -2;

  transition: all;
}

/* .top-background-image-container{
  width: 100%;
  position: sticky;
  top: 0;

  z-index: -2;

  &>img {
    width: 100%;
    position: absolute;
  }
}

.top-background-image{

} */

.background-image-container {
  width: 100%;

  z-index: -1;

  &>img {
    width: 100%;
    /* object-fit: cover; */
  }

  &.hide {
    opacity: 0;
    transition: none;
  }

  transition:all 1s;
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
