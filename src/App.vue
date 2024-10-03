<script setup lang="ts">
import { ref } from 'vue';
import NavBar from './components/NavBar.vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const viewTransition = ref('')
const curIndex = ref(0)

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

</script>

<template>
  <header>
    {{ $route.meta.title as string }}
  </header>
  <NavBar :index="curIndex" />
  <!-- 导航页 -->
  <main class="main-container">
    <div class="view-container">
      <RouterView v-slot="{ Component, route }">
        <Transition :name="viewTransition">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </div>

  </main>
</template>

<style scoped>
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
  overflow-x: hidden;

  &>.view-container {
    display: flex;
    width: 200%;

    &>div {
      width: 50%;
    }

    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
      transition: transform .3s;
    }

    .slide-right-enter-from {
      transform: translateX(0);
    }

    .slide-right-enter-to {
      transform: translateX(-100%);
    }

    .slide-right-leave-from {
      transform: translateX(0);
    }

    .slide-right-leave-to {
      transform: translateX(-100%);
    }

    .slide-left-enter-from {
      transform: translateX(-200%);
    }

    .slide-left-enter-to {
      transform: translateX(-100%);
    }

    .slide-left-leave-from {
      transform: translateX(0);
    }

    .slide-left-leave-to {
      transform: translateX(100%);
    }
  }
}
</style>
