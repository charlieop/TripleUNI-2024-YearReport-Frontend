<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <h1>Page {{ PAGE_NUMBER }}</h1>
    <br />
    <p>this is a long page</p>
    <br />
    <p>
      this page will not auto scroll to the next page after you click the
      button, you have to drag it yourself
    </p>
    <button @click="appendNextPage(PAGE_NUMBER)" class="bottom">
      Show Next Page
    </button>
  </div>
</template>

<script setup>
const PAGE_NUMBER = 4;

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
.page4 {
  background-color: lightcoral;
  height: 200vh;
}
.page4 .bottom {
  position: absolute;
  bottom: 10rem;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: white;
  border-top: 1px solid black;
  text-align: center;
}
</style>
