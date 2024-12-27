<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="content-block pt1">
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
    <div class="decor-img">
      <img src="/imgs/15/bg.svg" alt="" class="bg" />
      <img src="/imgs/15/team.webp" alt="" class="team decor hide" />
    </div>
    <div class="content-block pt2">
      <p class="hide" v-if="summary?.user_pm_count > 0">
        「点点星光，汇聚起无声的星河」
      </p>
      <p class="hide" v-else>来年, 要不要试试私信?</p>
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

  let time = -99990;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(1)"]);
  }, (time += 1000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(2)"]);
  }, (time += 500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(3)"]);
  }, (time += 500));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".decor-img .team"]);
  }, (time += 1000));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 p"]);
  }, (time += 1000));
  setTimeout(() => {
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
  margin-block: calc(0.06 * var(--height));
}
.bg {
  width: 80%;
  margin-inline: auto;
  display: block;
}
.team {
  width: 95%;
  top: -8%;
  left: 5%;
}
</style>
