<template>
  <div
    class="flex-col page"
    :class="`page${PAGE_NUMBER}`"
    :id="`page${PAGE_NUMBER}`"
  >
    <div class="flex-col self-start group">
      <div class="self-end content-block group_1">
        <div class="textAni hide">

          <p>到今天</p>
        </div>
        <div class="textAni hide">
          <p>
        xx已经诞生
        <span class="font_2">X</span>年<span class="font_2">X</span>月
        <span class="font_2">X</span>日啦！
          </p>
        </div>
        <div class="textAni hide">
          <p>
          <span class="font_2">X</span>年
          <span class="font_2">X</span>月
          <span class="font_2">X</span>日
          </p>
        </div>
        <div class="textAni hide">
          <p>是你和xx第一次见面的日子</p>
        </div>
        <div class="textAni hide">
          <p>xx与你相伴已经
          <span class="font_2">X</span>天了</p>
        </div>
        <div class="textAni hide">
          <p>还是如此一往情深！</p>
        </div>
        <div class="textAni hide">
          <p>
          你是第
          <span class="font_2">X</span>
         个注册xx的用户</p>
        </div>
      </div>
      <div class="flex-col justify-start items-center  group_2">
        <img class="image" src="/imgs/3/bottle.svg" alt="" />
        <div class="group_3 pos textAni hide">
          <span class="font_3 text">——</span>
          <span class="font_3 text_2">xx我真是万人迷呀</span>
          <span class="font text_3">（得意）</span>
        </div>
      </div>
    </div>
    <ScrollUpHint v-if="showHint" />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const PAGE_NUMBER = 3
const hide = ref(true)
const showHint = ref(false)

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`)
  // 先隐藏所有文本
  const texts = document.querySelectorAll(`.page${PAGE_NUMBER} .textAni`)
  texts.forEach(el => el.classList.add('hide'))
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`)
  hide.value = false

  let time = 0
  const delays = [200, 200, 600, 600, 600, 600, 600, 600] // 与原本style中delay对应

  const textList = Array.from(document.querySelectorAll(`.page${PAGE_NUMBER} .textAni:not(.group_3)`))
  textList.forEach((el, index) => {
    setTimeout(() => {
      el.classList.remove('hide')
    }, time += delays[index] ?? 200)
  })

  // 最后一部分文字动画
  setTimeout(() => {
    const group3 = document.querySelector(`.page${PAGE_NUMBER} .group_3`)
    if (group3) {
      group3.classList.remove('hide')
    }
  }, time + 200)

  // 所有文字出现后再append
  setTimeout(() => {
    showHint.value = true
    appendNextPage(PAGE_NUMBER)
  }, time + 400)
}

onMounted(() => {
  init()
  onEnterViewportForFirstTime(PAGE_NUMBER, onShow)
})
</script>

  
  <style scoped>

  .flex-row {
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    overflow-y:hidden;
    gap:0;
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
    padding: 10% 0 5% 0;
    background-color: var(--clr-green);
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    
    display: flex;
    flex-direction: column;
  }
  .group {
    overflow-x: hidden;
   
  }
  .group_1{
    width:auto;
    height:38%vw;
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
  width: 73vw; /* 设备宽度的 73% */
  height: 37vh; /* 设备高度的 36% */
  margin-left:-3.5rem;
  margin-bottom: -2.5rem;
}
  .group_3 {
    text-align: center;
    width: 100%;
    margin-top:-2.5rem;
  }
  .pos {
    position: relative;
    height:10%;
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
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.textAni.hide {
  opacity: 0;
}

.textAni:not(.hide) {
  opacity: 1;
}
  </style>