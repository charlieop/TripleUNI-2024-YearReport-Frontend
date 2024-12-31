<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="content-block pt1">
      <div>
        <p class="figure hide">铛铛铛 !</p>
        <p class="hide">今年你在{{ appName }}获得了以下成就:</p>
      </div>
    </div>
    <div class="achievement pt2 hide">
      <div
        class="achievement-card"
        v-for="(achievement, i) in summary?.user_achievements"
      >
        <p class="desc">{{ achievement.description }}</p>
        <div class="row">
          <p class="title">
            {{ achievement.title }}
          </p>
          <img
            :src="
              $config.app.baseURL +
              'imgs/17/' +
              achievement.importance +
              '.webp'
            "
            alt=""
            class="icon"
          />
        </div>
      </div>
    </div>
    <img src="/imgs/17/stroke.webp" alt="" class="stroke hide" />
    <div class="content-block pt3 center">
      <div>
        <p class="hide">{{ appName }}帮你记得</p>
        <p class="hide"><span class="figure">去年的你</span>获得了:</p>
      </div>
    </div>
    <div class="achievement pt4 hide">
      <div
        class="achievement-card"
        v-for="(achievement, i) in summary?.user_old_achievements"
      >
        <p class="desc">{{ achievement.description }}</p>
        <div class="row">
          <img
            :src="
              $config.app.baseURL +
              'imgs/17/' +
              achievement.importance +
              '.webp'
            "
            alt=""
            class="icon"
          />
          <p class="title">
            {{ achievement.title }}
          </p>
        </div>
      </div>
    </div>
    <div class="content-block pt5 center">
      <p class="hide">你看一晃又是一年...</p>
    </div>
    <ScrollUpHint v-show="shwoScrollUpHint" />
    <Footer style="--_clr-text: var(--clr-offwhite)" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 17;
const { summary, appName } = useSummary();

const shwoScrollUpHint = ref(false);

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

async function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);

  let time = 0;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(1)"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(2)"]);
  }, (time += 300));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2"]);
  }, (time += 300));
  const pt2 = document.querySelector(".page17 .pt2");
  let achievementCardsPt2 = document.querySelectorAll(
    ".page17 .pt2 .achievement-card"
  );
  achievementCardsPt2 = Array.from(achievementCardsPt2).reverse();
  pt2.scrollLeft = pt2.scrollWidth;
  achievementCardsPt2.forEach((card, i) => {
    setTimeout(() => {
      pt2.scrollTo({
        left: card.offsetWidth * (achievementCardsPt2.length - i),
        behavior: "smooth",
      });
    }, (time += 100));
  });

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".stroke"]);
  }, (time += 300));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 p:nth-child(1)"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 p:nth-child(2)"]);
  }, (time += 300));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt4"]);
  }, (time += 300));
  const pt4 = document.querySelector(".page17 .pt4");
  const achievementCardsPt4 = document.querySelectorAll(
    ".page17 .pt4 .achievement-card"
  );
  achievementCardsPt4.forEach((card, i) => {
    setTimeout(() => {
      pt4.scrollTo({ left: i * card.offsetWidth, behavior: "smooth" });
    }, (time += 100));
  });

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt5 p"]);
  }, (time += 700));

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
.page17 {
  background: linear-gradient(
    0deg,
    #55804a 0%,
    #5e8556 17%,
    #96a19d 52%,
    #ddc5f7 93%
  );
  padding-top: calc(0.08 * var(--height));
}
.pt1 {
  color: var(--clr-brown);
}
.pt5 {
  margin-top: 2rem;
  font-size: var(--fs-accent);
  color: var(--clr-oragne);
}
.achievement {
  height: calc(0.2 * var(--height));
  margin-block: 0.75rem;
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  padding-inline: calc(0.1 * var(--width));
}

.pt2 {
  color: var(--clr-brown);
}

.achievement-card {
  position: relative;
  z-index: 1;
  width: calc(0.8 * var(--width));
  height: 100%;
  border-radius: 1rem;
  flex-shrink: 0;
  scroll-snap-align: center;

  white-space: nowrap;
  text-wrap: nowrap;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.25rem;
}
.achievement-card::before {
  content: "";
  position: absolute;
  top: 2%;
  left: 0%;
  height: 96%;
  border-radius: 999rem;
  aspect-ratio: 1 / 1;
  background: var(--clr-offwhite);
  z-index: -1;
}
.row {
  display: flex;
  align-items: center;
}
.icon {
  height: 3.5rem;
  flex-shrink: 0;
}
.pt4 .achievement-card::before {
  left: unset;
  right: 0%;
  background: #eeb77a;
}

.title {
  font-size: var(--fs-large);
  overflow: clip;
  overflow-x: visible;
}
.desc {
  text-align: center;
  line-height: 0.75;
}

.center {
  text-align: center;
}
.stroke {
  width: 80%;
  display: block;
  margin: 1.5rem auto;
}
</style>
