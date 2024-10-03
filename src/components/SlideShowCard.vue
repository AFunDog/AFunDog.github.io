<script setup lang="ts">

import { ref } from 'vue';
import card1 from '../assets/showcards/card1.png'
import card2 from '../assets/showcards/card2.png'
import card3 from '../assets/showcards/card3.png'

const cardSize = { width: 20, height: 30 }
const cardSpace = 1

const showCardList = [
  {
    url: card1, saying: '死亡不属于工人阶级', author: '列宁'
  },
  {
    url: card2, saying: '世界是属于你们的', author: '毛主席'
  },
  {
    url: card3, saying: '不能再后悔了 全力以赴', author: '鲁迪乌斯'
  },
]

const selectedIndex = ref(0)

function onCardClicked(index: number) {
  selectedIndex.value = index
}


// 默认选择中间的
selectedIndex.value = Math.floor(showCardList.length / 2)

// onSelectedIndexChanged(selectedIndex.value,selectedIndex.value)

</script>

<template>
  <div class="slideshow-shell">
    <div class="slideshow-container">
      <div class="slideshow-image-container" v-for="(card, index) in showCardList">
        <div @click="onCardClicked(index)" :class="[selectedIndex == index ? 'show-card selected' : 'show-card']">
          <img :src="card.url" :alt="card.saying" />
          <p class="show-card-saying">{{ card.saying }}</p>
          <h4 class="show-card-author">—— {{ card.author }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slideshow-shell {
  position: relative;
  width: 100%;
  overflow: hidden;

}

.slideshow-container {
  display: flex;
  position: relative;

  justify-content: center;
  margin: 0 auto;
  transform: translateX(calc(v-bind('(cardSize.width + cardSpace * 2) * ((showCardList.length - 1) / 2 - selectedIndex) + "rem"')));

  height: v-bind('cardSize.height * 1.2 + 4 + "rem"');

  align-items: center;

  transition: all .2s;
}

.slideshow-image-container {
  display: block;
}

.show-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: v-bind('cardSize.width + "rem"');
  height: v-bind('cardSize.height + "rem"');
  margin: 1rem v-bind('cardSpace + "rem"');

  border-radius: 0.5rem;

  box-sizing: content-box;
  border-color: transparent;

  background-color: var(--dark-control-color);

  align-items: center;

  box-shadow: 0.2rem 0.2rem 0.4rem 0.2rem rgb(from var(--dark-control-color) r g b / .33);

  transition: all .2s;


  &:hover,
  &.selected {
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

  line-height: 4rem;
  width: 100%;
  text-align: center;
}
</style>