<template>
  <div class="pages-wrapper" id="pages-wrapper">
    <template v-for="(page, index) in Object.keys(PAGES)" :key="page">
      <component :is="PAGES[page]" v-if="index < showUpTo" />
    </template>
  </div>
</template>

<script setup></script>

<style scoped>
.pages-wrapper {
  height: var(--height);
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: clip;
  position: relative;
}
</style>
