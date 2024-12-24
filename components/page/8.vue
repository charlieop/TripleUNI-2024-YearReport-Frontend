<template>
  <div
    class="flex-col page"
    :class="`page${PAGE_NUMBER}`"
    :id="`page${PAGE_NUMBER}`"
  >
    <div class="flex-col justify-start group">
      <div class="flex-col">
        <div class="self-start group_2 content-block">
          <span class="font_2 textAni hide"> 2024年 </span>
          <p class="textAni hide">
            你一共浏览了
            <span>XX</span>
            条树洞
          </p>
          <p class="textAni hide">
            击败了
            <span class="font_2">XX%</span>
            的用户
          </p>
          <p class="textAni hide">2024年你刷到的第一条噗噗是</p>
        </div>
        <div
          class="mt-18 flex-col justify-center items-center self-stretch text-wrapper"
        >
          <span class="text textAni hide">（树洞）</span>
        </div>
      </div>
      <div class="mt-40 flex-col group_3">
        <img class="image self-center image-draw" src="/imgs/8/Vector.webp" />
        <div class="self-stretch group_4 content-block">
          <p class="textAni hide">
            你收藏了
            <span class="text_2"> 【年度收藏前🔟热帖】 </span>
          </p>
          <p class="textAni hide">爱看热闹的小姐姐/小哥哥一枚吖</p>
        </div>
      </div>
    </div>
    <img class="image_2 handshake-ani" src="/imgs/8/8.webp" />
    <ScrollUpHint v-if="showHint" />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const PAGE_NUMBER = 8;
const showHint = ref(false);

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
  // 先隐藏所有文本
  const texts = document.querySelectorAll(`.page${PAGE_NUMBER} .textAni`);
  texts.forEach((el) => el.classList.add("hide"));
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);

  // setTimeout(() => {
  //   // to skip this page since it is problematic
  //   appendNextPage(PAGE_NUMBER, true);
  // }, 500);
  // return;

  let time = 0;
  const delays = [200, 200, 600, 600, 600, 600, 600, 600]; // 与原本style中delay对应

  const textList = Array.from(
    document.querySelectorAll(`.page${PAGE_NUMBER} .textAni`)
  );
  textList.forEach((el, index) => {
    setTimeout(() => {
      el.classList.remove("hide");
    }, (time += delays[index] ?? 200));
  });

  // 所有文字出现后再append
  setTimeout(() => {
    showHint.value = true;
    appendNextPage(PAGE_NUMBER);
  }, time + 400);
}

onMounted(() => {
  init();
  onEnterViewportForFirstTime(PAGE_NUMBER, onShow);
});
</script>

<style scoped lang="css">
.textAni {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.mt-40 {
  margin-top: 2.5rem;
}

.textAni.hide {
  opacity: 0;
}

.textAni:not(.hide) {
  opacity: 1;
}
.handshake-ani {
  /* 起始时仅显示图片中线，且整体上移一些 */
  clip-path: inset(0 50% 0 50%);
  transform: translateY(-30px);
  animation: showHands 2s ease-out forwards;
}

@keyframes showHands {
  0% {
    clip-path: inset(0 50% 0 50%);
    transform: translateY(-30px);
  }
  100% {
    clip-path: inset(0 0 0 0);
    transform: translateY(0);
  }
}
.image-draw {
  /* 保持原有属性的同时，添加动画 */
  animation: drawEffect 2s linear forwards;
  /* 起始时将图片裁剪为 0，即看不到内容 */
  clip-path: inset(0 100% 0 0);
}

@keyframes drawEffect {
  to {
    /* 最终展示全部内容 */
    clip-path: inset(0 0 0 0);
  }
}
.flex-row {
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
}
.flex-col {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  gap: 0;
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
.page8 {
  padding-top: 4.88rem;
  background-color: #7cb6b2;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.group {
  padding: 0;
}

.group_2 {
  margin-left: 0.13rem;
}
.font_2 {
  font-size: var(--fs-figure);
  font-family: var(--ff-primary);
  line-height: 2.69rem;
  color: var(--clr-text);
}
.text-wrapper {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 3.75rem 0 4rem;
  background-color: #f9f5f0;
}

.text {
  color: #39372a;
  line-height: 1.19rem;
}

.group_3 {
  margin-top: 1rem;
}

.image {
  width: 16rem;
  height: 1.5rem;
}

.group_4 {
  text-align: center;
  margin-top: 1rem;
}

.text_2 {
  color: #facb98;
  font-size: 1.5rem;
  font-family: AaTangYuanTi;
  line-height: 1.81rem;
}

.group_5 {
  margin-top: -2.13rem;
  padding: 15.38rem 0 1.5rem;
}

.text_3 {
  color: #facb98;
  font-size: 1.25rem;
  font-family: Irish Grover;
  line-height: 1.16rem;
}

.image_2 {
  width: 134vw;
  height: 35vh;
}

.pos {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
