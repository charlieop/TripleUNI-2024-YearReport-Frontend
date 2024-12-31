<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="content-block">
      <p class="large">这是2024年度总结的最后一页</p>
      <p class="large">在这里放GPT生成的文案 & 图片(如果有的话)</p>
    </div>
  </div>
</template>

<script setup>
const PAGE_NUMBER = 18;
const { summary, appName } = useSummary();

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);

  let time = 0;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(1)"]);
  }, (time += 700));
}

onMounted(() => {
  init();

  onEnterViewportForFirstTime(PAGE_NUMBER, onShow);
});
</script>

<style scoped>
.page18 {
  background: linear-gradient(
    0deg,
    #55804a 0%,
    #5e8556 17%,
    #96a19d 52%,
    #ddc5f7 93%
  );
  padding-top: calc(0.08 * var(--height));
}
</style>
