<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="content-block pt1">
      <p class="figure hide">今年</p>
      <p class="hide">
        你在{{ appName }}总共搜索了<span class="figure">{{
          summary?.user_search_count
        }}</span
        >次
      </p>
    </div>
    <div class="content-block pt2">
      <p class="hide">搜索高频词是</p>
      <div class="searchbar">
        <span class="search-content">{{ searchContent }}&nbsp;</span>
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/16/hamburger.webp"
          alt=""
          class="decor hamburger"
        />
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/16/magnifier.webp"
          alt=""
          class="decor magnifier"
        />
      </div>
      <p class="hide">「你得到你想要的答案了吗?」</p>
    </div>
    <div
      class="content-block pt3"
      v-if="summary?.user_frequent_search_keyword_user_count > 0"
    >
      <p class="hide">其实不只是你</p>
      <p class="hide">
        有<span class="figure">{{
          summary?.user_frequent_search_keyword_user_count
        }}</span
        >人也和你一样搜索了
      </p>
      <p class="hide">
        <span class="figure"
          >【{{ summary?.user_frequent_search_keyword }}】</span
        >的内容呢!
      </p>
    </div>
    <div class="content-block pt3" v-else>
      <p class="hide">真奇怪</p>
      <p class="hide">全{{ appName }}只有你一个人搜索了</p>
      <p class="hide">
        <span class="figure"
          >【{{ summary?.user_frequent_search_keyword }}】</span
        >的内容呢!
      </p>
    </div>
    <div class="decor-img">
      <img
        src="https://i.boatonland.com/report2024/assets/imgs/16/bg.svg"
        alt=""
        class="bg"
      />
      <img
        src="https://i.boatonland.com/report2024/assets/imgs/16/star.svg"
        alt=""
        class="star"
      />
    </div>
    <ScrollUpHint v-show="shwoScrollUpHint" />
    <Footer style="--_clr-text: var(--clr-offwhite)" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 16;
const { summary, appName } = useSummary();

const TIME_TO_TYPE = 250;
const shwoScrollUpHint = ref(false);

const searchedWord = summary.value?.user_frequent_search_keyword || "";
const searchContent = ref("");

function showSearched() {
  let time = 0;
  searchedWord.split("").forEach((char, index) => {
    setTimeout(() => {
      searchContent.value += char;
    }, (time += TIME_TO_TYPE));
  });
}

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
    unhideAll(PAGE_NUMBER, [".pt2 > p:nth-child(1)"]);
  }, (time += 700));
  setTimeout(() => {
    showSearched();
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 > p:nth-child(3)"]);
  }, (time += 500 + TIME_TO_TYPE * searchedWord.length));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 > p:nth-child(1)"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 > p:nth-child(2)"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 > p:nth-child(3)"]);
  }, (time += 700));

  setTimeout(() => {
    shwoScrollUpHint.value = true;
    appendNextPage(PAGE_NUMBER);
  }, (time += 700));
}

onMounted(() => {
  init();

  onEnterViewportForFirstTime(PAGE_NUMBER, onShow);
});
</script>

<style scoped>
.page16 {
  background-color: var(--clr-green);
  padding-top: calc(0.05 * var(--height));
}
.content-block {
  text-align: center;
  margin-bottom: calc(0.05 * var(--height));
}
.pt2 {
  gap: 0.75rem;
}
.decor-img {
  position: absolute;
  bottom: 0%;
  right: 5%;
  animation: move 3s infinite linear;
}
.star {
  position: absolute;
  width: 10rem;
  top: -22%;
  left: 3%;
  animation: shine 5s infinite linear;
}
@keyframes shine {
  30%,
  70% {
    filter: none;
  }
  50% {
    filter: brightness(1.2);
  }
}
@keyframes move {
  0% {
    transform: rotate(0deg) translate(0.5rem) rotate(0deg);
  }
  50% {
    transform: rotate(-180deg) translate(0.5rem) rotate(180deg);
  }
  100% {
    transform: rotate(-360deg) translate(0.5rem) rotate(360deg);
  }
}
@media (min-height: 750px) {
  .page16 {
    background-color: var(--clr-green);
    padding-top: calc(0.08 * var(--height));
  }
  .decor-img {
    bottom: 5%;
  }
}

.searchbar {
  position: relative;
  color: var(--clr-brown);
  border-radius: 999rem;
  background-color: var(--clr-offwhite);
  padding: 0.835rem 3.5rem;
  text-align: left;
  font-size: 24px;
  font-family: monospace;
}
.decor {
  height: 100%;
  top: 0;
}
.hamburger {
  left: 0.125rem;
}
.magnifier {
  right: 0.125rem;
}
.search-content {
  display: inline-block;
  position: relative;
  height: 33px;
  line-height: 33px;
}
.search-content::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0.85ch;
  translate: 1px -50%;
  width: 2px;
  height: 30px;
  background-color: var(--clr-brown);
  margin-left: 0.5rem;
  animation: blink 1.5s infinite;
}
@keyframes blink {
  0%,
  100%,
  60%,
  80% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
