<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="content">
      <div class="content-block">
        <p class="greeting" :class="{ hide: hide }">
          <span>{{ summary?.user_serial }}</span>
          <span>, <span class="figure">新年好</span>!</span>
        </p>
        <ul class="text-list">
          <li class="pt1 hide">
            <p>时钟滴答滴答，</p>
            <p>突然听见整点的钟。</p>
          </li>
          <li class="pt2 hide">
            <p>眼前一闪而过，</p>
            <p>那是春夏秋冬。</p>
          </li>
          <li class="pt3 hide">
            <p>花园里做着梦，</p>
            <p>自由的爱丽丝，</p>
            <p>这是我们的兔子洞——</p>
          </li>
        </ul>
        <div class="hide final">
          <p>让我们一起来看看<span class="greeting">2024</span>的</p>
          <p>&nbsp;<span class="figure">「年度总结」</span>吧!</p>
        </div>
      </div>
      <div class="image">
        <div class="images-wrapper">
          <img
            src="https://i.boatonland.com/report2024/assets/imgs/2/background.webp"
            alt=""
            class="base"
            :class="{ hide: hide }"
          />
          <div class="hour-hand clock-hand hide"></div>
          <div class="minute-hand clock-hand hide"></div>
          <img
            src="https://i.boatonland.com/report2024/assets/imgs/2/grass.webp"
            alt=""
            class="decor grass hide"
          />
          <img
            src="https://i.boatonland.com/report2024/assets/imgs/2/clock.webp"
            alt=""
            class="decor clock hide"
          />
          <img
            src="https://i.boatonland.com/report2024/assets/imgs/2/ground.svg"
            alt=""
            class="decor ground hide"
          />
          <img
            src="https://i.boatonland.com/report2024/assets/imgs/2/rabbit.svg"
            alt=""
            class="decor rabbit hide"
          />
        </div>
      </div>
    </div>
    <ScrollUpHint v-if="showHint" />
    <Footer :class="{ hide: hide }" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 2;
const { summary, appName } = useSummary();

const hide = ref(true);
const showHint = ref(false);

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);
  sendViewPageTracking(PAGE_NUMBER);

  let time = 0;
  setTimeout(() => {
    hide.value = false;
    const hour = document.querySelector(".page2 .clock-hand.hour-hand");
    const minute = document.querySelector(".page2 .clock-hand.minute-hand");
    hour.style.animationPlayState = "running";
    minute.style.animationPlayState = "running";
  }, (time += 500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [
      "li.pt1.hide",
      "img.clock.hide",
      ".clock-hand.hide",
    ]);
  }, (time += 1000));
  setTimeout(() => {
    const pt1 = document.querySelector(".page2 li.pt1");
    pt1.classList.add("hide");
  }, (time += 2000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, ["li.pt2.hide", "img.grass.hide"]);
  }, (time += 1000));
  setTimeout(() => {
    const hour = document.querySelector(".page2 .clock-hand.hour-hand");
    const minute = document.querySelector(".page2 .clock-hand.minute-hand");
    hour.style.animationPlayState = "paused";
    minute.style.animationPlayState = "paused";
    hour.classList.add("hide");
    minute.classList.add("hide");
    const pt2 = document.querySelector(".page2 li.pt2");
    pt2.classList.add("hide");
  }, (time += 1683));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, ["li.pt3.hide", "img.ground.hide"]);
  }, (time += 1000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".final", "img.rabbit.hide"]);
  }, (time += 1000));
  setTimeout(() => {
    showHint.value = true;
    appendNextPage(PAGE_NUMBER);
  }, (time += 500));
}

onMounted(() => {
  init();

  onEnterViewportForFirstTime(PAGE_NUMBER, onShow);
});
</script>

<style scoped>
.page2 {
  background-color: var(--clr-green);
}

.page2 .content {
  height: var(--height);
  width: var(--width);
  display: grid;
  grid-template-rows: 2fr 3fr;
  gap: 1rem;
  padding-block: 3rem 6rem;
}

.greeting {
  font-size: var(--fs-accent);
}
.figure {
  color: var(--clr-oragne);
}

.text-list {
  position: relative;
}
.pt1,
.pt2 {
  position: absolute;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.images-wrapper {
  position: relative;
}

.base {
  width: calc(0.8 * var(--width));
}
.decor {
  position: absolute;
  top: 0;
  left: 0;
}
.grass {
  overflow: hidden;
  overflow: clip;
  scale: 1.08;
}
.grass.hide {
  transform: scale(1.45);
}
.clock {
  top: -2%;
  scale: 0.9;
}
.clock.hide {
  transform: rotate(-45deg) scale(0);
}
.ground {
  top: unset;
  bottom: -6%;
  transform-origin: bottom;
}
.ground.hide {
  transform: scaleY(0);
}
.rabbit {
  width: 40%;
  top: unset;
  bottom: 0;
  left: 55%;
  translate: -50% 0;
  transform-origin: bottom;
}

.rabbit.hide {
  transform: rotateX(90deg);
}
.clock-hand {
  --_threshold: 0.25;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: var(--clr-green);
  transform-origin: calc(var(--_length) * (1 - var(--_threshold))) center;
  border-radius: 60% 30% 30% 60%;
  transition: all 1.5s ease-in;
}
.hour-hand {
  --_length: 4rem;
  --_start-at: 30deg;
  width: var(--_length);
  height: 1rem;
  transform: translate(-50%, -50%)
    translateX(calc(-1 * var(--_threshold) * var(--_length)));
  filter: brightness(0.8);
  animation: clock-rotate 24s infinite steps(12);
  animation-play-state: paused;
}
.minute-hand {
  --_length: 6rem;
  --_start-at: 90deg;
  width: var(--_length);
  height: 0.75rem;
  transform: translate(-50%, -50%)
    translateX(calc(-1 * var(--_threshold) * var(--_length)));
  animation: clock-rotate 2s infinite linear;
  animation-play-state: paused;
}
@keyframes clock-rotate {
  0% {
    transform: translate(-50%, -50%)
      translateX(calc(-1 * var(--_threshold) * var(--_length)))
      rotate(var(--_start-at));
  }
  100% {
    transform: translate(-50%, -50%)
      translateX(calc(-1 * var(--_threshold) * var(--_length)))
      rotate(calc(var(--_start-at) + 360deg));
  }
}
</style>
