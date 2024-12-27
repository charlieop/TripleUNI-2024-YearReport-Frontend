<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="content-block" v-if="summary?.user_frequent_emoji?.length > 0">
      <p class="figure hide">不知为何</p>
      <p class="hide">
        你对这些
        <span class="highlight">
          <img src="/imgs/14/highlight.svg" alt="" class="highlight-bg" />
          <span class="highlight-text">emoji</span>
        </span>
        情有独钟
      </p>
    </div>
    <div class="content-block" v-else>
      <p class="hide">
        你没有常用的 <span class="highlight">
          <img src="/imgs/14/highlight.svg" alt="" class="highlight-bg" />
          <span class="highlight-text">emoji</span>
        </span>
      </p>
      <p class="hide accent"><br>让{{ appName }}送你几个过圣诞吧!</p>
    </div>
    <div class="emoji-wrapper">
      <ChristmasTree />
      <div
        class="emoji hide"
        :class="`emoji${i}`"
        v-for="(emoji, i) in summary?.user_frequent_emoji.length > 0
          ? summary?.user_frequent_emoji
          : ['🌟', '🦌', '🎁', '❄️', '🔔']"
        :key="emoji"
      >
        {{ emoji }}
      </div>
    </div>
    <ScrollUpHint style="filter: brightness(0.4)" v-show="shwoScrollUpHint" />
    <Footer style="--_clr-text: var(--clr-brown)" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 14;
const { summary, appName } = useSummary();

const shwoScrollUpHint = ref(false);

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);

  let time = 0;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".content-block p:nth-child(1)"]);
  }, (time += 2000));
  const allEmojis = document.querySelectorAll(".emoji");
  allEmojis.forEach((emoji, i) => {
    setTimeout(() => {
      emoji.classList.remove("hide");
    }, (time += 1800));
  });
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".content-block p:nth-child(2)"]);
  }, (time += 2000));
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
.page14 {
  background-color: var(--clr-purplr);
  padding-top: calc(0.04 * var(--height));
}
.content-block {
  position: relative;
  color: var(--clr-brown);
  text-align: center;
  gap: 0;
}

.highlight {
  position: relative;
  font-family: var(--ff-accent);
  font-size: var(--fs-figure);
  padding-inline: 0.25rem;
}
.highlight-bg {
  position: absolute;
  top: 10%;
  left: -5%;
  max-width: unset;
  width: 110%;
  height: 100%;
}
.highlight-text {
  position: relative;
}
.emoji-wrapper {
  margin-top: 1.5rem;
  position: relative;
  width: 100%;
}
@media (min-height: 850px) {
  .page14 {
    padding-top: calc(0.1 * var(--height));
  }
  .emoji-wrapper {
    margin-top: 2.5rem;
    scale: 1.1;
  }
}
.bg {
  width: 85%;
  margin-inline: auto;
  display: block;
}

.emoji {
  position: absolute;
  font-size: 45px;
  translate: -50% -50%;

  transition: all 1.5s ease-in, opacity 0.5s ease-in;
}
.emoji.hide {
  opacity: 0;
  top: 50%;
  left: 50%;
  font-size: 130rem;
}
.emoji0 {
  top: 27%;
  left: 61%;
  transform: rotate(-20deg) scale(1.2);
}
.emoji1 {
  top: 42%;
  left: 44%;
  transform: rotate(10deg) scale(0.9);
}
.emoji2 {
  top: 56%;
  left: 63%;
  transform: rotate(-10deg) scale(1);
}
.emoji3 {
  top: 67%;
  left: 41%;
  transform: rotate(20deg) scale(1.3);
}
.emoji4 {
  top: 86%;
  left: 62%;
  transform: rotate(-10deg) scale(0.86);
}
</style>
