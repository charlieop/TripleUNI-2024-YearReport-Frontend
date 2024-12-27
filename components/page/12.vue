<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <img src="/imgs/12/eye1.svg" alt="" class="eye1 decor" />
    <img src="/imgs/12/eye2.svg" alt="" class="eye2 decor" />

    <div class="content-block pt1">
      <p>那些被你掌握</p>
      <div class="figure title hide">
        <img src="/imgs/12/bg.svg" alt="" class="bg" />
        <span>流量密码</span>
      </div>
      <p class="hide">的树洞们</p>
      <p class="hide">——</p>
    </div>
    <div class="content-block pt2">
      <p class="hide figure">阅读量</p>
      <p class="hide">
        <span class="accent">最高</span> 达到了<span class="figure">XXXX</span
        >次
      </p>
      <p class="hide post-id">#XXXXXX</p>
    </div>
    <div class="content-block pt3">
      <p class="hide figure">评论数</p>
      <p class="hide">
        <span class="accent">最高</span> 达到了<span class="figure">XXXX</span
        >条
      </p>
      <p class="hide post-id">#XXXXXX</p>
    </div>
    <div class="content-block pt4">
      <p class="hide figure">围观数</p>
      <p class="hide">
        <span class="accent">最高</span> 达到了<span class="figure">XXXX</span
        >次
      </p>
      <p class="hide post-id">#XXXXXX</p>
    </div>

    <ScrollUpHint style="filter: brightness(0.4)" v-show="shwoScrollUpHint" />
    <Footer style="--_clr-text: var(--clr-brown)" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 12;
const { summary, appName } = useSummary();

const shwoScrollUpHint = ref(false);

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);

  let time = -99990;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 .title"]);
  }, (time += 1000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(2)"]);
  }, (time += 500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(3)"]);
  }, (time += 500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(4)"]);
  }, (time += 500));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 p:nth-child(1)"]);
  }, (time += 1500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 p:nth-child(2)"]);
  }, (time += 500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 p:nth-child(3)"]);
  }, (time += 500));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 p:nth-child(1)"]);
  }, (time += 1500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 p:nth-child(2)"]);
  }, (time += 500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 p:nth-child(3)"]);
  }, (time += 500));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt4 p:nth-child(1)"]);
  }, (time += 1500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt4 p:nth-child(2)"]);
  }, (time += 500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt4 p:nth-child(3)"]);
  }, (time += 500));

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
.page12 {
  background-color: var(--clr-purplr);
  padding-top: calc(0.07 * var(--height));
}
.content-block {
  color: var(--clr-brown);
  text-align: center;
  gap: 0.25rem;
  padding-bottom: calc(0.03 * var(--height));
}
@media (min-height: 860px) {
  .content-block {
    padding-bottom: calc(0.05 * var(--height));
  }
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
.post-id {
  color: var(--clr-green);
}
.eye1 {
  width: 40%;
  bottom: 5%;
  right: 1%;
  animation: eye1 2s infinite;
}
@keyframes eye1 {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0.75rem);
  }
  100% {
    transform: translateY(0);
  }
}

.eye2 {
  width: 40%;
  top: 2%;
  left: 3%;
  animation: eye2 2s infinite;
}
@keyframes eye2 {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(0.75rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
