<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <p class="figure">感谢你观看</p>
    <p class="large">2024{{ appName }}年度总结</p>
    <p class="accent">祝你新的一年万事如意, 身体健康</p>
    <p class="accent">让我们明年再见!</p>
    <Footer />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 19;
const { summary, appName } = useSummary();

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);
}

onMounted(() => {
  init();

  onEnterViewportForFirstTime(PAGE_NUMBER, onShow);
});
</script>

<style scoped>
.page19 {
  background: var(--clr-brown);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 1rem;
  text-align: center;
  gap: 2rem;
}

.large {
  font-size: var(--fs-large);
}
</style>
