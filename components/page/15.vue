<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="content-block pt1" v-if="summary?.user_pm_count > 0">
      <p class="figure hide">今年</p>
      <p class="hide">
        你跟<span class="figure">{{ summary?.user_pm_user_count }}</span
        >个陌生人建立起联结
      </p>
      <p class="hide">
        总共发出了<span class="figure">{{ summary?.user_pm_count }}</span
        >条私信
      </p>
    </div>
    <div class="content-block pt1" v-else>
      <p class="figure hide">今年</p>
      <p class="hide">
        你在{{ appName }}开启了<span class="accent">隐身模式</span>
      </p>
      <p class="hide">
        一条私信也没有发过,<br />被确诊为<span class="accent"
          >线上<span class="figure">i</span>人</span
        >
      </p>
    </div>
    <div class="decor-img">
      <img
        src="https://i.boatonland.com/report2024/assets/imgs/15/bg.svg"
        alt=""
        class="bg"
      />
      <div class="ul">
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/15/ul-puzzle.webp"
          alt=""
          class="ul-puzzle decor hide"
        />
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/15/cat.webp"
          alt=""
          class="cat decor hide"
        />
      </div>

      <div class="ll">
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/15/ll-puzzle.webp"
          alt=""
          class="ll-puzzle decor hide"
        />
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/15/ll-person.webp"
          alt=""
          class="ll-person decor hide"
        />
      </div>
      <div class="ur">
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/15/ur-puzzle.webp"
          alt=""
          class="ur-puzzle decor hide"
        />
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/15/ur-person.webp"
          alt=""
          class="ur-person decor hide"
        />
      </div>
      <div class="lr">
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/15/lr-puzzle.webp"
          alt=""
          class="lr-puzzle decor hide"
        />
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/15/lr-person.webp"
          alt=""
          class="lr-person decor hide"
        />
      </div>
    </div>
    <div class="content-block pt2">
      <p class="hide" v-if="summary?.user_pm_count > 0">
        「点点星光，汇聚起无声的星河」
      </p>
      <p class="hide" v-else>答应{{ appName }}明年试试私信功能好吗？</p>
    </div>
    <ScrollUpHint v-show="shwoScrollUpHint" />
    <Footer style="--_clr-text: var(--clr-offwhite)" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 15;
const { summary, appName } = useSummary();

const shwoScrollUpHint = ref(false);

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);
  sendViewPageTracking(PAGE_NUMBER);

  let time = 0;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(1)"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(2)"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(3)"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".cat", ".ll-person", ".ur-person", ".lr-person"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".decor-img .decor"]);
  }, (time += 700));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 p"]);
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
.page15 {
  background-color: var(--clr-green);
  padding-top: calc(0.06 * var(--height));
}
@media (min-height: 830px) {
  .page15 {
    padding-top: calc(0.1 * var(--height));
  }
}
.content-block {
  text-align: center;
  gap: 0;
}
.decor-img {
  position: relative;
  width: 80%;
  margin: calc(0.06 * var(--height)) auto;
  animation: 55s bg-rotate infinite linear;
}
.bg {
  width: 100%;
  animation: 90s bg-rotate infinite linear reverse;
}
@keyframes bg-rotate {
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(90deg) scale(1.1);
  }
  50% {
    transform: rotate(180deg) scale(0.9);
  }
  75% {
    transform: rotate(270deg) scale(1.1);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

.decor {
  top: 3%;
  left: 5%;
}

.cat,
.ul-puzzle {
  animation: ul 2s infinite alternate;
}
@keyframes ul {
  0% {
    transform: translate(0.65rem, 0.65rem);
  }
  100% {
    transform: translate(-0.65rem, -0.65rem);
  }
}

.ll-person,
.ll-puzzle {
  animation: ll 2.25s infinite alternate;
}
@keyframes ll {
  0% {
    transform: translate(0.65rem, -0.65rem);
  }
  100% {
    transform: translate(-0.65rem, 0.65rem);
  }
}

.ur-person,
.ur-puzzle {
  animation: ur 2.5s 1s infinite alternate;
}
@keyframes ur {
  0% {
    transform: translate(-0.65rem, 0.65rem);
  }
  100% {
    transform: translate(0.65rem, -0.65rem);
  }
}

.lr-person,
.lr-puzzle {
  animation: lr 1.75s 0.5s infinite alternate;
}
@keyframes lr {
  0% {
    transform: translate(-0.65rem, -0.65rem);
  }
  100% {
    transform: translate(0.65rem, 0.65rem);
  }
}
</style>
