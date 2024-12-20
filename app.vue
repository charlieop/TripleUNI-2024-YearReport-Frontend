<template>
  <div class="app-wrapper">
    <NuxtRouteAnnouncer />
    <div class="app">
      <div class="overlay" v-if="!isScreenSizeOk">
        很抱歉,你的屏幕尺寸过小，无法正常显示本页面，请更换设备再尝试打开。
      </div>
      <Pages />
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  background-color: lightgray;

  display: flex;
  justify-content: center;
}

.app {
  background-color: yellow;
  width: var(--width);
  height: var(--height);
}
.overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 1.25rem;
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>

<script setup>
const isScreenSizeOk = ref(true);

onMounted(() => {
  if (window.innerWidth < 375 || window.innerHeight < 650) {
    isScreenSizeOk.value = false;
  }
});
</script>
