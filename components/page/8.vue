<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    
  </div>
</template>

<script setup>
const PAGE_NUMBER = 8;

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
.page8 {
  background-color: darkcyan;
}
</style>
