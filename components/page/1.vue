<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="loading-overlay" v-if="!isLoaded && showLoading">
      <div class="loading-spinner"></div>
      <p>正在布置爱丽丝的兔子洞<span class="loading-animation">...</span></p>
    </div>
    <div class="content">
      <div>
        <div class="dome" :class="{ 'hide-decor': start }">
          <img src="/imgs/1/dome.webp" alt="" class="frame" />

          <img src="/imgs/1/UST.webp" alt="" class="decor ust" />
          <img src="/imgs/1/HKU.webp" alt="" class="decor hku" />
          <img src="/imgs/1/CU.webp" alt="" class="decor cu" />

          <img src="/imgs/1/comet.webp" alt="" class="decor comet" />
          <img src="/imgs/1/stars-1.svg" alt="" class="decor stars stars-1" />
          <img src="/imgs/1/stars-2.svg" alt="" class="decor stars stars-2" />
          <img src="/imgs/1/light.svg" alt="" class="decor light" />
        </div>
      </div>
      <div>
        <div class="start-button" @click="handelStart">
          立即开始
          <p class="home-footer" v-show="!start">
            点击即代表您同意我们的隐私政策
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const PAGE_NUMBER = 1;
const { summary } = useSummary();
const isLoaded = computed(() => summary.value != undefined);
const showLoading = ref(false);

const start = ref(false);
let runned = false;

watch(isLoaded, (newVal) => {
  if (newVal && showLoading.value) {
    handelStart();
  }
});

function handelStart() {
  if (!isLoaded.value) {
    showLoading.value = true;
    return;
  }
  if (!runned) {
    start.value = true;
    runned = true;
    setTimeout(() => {
      start.value = false;
    }, 5000);

    setTimeout(() => {
      appendNextPage(1, true);
    }, 3000);
  } else {
    appendNextPage(1, true);
  }
}

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
.loading-overlay {
  position: fixed;
  inset: 0;
  background-color: #000000cc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
  gap: 1rem;
}

.loading-animation {
  clip-path: inset(0 100% 0 0);
  animation: l1 2s steps(4) infinite;
}
@keyframes l1 {
  to {
    clip-path: inset(0 -34% 0 0);
  }
}

.loading-spinner {
  width: calc(6 * 30px);
  height: 50px;
  display: flex;
  color: var(--clr-oragne);
  filter: drop-shadow(30px 25px 0 currentColor)
    drop-shadow(60px 0 0 currentColor) drop-shadow(120px 0 0 currentColor);
  clip-path: inset(0 100% 0 0);
  animation: l12 2s infinite steps(7);
}
.loading-spinner:before {
  content: "";
  width: 30px;
  height: 25px;
  --c: no-repeat radial-gradient(farthest-side, currentColor 92%, #0000);
  background: var(--c) left / 70% 70%, var(--c) right/20% 20%,
    var(--c) top 0 right 15%/20% 20%, var(--c) bottom 0 right 15%/20% 20%;
}
@keyframes l12 {
  100% {
    clip-path: inset(0 -30px 0 0);
  }
}

.page1 {
  background-color: var(--clr-offwhite);
}
@media (min-height: 860px) {
  .page1 {
    padding-top: calc(0.04 * var(--height));
  }
}
.page1 .content {
  display: grid;
  grid-template-rows: 1fr auto;
  place-items: center;
  gap: 2svh;
  padding-top: 10svh;

  transition: transform 3s ease-in-out;
}

.content:has(.hide-decor) {
  transform: translate3d(-40%, 50%, 0) scale3D(5.5, 5.5, 5.5);
}

.hide-decor .decor {
  animation: fade-out 1s forwards;
  animation-delay: 1.5s;
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.dome {
  position: relative;
}
.frame {
  width: calc(var(--width) * 0.8);
  max-height: calc(0.7 * var(--height));
}
.hku {
  width: 43%;
  top: -14%;
  left: 47%;
  animation: school-label-shake 2s infinite alternate ease-in-out;
  animation-delay: 0.5s;
}
.cu {
  width: 45%;
  top: -2%;
  left: 75%;
  animation: school-label-shake 3s infinite alternate ease-in-out;
}
.ust {
  width: 50%;
  bottom: -2%;
  left: -10%;
  animation: school-label-shake 2s infinite alternate ease-in-out;
}
@keyframes school-label-shake {
  0% {
    transform: rotate(-4deg);
  }
  100% {
    transform: rotate(4deg);
  }
}

.light {
  width: 50%;
  top: 17%;
  left: 20%;
  animation: light-move 7s infinite alternate-reverse ease-in-out;
}
@keyframes light-move {
  0% {
    transform: translate3d(0, -0.4rem, 0);
  }
  100% {
    transform: translate3d(0, 0.2rem, 0);
  }
}
.stars {
  width: 30%;
  top: 18%;
  left: 48%;
}
.stars-1 {
  animation: stars-shine 5s infinite ease-in-out;
}
.stars-2 {
  animation: stars-shine 7s infinite ease-in-out;
  animation-delay: 1s;
}
@keyframes stars-shine {
  0% {
    opacity: 0.5;
    filter: brightness(0.9);
  }
  50% {
    opacity: 1;
    filter: brightness(1.3);
    transform: scale3D(1.1, 1.1, 1.1);
  }
  100% {
    opacity: 0.5;
    filter: brightness(0.9);
  }
}
.comet {
  width: 15%;
  top: 33%;
  left: 59%;
  animation: comet-move 5s infinite linear;
}
@keyframes comet-move {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
    transform: translate3D(-5rem, -6.5rem, 0);
  }
  30% {
    opacity: 1;
    filter: none;
  }
  50% {
    filter: brightness(1.5);
  }
  65% {
    filter: brightness(1.5);
  }
  70% {
    opacity: 1;
    filter: none;
  }
  80% {
    opacity: 0;
    transform: translate3D(1rem, 1rem, 0);
  }
  100% {
    opacity: 0;
  }
}

.start-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--clr-brown);
  border: none;
  font-size: var(--fs-large);
  border-radius: 50%;
  width: calc(0.8 * var(--width));
  aspect-ratio: 3.3 / 1;
  color: var(--clr-offwhite);
  /* -webkit-text-stroke: 1.3px var(--clr-black); */
  text-shadow: 2px 2px 0 color-mix(in lab, var(--clr-purplr), var(--clr-brown));
  transition: all 0.1s ease-in-out;
}
.start-button:active {
  scale: 0.95;
  text-shadow: 1px 1px 0 var(--clr-purplr);
}
.start-button::before {
  content: "";
  opacity: 0.5;
  position: absolute;
  background-color: var(--clr-brown);
  width: 80%;
  height: 1px;
  bottom: -0.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: line-move 5s infinite alternate ease-in-out;
}
@keyframes line-move {
  0% {
    width: 20%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 20%;
  }
}
.home-footer {
  position: absolute;
  bottom: -1.5rem;
  width: 100%;
  text-shadow: none;
  text-align: center;
  font-size: 0.5rem;
  color: var(--clr-purplr);
}
</style>
