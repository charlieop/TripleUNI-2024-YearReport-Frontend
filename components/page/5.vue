<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <h1>Page {{ PAGE_NUMBER }}</h1>
    <br />
    <button @click="appendNextPage(PAGE_NUMBER, true)">Show Next Page</button>
    <br />
    <p>
      It is normal if u see yellow background, it is an intention design to help
      spot abnormaliies. This should be channged in the public version.
    </p>
    <button @click="appendNextPage(PAGE_NUMBER)" class="bottom">
      Show Next Page
    </button>
  </div>
  
</template>

<script setup>
const PAGE_NUMBER = 5;

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
.page5 {
  background-color: darksalmon;
}
</style>
