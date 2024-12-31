<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="content-block pt1">
      <div class="figure title hide">
        <img src="/imgs/11/bg1.svg" alt="" class="bg" />
        <span>今年</span>
      </div>
      <p class="hide">
        你一共发布了<span class="figure">{{ summary?.user_post_count }}</span
        >条树洞
      </p>
      <p class="hide">
        打败了<span class="figure"
          >{{
            summary?.user_post_count_percentage
          }}%</span
        >的用户
      </p>
    </div>
    <div class="decor-img">
      <img src="/imgs/11/bg.webp" alt="" class="decor bg-img hide" />
      <img src="/imgs/11/stars.webp" alt="" class="decor stars hide" />
      <img src="/imgs/11/satellite.webp" alt="" class="decor satellite hide" />
      <img src="/imgs/11/sm-planet.webp" alt="" class="decor sm-planet hide" />
      <img src="/imgs/11/lg-planet.webp" alt="" class="decor lg-planet hide" />
      <img
        src="/imgs/11/white-planet.webp"
        alt=""
        class="decor white-planet hide"
      />
      <img src="/imgs/11/lines.webp" alt="" class="lines" />
    </div>
    <div class="content-block pt2">
      <div class="figure title hide">
        <img src="/imgs/11/bg2.svg" alt="" class="bg" />
        <span> 与去年相比 </span>
      </div>
      <p class="hide">
        <template v-if="summary?.user_post_count_diff > 0">
          你多发布了<span class="figure">{{
            summary?.user_post_count_diff
          }}</span
          >条
        </template>
        <template v-else-if="summary?.user_post_count_diff < 0">
          你少发布了<span class="figure">{{
            -summary?.user_post_count_diff
          }}</span
          >条
        </template>
        <template v-else> 你的发布数量与去年持平 </template>
      </p>
      <p class="hide">
        <template v-if="summary?.user_post_count_diff > 0">
          {{ appName }}已经感受到你旺盛的分享欲了!
        </template>
        <template v-else-if="summary?.user_post_count_diff < 0">
          希望是生活中有人成为了你的树洞叭!
        </template>
        <template v-else> 你的分享欲望保持稳定呢! </template>
      </p>
    </div>

    <ScrollUpHint style="filter: brightness(0.4)" v-show="shwoScrollUpHint" />
    <Footer style="--_clr-text: var(--clr-brown)" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 11;
const { summary, appName } = useSummary();

const shwoScrollUpHint = ref(false);

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);

  let time = 0;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 .title", ".bg-img"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(2)", ".white-planet"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(3)", ".sm-planet"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".lg-planet", ".satellite"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 .title", ".stars"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 p:nth-child(2)"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 p:nth-child(3)"]);
  }, (time += 300));

  setTimeout(() => {
    shwoScrollUpHint.value = true;
    appendNextPage(PAGE_NUMBER);
  }, (time += 300));
}

onMounted(() => {
  init();

  onEnterViewportForFirstTime(PAGE_NUMBER, onShow);
});
</script>

<style scoped>
.page11 {
  background-color: #eeb77a;
  padding-top: calc(0.05 * var(--height));
}
@media (min-height: 790px) {
  .page11 {
    background-color: #eeb77a;
    padding-top: calc(0.08 * var(--height));
  }
}

.content-block {
  color: var(--clr-brown);
  text-align: center;
}
.title {
  position: relative;
}
.title span {
  position: relative;
}
.bg {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.decor-img {
  position: relative;
  margin-block: 1.25rem;
  margin-left: 2rem;
  width: 85%;
}
.decor {
  top: 0;
  left: 0;
  width: 100%;
}
.decor.hide {
  transform: none;
}
.lines {
  position: relative;
  width: 100%;
}
.satellite {
  animation: satellite-rotate 10s linear infinite;
}
@keyframes satellite-rotate {
  100% {
    transform: rotate3d(-0.25, 0, 0, 360deg);
  }
}
.stars {
  animation: stars-scale 10s linear infinite;
}
@keyframes stars-scale {
  0% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0.95);
  }
}
.bg-img {
  animation: bg-img-shine 7s linear infinite;
}
@keyframes bg-img-shine {
  30%,
  70% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.1);
  }
}
.sm-planet {
  animation: planet-move 15s linear infinite;
}
.lg-planet {
  animation: planet-move 20s linear infinite;
}

@keyframes planet-move {
  0%,
  100% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(-0.2rem, -0.2rem);
  }
  40% {
    transform: translate(0.2rem, 0.2rem);
  }
  60% {
    transform: translate(-0.2rem, 0.2rem);
  }
  80% {
    transform: translate(0.2rem, -0.2rem);
  }
}
</style>
