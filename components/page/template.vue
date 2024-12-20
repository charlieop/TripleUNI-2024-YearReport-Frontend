<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <h1>Page {{ PAGE_NUMBER }}</h1>
    <button @click="appendNextPage(PAGE_NUMBER, true)">Show Next Page</button>
  </div>
</template>

<script setup>
const PAGE_NUMBER = 1;

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
.page1 {
  background-color: lightblue;
}
</style>
