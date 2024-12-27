<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <img src="/imgs/13/blast.svg" alt="" class="blast hide" />
    <div class="content-block pt1">
      <template v-if="summary?.user_frequent_view_keyword != ''">
        <p class="hide">你所发布的树洞中</p>
        <p class="hide"><span class="figure">最高频</span>出现的词是</p>
      </template>
      <template v-else>
        <p class="hide">你今年似乎没有发布过树洞</p>
        <p class="hide">静默如谜</p>
      </template>
    </div>
    <div class="word-wrapper">
      <p class="word hide">
        “{{
          summary?.user_frequent_view_keyword != ""
            ? summary?.user_frequent_view_keyword
            : "空!"
        }}”
      </p>
    </div>
    <div class="content-block pt2">
      <p class="hide" v-if="summary?.user_frequent_view_keyword != ''">
        它是否是你许多纷飞思绪的源头呢?
      </p>
      <p class="hide" v-else>你是否有很多不愿分享的心绪呢？</p>
    </div>
    <ScrollUpHint style="filter: brightness(0.4)" v-show="shwoScrollUpHint" />
    <Footer style="--_clr-text: var(--clr-brown)" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 13;
const { summary, appName } = useSummary();

const shwoScrollUpHint = ref(false);

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);

  let time = -99990;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(1)"]);
  }, (time += 1000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(2)"]);
  }, (time += 500));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".word", ".blast"]);
  }, (time += 1000));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 p"]);
  }, (time += 1500));
  setTimeout(() => {
    shwoScrollUpHint.value = true;
    appendNextPage(PAGE_NUMBER);
  }, (time += 500));
}

onMounted(() => {
  init();

  onEnterViewportForFirstTime(PAGE_NUMBER, onShow);
});
</script>

<style scoped>
.page13 {
  background-color: var(--clr-purplr);
  padding-top: calc(0.22 * var(--height));
}

.blast {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 120%;
  max-width: unset;
  transition: all 0.7s cubic-bezier(0.66, 0.22, 0.69, 2.02);
}
.blast.hide,
.word.hide {
  opacity: 0;
  scale: 0;
  transform: none;
}

.content-block {
  position: relative;
  color: var(--clr-brown);
  text-align: center;
}
.word-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  color: var(--clr-green);
  font-size: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.word {
  position: relative;
  text-align: center;
  min-width: unset;
  transition: all 0.7s cubic-bezier(0.66, 0.22, 0.69, 2.02);
}
.pt2 {
  padding-top: calc(0.35 * var(--height));
}
</style>
