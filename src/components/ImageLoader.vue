<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Props {
  src: string;
  alt?: string;
  showProgress?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  showProgress: false
});

const imageLoaded = ref(false);
const loadingProgress = ref(0);
const imageRef = ref<HTMLImageElement | null>(null);

onMounted(() => {
  if (!imageRef.value) return;

  const image = new Image();
  image.src = props.src;

  image.onprogress = (event) => {
    if (event.lengthComputable) {
      const percent = Math.round((event.loaded / event.total) * 100);
      loadingProgress.value = percent;
    }
  };

  image.onload = () => {
    loadingProgress.value = 100;
    // 稍微延迟一下，让用户看到100%的进度
    setTimeout(() => {
      imageLoaded.value = true;
    }, 200);
  };

  image.onerror = () => {
    // 加载失败时也显示图片（会显示破损图片图标）
    imageLoaded.value = true;
  };
});
</script>

<template>
  <div class="overflow-hidden">
    <!-- 加载进度条 -->
    <div v-if="!imageLoaded && showProgress"
      class="flex flex-col w-full h-full items-center justify-center z-10 image-loader-background">
      <div class="w-[80%] h-2 rounded-full overflow-hidden mb-2.5 image-loader-background-progress">
        <div class="h-full transition-all duration-300 ease-in-out bg-(--theme-color) progress-width"></div>
      </div>
      <div class="text-sm text-(--foreground-color)">{{ loadingProgress }}%</div>
    </div>

    <!-- 图片 -->
    <img ref="imageRef" :src="src" :alt="alt"
      v-show="imageLoaded"
      class="w-full h-full object-cover opacity-0 transition-opacity duration-500"
      :class="{ 'opacity-100': imageLoaded }" />
  </div>
</template>
<style scoped>
.image-loader-background {
  background-color: color-mix(in srgb, var(--background-color), transparent 40%);
}

.image-loader-background-progress {
  background-color: color-mix(in srgb, var(--foreground-color), transparent 80%);
}

.progress-width {
  width: v-bind('loadingProgress') + '%';
}
</style>