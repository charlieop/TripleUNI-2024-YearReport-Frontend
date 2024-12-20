<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <h1>Page {{ PAGE_NUMBER }}</h1>
    <br />
    <p>this is a single fixed height page</p>
    <br />
    <p>click the button and it will auto scroll to the next page</p>
    <br />
    <button @click="appendNextPage(PAGE_NUMBER, true)">Show Next Page</button>
  </div>
</template>

<script setup>
const PAGE_NUMBER = 3;

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
.page3 {
  background-color: dodgerblue;
}
</style>
