<template>
    <div class="flex-col page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
      <div class="flex-col self-start group">
        <div class="self-end">
          <div class="textAni">
            <span class="font">
              到今天
              <br />
            </span>
          </div>
          <div class="textAni" style="animation-delay: 0.2s;">
            <span class="font">
              噗噗已经诞生
            </span>
            <span class="font_2">X</span>
            <span class="font">年</span>
            <span class="font_2">X</span>
            <span class="font">月</span>
            <span class="font_2">X</span>
            <span class="font">
              日啦！
              <br />
              <br />
            </span>
          </div>
          <div class="textAni" style="animation-delay: 0.8s;">
            <span class="font_2">X</span>
            <span class="font">年</span>
            <span class="font_2">X</span>
            <span class="font">月</span>
            <span class="font_2">X</span>
            <span class="font">
              日
              <br />
            </span>
          </div>
          <div class="textAni" style="animation-delay: 1.0s;">
            <span class="font">
              是你和噗噗第一次见面的日子
              <br />
              <br />
            </span>
          </div>
          <div class="textAni" style="animation-delay: 1.2s;">
            <span class="font">噗噗与你相伴已经</span>
            <span class="font_2">X</span>
            <span class="font">
              天了
              <br />
            </span>
          </div>
          <div class="textAni" style="animation-delay: 1.4s;">
            <span class="font">
              还是如此一往情深！
              <br />
              <br />
            </span>
          </div>
          <div class="textAni" style="animation-delay: 1.6s;">
            <span class="font">你是第</span>
            <span class="font_2">X</span>
            <span class="font">个注册噗噗的用户</span>
          </div>
        </div>
        <div class="flex-col justify-start items-start self-stretch relative group_2">
          <img
            class="image"
            src="/imgs/3/bottle.svg"
            alt=""
          />
          <div class="group_3 pos textAni" style="animation-delay: 1.8s;">
            <span class="font_3 text">
              ——
              <br />
            </span>
            <span class="font_3 text_2">
              噗噗我真是万人迷呀
              <br />
            </span>
            <span class="font text_3">（得意）</span>
          </div>
        </div>
      </div>
      <ScrollUpHint v-if="showHint" />
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  
  
  const PAGE_NUMBER = 3;
  const hide = ref(true);
  const showHint = ref(false);
  
  function init() {
    console.log(`Page ${PAGE_NUMBER} initialized`);
  }
  
  function onShow() {
    console.log(`Page ${PAGE_NUMBER} shown`);
    hide.value = false;
    showHint.value = true;
    appendNextPage(PAGE_NUMBER);
  }
  
  onMounted(() => {
    init();
    onEnterViewportForFirstTime(PAGE_NUMBER, onShow);
  });
  </script>
  
  <style scoped>
  .mt-67 {
    margin-top: 4.19rem;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    overflow-y:hidden;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-center {
    align-items: center;
  }
  .items-baseline {
    align-items: baseline;
  }
  .items-stretch {
    align-items: stretch;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-center {
    align-self: center;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-stretch {
    align-self: stretch;
  }
  .flex-1 {
    flex: 1 1 0%;
  }
  .flex-auto {
    flex: 1 1 auto;
  }
  .grow {
    flex-grow: 1;
  }
  .grow-0 {
    flex-grow: 0;
  }
  .shrink {
    flex-shrink: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .relative {
    position: relative;
  }
  .page3 {
    padding: 3.5rem 0 1.5rem;
    background-color: var(--clr-green);
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    
    display: flex;
    flex-direction: column;
  }
  .group {
    overflow-x: hidden;
    width: 21.53rem;
    height: 40.85rem;
  }
  .font {
    font-size: var(--fs-primary);
    font-family: var(--ff-primary);
    line-height: 1.5rem;
    color: var(--clr-text);
  }
  .font_2 {
    font-size: var(--fs-figure);
    font-family: var(--ff-primary);
    line-height: 2.69rem;
    color: var(--clr-text);
  }
  .group_2 {
    margin-top: -2.75rem;
    overflow-x: hidden;
  }
  .image {
     
      width: 18.4rem; /* 294.37px / 16 */
    height: 19.24rem; /* 307.78px / 16 */
     margin-bottom: -2.5rpm;
    
  }
  .group_3 {
    text-align: center;
    width: 100%;
  }
  .pos {
    position: relative;
    height:6.25rem;
  }
  .font_3 {
    font-size: 2rem;
    font-family: var(--ff-primary);
    line-height: 2.38rem;
  }
  .text {
    color: var(--clr-offwhite);
  }
  .text_2 {
    color: var(--clr-oragne);
    display: block;
    text-align: center;
  }
  .text_3 {
    color: var(--clr-offwhite);
  }
  .text_4 {
    color: var(--clr-offwhite);
    font-size: var(--fs-primary);
    font-family: var(--ff-accent);
    line-height: 1.16rem;
  }
  .hint-wrapper {
    margin-top: 2rem;
  }
  .textAni {
    animation-name: textAniKey;
    animation-duration: 1.5s;
    animation-timing-function: cubic-bezier(0, 0, 0.5, 1);
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: both;
  }
  @keyframes textAniKey {
    0% {
      transform: translateY(2vw);
      opacity: 0;
    }
    100% {
      transform: translateY(0vw);
      opacity: 1;
    }
  }
  </style>