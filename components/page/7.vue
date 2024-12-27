<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="content-block">
      <p class="title figure hide">2024年</p>
      <div class="group">
        <p class="hide">{{ appName }}一共产生了<span class="figure">XX</span>条树洞</p>
        <p class="highlight hide">车水马龙、 人潮依旧</p>
      </div>
    </div>
    <div class="hotword-wrapper content-block">
      <p class="hide">今年{{ appName }}的年度热词是...</p>
      <p class="highlight hotword hide">XX</p>
      <p class="hide comment">根据热词写出来的文案放在这里XXX...</p>
      <img src="/imgs/7/hand.webp" alt="" class="hand hide" />
    </div>
    <ScrollUpHint v-show="shwoScrollUpHint" />
    <Footer style="--_clr-text: var(--clr-oragne)" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 7;
const { summary, appName } = useSummary();

const shwoScrollUpHint = ref(false);

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);

  let time = 0;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".title"]);
  }, (time += 1000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".group p:first-child"]);
  }, (time += 1000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".group .highlight"]);
  }, (time += 1000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".hotword-wrapper p:first-child"]);
  }, (time += 1500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".hand"]);
  }, (time += 1000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".hotword"]);
  }, (time += 500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".comment"]);
    shwoScrollUpHint.value = true;
    appendNextPage(PAGE_NUMBER);
  }, (time += 1000));
}

onMounted(() => {
  init();

  onEnterViewportForFirstTime(PAGE_NUMBER, onShow);
});
</script>

<style scoped>
.page7 {
  background-color: #7cb6b2;
  padding-top: 25%;
}
.highlight {
  color: var(--clr-oragne);
}
.hotword-wrapper {
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
}
.hotword {
  font-size: var(--fs-extra-large);
  transition: all 0.8s cubic-bezier(0.2, 0.1, 0.78, 1.44);
  margin-block: 0rem 1rem;
}
.hotword.hide {
  transform: translate(-100%);
}
.comment {
  max-width: 20ch;
  text-wrap: balance;
}
.hand {
  width: 80%;
  position: absolute;
  top: 40%;
  right: -40%;
  animation: hand 2s infinite;
  transition: all 0.8s cubic-bezier(0.2, 0.1, 0.78, 1.44);
}
.hand.hide {
  translate: 100% 0;
}
@keyframes hand {
  0% {
    transform: rotate(-5deg);
  }
  10% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  90% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}
</style>
