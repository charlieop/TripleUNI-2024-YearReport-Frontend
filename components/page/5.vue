<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <h1>Page {{ PAGE_NUMBER }}</h1>
    <br />
    <p>NOT DONE, going to the next page in 2 second...</p>
  </div>
</template>

<script setup>
const PAGE_NUMBER = 5;

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);

  setTimeout(() => {
    appendNextPage(PAGE_NUMBER, true);
  }, 2000);
}

onMounted(() => {
  init();

  onEnterViewportForFirstTime(PAGE_NUMBER, onShow);
});
</script>

<style scoped>
.page5 {
  background-color: darksalmon;
}
</style>
