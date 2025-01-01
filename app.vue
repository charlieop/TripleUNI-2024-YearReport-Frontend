<template>
  <div class="app-wrapper">
    <NuxtRouteAnnouncer />
    <div class="app">
      <audio :src="$config.app.baseURL + 'audio/bgm.mp3'" id="bgm" loop></audio>
      <div class="overlay" v-if="!isScreenSizeOk && showWarning">
        很抱歉<br />
        你的屏幕尺寸过小<br />
        可能无法正常显示内容<br />
        推荐更换设备再尝试打开。
        <button @click="showWarning = false">我已知晓, 继续查看</button>
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
  background-color: var(--clr-brown);
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
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1000;
}
</style>

<script setup>
const isScreenSizeOk = ref(true);
const showWarning = ref(true);
const { fetchSummary } = useSummary();

onMounted(() => {
  if (window.innerWidth < 375 || window.innerHeight < 650) {
    isScreenSizeOk.value = false;
  }
  fetchSummary();
});
</script>
