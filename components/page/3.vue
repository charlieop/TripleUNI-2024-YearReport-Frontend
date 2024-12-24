<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="content-block pt1">
      <p class="hide">到今天</p>
      <p class="hide">
        XX已经诞生
        <span class="figure">X</span>年<span class="figure">X</span>月
        <span class="figure">X</span>日啦!
      </p>
      <div>
        <p class="hide">
          <span class="figure">X</span>年 <span class="figure">X</span>月
          <span class="figure">X</span>日
        </p>
        <p class="hide">是你和XX第一次见面的日子</p>
      </div>
      <div>
        <p class="hide">XX与你相伴已经<span class="figure">X</span>天了</p>
        <p class="hide">还是如此一往情深 !</p>
      </div>
      <p class="hide">你是第<span class="figure">X</span>个注册XX的用户</p>
      <div class="img-wrapper">
        <img src="/imgs/3/bg.svg" alt="" class="bg" />
        <img src="/imgs/3/bottle.svg" alt="" class="decor bottle hide" />
        <img src="/imgs/3/wave.svg" alt="" class="decor wave" />
        <img src="/imgs/3/bird.svg" alt="" class="decor bird hide" />
      </div>
    </div>

    <div class="content-block pt2">
      <p class="text hide">——</p>
      <p class="text highlight hide">XX我真是万人迷呀</p>
      <p class="hide">(得意)</p>
    </div>
    <ScrollUpHint v-if="showHint" />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const PAGE_NUMBER = 3;
const hide = ref(true);
const showHint = ref(false);

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
  // 先隐藏所有文本
  const texts = document.querySelectorAll(`.page${PAGE_NUMBER} .textAni`);
  texts.forEach((el) => el.classList.add("hide"));
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
  console.log(`Page ${PAGE_NUMBER} shown`);
  hide.value = false;

  let time = 0;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 > p:nth-child(1)"]);
  }, (time += 1500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 > p:nth-child(2)"]);
  }, (time += 500));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".bottle"]);
  }, (time += 500));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div:nth-child(3) p:nth-child(1)"]);
  }, (time += 1500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div:nth-child(3) p:nth-child(2)"]);
  }, (time += 500));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div:nth-child(4) p:nth-child(1)"]);
  }, (time += 1000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div:nth-child(4) p:nth-child(2)"]);
  }, (time += 500));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".bird"]);
  }, (time += 500));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(5)"]);
  }, (time += 1500));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 > p:nth-child(1)"]);
  }, (time += 2000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 > p:nth-child(2)"]);
  }, (time += 500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 > p:nth-child(3)"]);
  }, (time += 500));

  setTimeout(() => {
    showHint.value = true;
    appendNextPage(PAGE_NUMBER);
  }, (time += 500));
}

onMounted(() => {
  init()
  onEnterViewportForFirstTime(PAGE_NUMBER, onShow)
})
</script>

<style scoped>
p {
  text-wrap: balance;
}
.page3 {
  padding-top: 5%;
  background-color: var(--clr-green);
}
.content-block {
  gap: 0.375rem;
}

@media (min-height: 650px) {
  .content-block {
    gap: 0.75rem;
  }
}
@media (min-height: 730px) {
  .content-block {
    gap: 1rem;
  }
}
@media (min-height: 790px) {
  .content-block {
    gap: 0.5rem;
  }
}
@media (min-height: 850px) {
  .page3 {
    padding-top: 20%;
  }
}

.img-wrapper {
  width: 80%;
  margin-block: -18% -20%;
  scale: 1.3;
  position: relative;
}
.decor {
  top: 0;
  left: 0;
}
.bottle {
  animation: bottle 4s infinite, wave 5s infinite;
}
.wave {
  animation: wave 5s infinite;
}
@keyframes bottle {
  0% {
    transform: translateX(3px) rotate(-3deg);
  }
  50% {
    transform: translateX(-3px) rotate(3deg);
  }
  100% {
    transform: translateX(3px) rotate(-3deg);
  }
}
@keyframes wave {
  0% {
    translate: 0 -1%;
  }
  50% {
    translate: 0 1%;
  }
  100% {
    translate: 0 -1%;
  }
}
.bird {
  top: 10%;
  animation: bird 10s infinite;
}
@keyframes bird {
  0% {
    transform: translate(5rem, 0);
  }
  25% {
    transform: translate(2rem, 2rem);
  }
  50% {
    transform: translate(-10rem, -1rem);
  }
  51% {
    transform: translate(-10rem, -0.5rem) rotateY(180deg);
  }
  75% {
    transform: translate(-3rem, 2rem) rotateY(180deg);
  }
  100% {
    transform: translate(5rem, 0);
  }
}

.pt2 {
  text-align: center;
}
.text {
  font-size: 2rem;
}
.highlight {
  color: var(--clr-oragne);
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