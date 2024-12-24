<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="button-container">
      <div class="night-decor decor" :style="{ '--_opacity-day': opacity }">
        <img src="/imgs/6/plant.svg" alt="" class="plant" />
        <img src="/imgs/6/cat.svg" alt="" class="cat" />
      </div>
      <DayNightToggle
        :style="{ '--_opacity-day': opacity }"
        style="--_button-width: calc(0.5 * var(--width))"
        @click="handelToggle"
      />
    </div>
    <div class="scrolling-context">
      <div class="subpage subpage1">
        <div class="text-area">
          <p class="hide prompt">
            <span class="figure">有一天</span>你比XX起得还要早
          </p>
          <p class="hide time">
            你在<span class="figure">XX</span>点开了XX, 看的是
          </p>
        </div>

        <div class="post-container hide">
          <Post :post-info="dummyPostInfo" />
        </div>
        <div class="cities" :style="{ '--_opacity-day': opacity }">
          <img src="/imgs/6/city1.svg" alt="" class="city city1" />
          <img src="/imgs/6/city2.svg" alt="" class="city city2" />
        </div>
        <div class="scroll-hint hide">
          <ScrollUpHint />
        </div>
      </div>
      <div class="subpage subpage2">
        <img
          src="/imgs/6/stars.svg"
          alt=""
          class="stars"
          :style="{ '--_opacity-day': opacity }"
        />
        <div class="text-area">
          <p class="hide prompt">
            <span class="figure">有一天</span>星星都在数人类的时候✨
          </p>
          <p class="hide time">
            你在<span class="figure">XX</span>点还留在XX, 看的是
          </p>
        </div>

        <div class="post-container hide">
          <Post :post-info="dummyPostInfo" />
        </div>
        <div class="text-area">
          <p class="accent hide">一定很辛苦吧👉🏻👈🏻</p>
        </div>
        <div class="scroll-up-hint hide">
          <ScrollUpHint />
        </div>
      </div>
    </div>
    <Footer style="--_clr-text: var(--clr-oragne)" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 6;
const opacity = ref(1);
let firstShowPage2 = false;

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);

  const scrollingContext = document.querySelector(".scrolling-context");
  const page_width = scrollingContext.clientWidth;
  scrollingContext.addEventListener("scroll", (e) => {
    const limitedScrollX = Math.max(
      Math.min(e.target.scrollLeft, page_width),
      0
    );
    opacity.value = 1 - limitedScrollX / page_width;

    if (firstShowPage2) return;
    if (opacity.value <= 0.1) onShowPage2();
  });
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);

  let time = 0;
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".subpage1 .prompt"]);
  }, (time += 1500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".subpage1 .time"]);
  }, (time += 1500));
  setTimeout(() => {
    const scrollingContext = document.querySelector(
      ".page6 .scrolling-context"
    );
    scrollingContext.style.overflowX = "scroll";

    unhideAll(PAGE_NUMBER, [".subpage1 .post-container", ".scroll-hint"]);
  }, (time += 1500));
}

function onShowPage2() {
  let time = 0;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".subpage2 .prompt"]);
  }, (time += 1500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".subpage2 .time"]);
  }, (time += 1500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".subpage2 .post-container"]);
  }, (time += 1500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".scroll-up-hint", ".accent"]);
    appendNextPage(PAGE_NUMBER);
  }, (time += 1500));
}

const dummyPostInfo = {
  post_id: 13552,
  user_avatar: "UST",
  post_topic: "情感",
  is_following: true,
  post_follower_num: 100,
  post_comment_num: 50,
  post_msg: "This is a post message. lorem ipsum dolor sit amet. lorem",
};

const handelToggle = () => {
  const scrollingContext = document.querySelector(".scrolling-context");
  const scrollX = scrollingContext.scrollLeft;
  const page_width = scrollingContext.clientWidth;

  const targetScrollX = scrollX > page_width / 2 ? 0 : page_width;
  console.log("targetScrollX", targetScrollX);
  scrollingContext.scrollTo({
    left: targetScrollX,
    behavior: "smooth",
  });
};

onMounted(() => {
  init();

  onEnterViewportForFirstTime(PAGE_NUMBER, onShow);
});
</script>

<style scoped>
.scrolling-context {
  display: flex;
  flex-direction: row;
  scroll-snap-type: x mandatory;
  width: 100%;
  height: 100%;
}

.button-container {
  position: absolute;
  top: 44%;
  right: 1.5rem;
  transform: translateY(-50%);
  width: 250px;
  z-index: 1;
}

.scroll-hint {
  transform: rotate(90deg);
  position: absolute;
  bottom: 40%;
  left: 30%;
}

.post-container {
  margin-block: 0.5rem;
  padding-inline: 2.25rem;
}

.text-area {
  padding: 0 1rem;
  text-align: center;
}

.subpage {
  position: relative;
  flex-shrink: 0;
  scroll-snap-align: center;

  overflow: clip;

  height: var(--height);
  width: var(--width);
}

.subpage1 {
  background: linear-gradient(#eeb77a 14%, #b5b796 56%, #7cb6b2 71%);
  padding-top: 1.5rem;
  color: var(--clr-brown);
}
.cities {
  --_opacity-day: 1;
  --_opacity-night: calc(1 - var(--_opacity-day));

  position: absolute;
  left: 0;
  width: 108%;
  translate: -4% 0;
  bottom: 8%;
}
.city {
  position: absolute;
  width: 100%;
  bottom: 0;

  transition: none;
  opacity: calc(var(--_opacity-day) - 0.5 * var(--_opacity-night));
  transform: scaleY(calc(var(--_opacity-day) - 0.5 * var(--_opacity-night)));
  transform-origin: bottom;
}
.city1 {
  left: -0.5rem;
  bottom: calc(0.5rem * (var(--_opacity-day) - 2 * var(--_opacity-night)));
}

.subpage2 {
  background: linear-gradient(
    #21352d 1%,
    #334b49 16%,
    #557d7a 44%,
    #7cb6b2 87%
  );
  padding-top: calc(0.52 * var(--height));
}
.stars {
  --_opacity-day: 1;
  --_opacity-night: calc(1 - var(--_opacity-day));

  position: absolute;
  top: calc(-30% * var(--_opacity-day));
  left: 0;
  width: 100%;
  height: calc(0.5 * var(--height));

  transition: none;
  opacity: var(--_opacity-night);
}

.plant {
  transition: none;
  position: absolute;
  bottom: 0;
  right: 1rem;
  opacity: calc(var(--_opacity-night) - 0.3 * var(--_opacity-day));
  transform: scaleY(calc((var(--_opacity-night) - 0.3 * var(--_opacity-day))));
  transform-origin: bottom;
}
.cat {
  transition: none;
  position: absolute;
  bottom: 0;
  right: calc(3rem * (var(--_opacity-night) - 0.5 * var(--_opacity-day)));
  opacity: calc(var(--_opacity-night) - 0.7 * var(--_opacity-day));
}
.night-decor {
  --_opacity-day: 1;
  --_opacity-night: calc(1 - var(--_opacity-day));
  width: 100%;
  top: 0;
  right: 1.5rem;
  translate: 0 -100%;
}
</style>
