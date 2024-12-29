<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="content-block pt1">
      <div>
        <p class="hide">你在{{ appName }}浏览的内容</p>
        <p class="hide">总是涉及关键词...</p>
      </div>
      <p class="keyword hide">{{ summary?.user_frequent_view_keyword }}</p>
    </div>
    <img src="/imgs/9/hand.webp" alt="" class="hand" />
    <div class="content-block pt2">
      <p class="hide">你最常浏览的话题是...</p>
      <p class="keyword hide">{{ summary?.user_frequent_view_topic }}</p>
    </div>

    <ScrollUpHint style="filter: brightness(0.4)" v-show="shwoScrollUpHint" />
    <Footer style="--_clr-text: var(--clr-brown)" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 9;
const { summary, appName } = useSummary();

const shwoScrollUpHint = ref(false);

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);

  let time = 0;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div p:nth-child(1)"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div p:nth-child(2)"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 .keyword"]);
  }, (time += 300));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 p:nth-child(1)"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 .keyword"]);
  }, (time += 300));

  setTimeout(() => {
    const hand = document.querySelector(".page9 .hand");
    hand.style.animationPlayState = "running";
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
.page9 {
  background: linear-gradient(#7cb6b2 10%, #b3b697 44%, #eeb77a 91%);
  padding-block: calc(0.1 * var(--height));
}

.keyword {
  margin-top: -1rem;
  font-size: var(--fs-extra-large);
  transition: transform 0.5s cubic-bezier(0.59, 1.16, 0.56, 0.98), opacity 0.5s;
}
.keyword.hide {
  transform: translateY(-50%);
}
.pt1 .keyword {
  text-align: right;
}
.pt2 {
  color: var(--clr-brown);
}
.hand {
  max-width: unset;
  width: 170%;
  margin-block: -7rem -5rem;
  translate: -30% 0;
  animation: hand 5s forwards;
  animation-play-state: paused;
}

@keyframes hand {
  0% {
    transform: translate(-70%, 0);
  }
  33% {
    transform: translate(0%, 0);
  }
  50%,
  70% {
    transform: rotate(5deg) translate(0, 1rem);
  }
  60%,
  80% {
    transform: rotate(-5deg) translate(0, -1rem);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
