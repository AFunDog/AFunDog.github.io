<script setup lang="ts">

import { ref } from 'vue';
import card1 from '../assets/showcards/card1.png'
import card2 from '../assets/showcards/card2.png'
// import card3 from '../assets/showcards/card3.png'
import card4 from '../assets/showcards/card4.png'
import { cn } from '../lib/tools';

const cardSize = { width: 20, height: 30 }
const cardSpace = 1

// const showCardList = [
//   {
//     url: card1, saying: '死亡不属于工人阶级', author: '列宁'
//   },
//   {
//     url: card2, saying: '世界是属于你们的', author: '毛泽东'
//   },
//   {
//     url: card4, saying: '全世界无产者，联合起来!', author: '马克思'
//   },
// ]

const props = withDefaults(defineProps<{
  title?: string
  items?: { url: string, saying: string, author: string }[]
}>(), {})

const selectedIndex = ref(0)

function onCardClicked(index: number) {
  selectedIndex.value = index
}


// 默认选择中间的
selectedIndex.value = Math.floor((props.items?.length ?? 0) / 2)

// onSelectedIndexChanged(selectedIndex.value,selectedIndex.value)

</script>

<template>
  <div class="root w-full flex flex-col justify-center align-center">
    <div class="m-[0_auto] text-6xl font-['huangkai',system-ui]">
      {{ title }}
    </div>
    <div class="w-full overflow-hidden">
      <div
      class="flex relative justify-center m-[0_auto] transform-(--slide-container-transform) items-center h-(--slide-container-height) transition-all duration-200">
      
      <div class="block" v-for="(card, index) in props.items">
        <div @click="onCardClicked(index)" :class="cn('show-card', [selectedIndex == index ? 'selected' : ''])">
          <img :src="card.url" :alt="card.saying" />
          <p class="show-card-saying">{{ card.saying }}</p>
          <h4 class="show-card-author">— {{ card.author }}</h4>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.root {
  /* 容器的偏移位置 根据选中项偏移 */
  --slide-container-transform: translateX(calc(v-bind('(cardSize.width + cardSpace * 2) * (((props.items?.length ?? 0) - 1) / 2 - selectedIndex) + "rem"')));
  /* 容器高度 防止容器高度改变时产生抖动 */
  --slide-container-height: v-bind('cardSize.height * 1.2 + 4 + "rem"');
}

.show-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: v-bind('cardSize.width + "rem"');
  height: v-bind('cardSize.height + "rem"');
  margin: 1rem v-bind('cardSpace + "rem"');

  border-radius: var(--global-border-radius);


  box-sizing: content-box;
  border-color: transparent;


  background-color: color-mix(in srgb, var(--background-color), transparent 33%);

  align-items: center;

  box-shadow: 0.2rem 0.2rem 0.4rem 0.2rem color-mix(in srgb, var(--background-color), transparent 66%);

  transition: all .2s;


  &:hover,
  &.selected {
    border-style: solid;
    border-width: 0.25rem;
    width: v-bind('cardSize.width * 1.04 + "rem"');
    height: v-bind('cardSize.height * 1.04 + "rem"');
    border-color: var(--theme-color);
    box-shadow: 0.2rem 0.2rem 0.6rem 0.3rem rgb(from var(--theme-color) r g b / .44);
    border-style: solid;
    border-width: 0.25rem;
    width: v-bind('cardSize.width * 1.04 + "rem"');
    height: v-bind('cardSize.height * 1.04 + "rem"');
    border-color: var(--theme-color);
    box-shadow: 0.2rem 0.2rem 0.6rem 0.3rem rgb(from var(--theme-color) r g b / .44);
    transform: translateY(-0.25rem);
  }

  &.selected {
    width: v-bind('cardSize.width * 1.1 + "rem"');
    height: v-bind('cardSize.height * 1.1 + "rem"');
  }

  &.selected {
    width: v-bind('cardSize.width * 1.1 + "rem"');
    height: v-bind('cardSize.height * 1.1 + "rem"');
  }

  &>img {
    display: inline-block;
    /* transform: translateX(-30%); */
    height: 75%;
    min-width: 100%;
    object-fit: cover;
  }
}

.show-card-saying {

  margin-top: 0.5rem;

  font-family: '宋体', system-ui;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  width: 100%;
}

.show-card-author {
  font-size: 2rem;
  font-family: 'huangkai', system-ui;

  line-height: 4rem;
  width: 100%;
  text-align: center;
}
</style>