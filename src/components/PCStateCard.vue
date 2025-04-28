<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import FluentColorLaptopIcon from '../assets/icons/FluentColorLaptopIcon.vue';
import LineMdRotateIcon from '../assets/icons/LineMdRotateIcon.vue';
import LineMdLoadingLoopIcon from '../assets/icons/LineMdLoadingLoopIcon.vue';

const isGetPcState = ref(false)
const isGettingPcState = ref(false)
const pcState = ref<{
  osRelease: string,
  memTotal: number,
  memAvailable: number
}>({ osRelease: '', memTotal: 0, memAvailable: 0 })

// 调用后台接口获取PC状态
function getPcState() {
  isGettingPcState.value = true
  axios.get('/api/pc-state').then(res => {
    pcState.value = res.data
    // 如果获取到的内存总量大于0，则表示获取成功
    if (pcState.value.memTotal > 0)
      isGetPcState.value = true
    else
      throw new Error('获取PC状态失败')
  }).catch(err => console.error(err)).finally(
    () => {
      if (!isGetPcState.value) {
        pcState.value = {
          osRelease: '未知❌',
          memTotal: 0,
          memAvailable: 0
        }
      }
      isGettingPcState.value = false
    }
  )
}

getPcState()

</script>
<template>
  <div class="card-container acrylic">
    <div>服务器主机</div>
    <component @click="getPcState" :is="isGettingPcState ? LineMdLoadingLoopIcon : LineMdRotateIcon"
      :class="['refresh-icon', { 'refreshing': isGettingPcState }]" />
    <div style="display: grid; grid-template-columns: auto 1fr;grid-column: span 2;margin-top: 0.5em;">
      <FluentColorLaptopIcon class="icon" />
      <div class="info-container">
        <!-- <LineMdRotateIcon class="refresh-icon"/> -->
        <div> 系统版本： {{ pcState.osRelease }}</div>
        <div>
          内存： {{ ((1 - pcState.memAvailable / pcState.memTotal) * 100.0).toFixed(0) }} %
          ( {{ ((pcState.memTotal - pcState.memAvailable) / 1024 / 1024).toFixed(1) }}
          /
          {{ (pcState.memTotal / 1024 / 1024).toFixed(1) }} GB )
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-container {
  display: grid;

  grid-template-columns: 1fr auto;
  place-items: center;


  padding: 1em;

  width: fit-content;

  font-family: sans-serif;

  border-radius: var(--global-border-radius);

  /* background-color: color-mix(in srgb, var(--background-color), transparent 20%);
  backdrop-filter: blur(0.5em); */
}

.icon {

  --icon-size: 6em;

  width: var(--icon-size);
  height: var(--icon-size);
}

.refresh-icon {
  width: 1.5em;
  height: 1.5em;

  align-self: flex-end;

  cursor: pointer;
  transition: all .2s;

  &.refreshing {
    /* cursor: none; */
    pointer-events: none;
  }
}

.info-container {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */

  margin-left: 1em;

  align-items: stretch;

  &>div {}

}
</style>