<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="content-block pt1">
      <div class="figure title hide">
        <img src="/imgs/11/bg1.svg" alt="" class="bg" />
        <span>今年</span>
      </div>
      <p class="hide">你一共发布了<span class="figure">XX</span>条树洞</p>
      <p class="hide">打败了<span class="figure">XX%</span>的用户</p>
    </div>
    <div class="decor-img">
      <img src="/imgs/11/stars.webp" alt="" class="stars" />
    </div>
    <div class="content-block pt2">
      <div class="figure title hide">
        <img src="/imgs/11/bg2.svg" alt="" class="bg" />
        <span> 与去年相比 </span>
      </div>
      <p class="hide">你多发布了<span class="figure">XX</span>条</p>
      <p class="hide">XX已经感受到你旺盛的分享欲了!XX</p>
    </div>

    <ScrollUpHint style="filter: brightness(0)" v-show="shwoScrollUpHint" />
    <Footer style="--_clr-text: var(--clr-brown)" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 11;
const shwoScrollUpHint = ref(false);

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);

  let time = 0;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 .title"]);
  }, (time += 1000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(2)"]);
  }, (time += 500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(3)"]);
  }, (time += 500));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 .title"]);
  }, (time += 1500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 p:nth-child(2)"]);
  }, (time += 500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 p:nth-child(3)"]);
  }, (time += 500));

  setTimeout(() => {
    shwoScrollUpHint.value = true;
    appendNextPage(PAGE_NUMBER);
  }, (time += 500));
}

onMounted(() => {
  init();

  onEnterViewportForFirstTime(PAGE_NUMBER, onShow);
});
</script>

<style scoped>
.page11 {
  background-color: #eeb77a;
  padding-top: calc(0.05 * var(--height));
}
.content-block {
  color: var(--clr-brown);
  text-align: center;
  gap: 0.5rem;
}
.title {
  position: relative;
}
.title span {
  position: relative;
}
.bg {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.decor-img {
  margin-block: -2.5rem;
}
.stars {
  width: 80%;
  margin-left: 5%;
}
</style>
