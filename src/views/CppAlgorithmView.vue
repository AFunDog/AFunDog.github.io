<script setup lang="ts">

import markdownItTocDoneRight from "markdown-it-toc-done-right";
import mk from "@vscode/markdown-it-katex"
import anchor from 'markdown-it-anchor';
import MarkdownIt from 'markdown-it'
import { ref } from "vue";

import 算法资料 from '../docs/算法资料.md?raw'


const markdownContent = ref('')
const tocContent = ref('')
const markdown = new MarkdownIt()
  .use(mk, {
    throwOnError: false,
    errorColor: " #cc0000",
    displayMode: true,
  })
  .use(anchor, {
    permalink: true,
    permalinkClass: 'direct-link',
    permalinkSymbol: '#',
    permalinkBefore: true,
  })
  .use(markdownItTocDoneRight, {
    listClass: 'markdown-toc-list',
    listType: 'ul',
    itemClass: 'markdown-toc-item',
    linkClass: 'markdown-toc-link',
    callback: (html: string, _: any) => {
      tocContent.value = html
    },
  })
markdownContent.value = markdown.render(算法资料)
</script>

<template>

  <div class="markdown-container">
    <!-- 导航目录 -->
    <div class="toc-container">
      <div v-html="tocContent" class="markdown-body type-toc"></div>
    </div>
    <div v-html="markdownContent" v-highlight class="markdown-body type-body"></div>
  </div>
  <!-- <div v-html="tocContent"></div> -->


</template>

<style scoped>
.markdown-container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin: 2rem;

}

.toc-container {
  align-self: flex-start;
  position: sticky;
  top: 2rem;
  /* left: 2rem; */

  /* margin-right: 2rem; */
}

.markdown-body {

  /* background-color: transparent; */
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 1rem;
  box-sizing: border-box;

  &.type-toc {
    position: relative;
    top: 0;
    margin-right: 2rem;
    /* transform: translateX(calc(-100% - 4rem)); */
    &::before{
      content: '导航目录';
      margin-bottom: 0.5rem;
    }
  }

  &.type-body {

    padding: 3rem;
    min-width: 15rem;
    max-width: 65rem;

  }
}

/* 边栏收缩模式 */
@media (max-width: 1000px) {
  .markdown-body {

    &.type-toc {
      display: none;
    }

    &.type-body {

      padding: 1rem;

    }
  }
}
</style>