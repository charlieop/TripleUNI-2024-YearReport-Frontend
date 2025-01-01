<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="decor-img">
      <img
        src="https://i.boatonland.com/report2024/assets/imgs/10/bg.svg"
        alt=""
        class="bg"
      />
      <img
        src="https://i.boatonland.com/report2024/assets/imgs/10/fill.webp"
        alt=""
        class="decor fill hide"
      />
      <img
        src="https://i.boatonland.com/report2024/assets/imgs/10/lines.webp"
        alt=""
        class="decor lines hide"
      />
      <img
        src="https://i.boatonland.com/report2024/assets/imgs/10/nuts.webp"
        alt=""
        class="decor nuts hide"
      />
    </div>
    <div class="content-block pt1">
      <div>
        <template v-if="summary?.max_follow_post">
          <p class="hide">
            万众瞩目的树洞
            <span class="accent">
              #{{ summary?.max_follow_post.post_id }}
            </span>
          </p>
          <p class="hide">
            你是第<span class="figure">{{ summary?.max_follow_post.rank }}</span
            >个收藏的
          </p>
        </template>
        <template v-else>
          <p class="hide"><br />哦豁！今年你没有收藏过最热门的树洞</p>
          <p class="hide">你的眼光是有点子特别的🤔</p>
        </template>
      </div>
    </div>
    <div class="content-block pt2">
      <template v-if="summary?.min_follow_post">
        <p class="right hide">大家都没有围观的树洞</p>
        <div class="post-wrapper hide">
          <Post :post-info="summary?.min_follow_post.data" />
        </div>
        <div class="right">
          <p class="hide">你是唯一一个收藏的</p>
          <p class="hide">它一定对你有什么特别的意义吧!</p>
        </div>
      </template>
      <template v-else>
        <p class="right hide"><br />你没有收藏过任何小众的树洞</p>
        <div class="right">
          <p class="hide">是还没有找到你的共鸣</p>
          <p class="hide">还是天生不爱收藏呢</p>
        </div>
      </template>
    </div>
    <div class="content-block pt3">
      <div v-if="summary?.user_followed_no_review_post_count > 0">
        <p class="figure hide">不过</p>
        <p class="hide">
          有<span class="figure">{{
            summary?.user_followed_no_review_post_count
          }}</span
          >条树洞
        </p>
        <p class="hide">你围观后再也没看过</p>
      </div>
      <div v-else>
        <p class="figure hide">不过</p>
        <p class="hide"><span>每一个</span>收藏的树洞你都会回看</p>
        <p class="hide">再看的时候，心绪会不会不同呢</p>
      </div>
      <div class="accent hide">
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/10/text-background.svg"
          alt=""
          class="text-background"
        />
        <p>像屯粮的小松鼠一样 :D</p>
      </div>
    </div>
    <ScrollUpHint style="filter: brightness(0.4)" v-show="shwoScrollUpHint" />
    <Footer style="--_clr-text: var(--clr-brown)" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 10;
const { summary, appName, getPostID } = useSummary();

const shwoScrollUpHint = ref(false);

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);
  sendViewPageTracking(PAGE_NUMBER);

  let time = 0;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div:nth-child(1) p:nth-child(1)"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div:nth-child(1) p:nth-child(2)"]);
  }, (time += 300));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 p.right"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".post-wrapper"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 .right p:nth-child(1)"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 .right p:nth-child(2)"]);
  }, (time += 700));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 div:nth-child(1) p:nth-child(1)"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 div:nth-child(1) p:nth-child(2)"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 div:nth-child(1) p:nth-child(3)"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 .accent", ".lines"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 .accent", ".fill"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 .accent", ".nuts"]);
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
.page10 {
  background-color: #eeb77a;
  padding-block: calc(0.04 * var(--height));
  display: flex;
  flex-direction: column;
  gap: calc(0.02 * var(--height));
}
.right {
  text-align: right;
}
.pt1,
.pt2 {
  color: var(--clr-brown);
}
.pt3 {
  position: relative;
}
.accent {
  position: relative;
  color: var(--clr-green);
}
.accent p {
  position: relative;
}
.post-wrapper {
  padding-inline: 0.25rem;
}
.text-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scale: 1.6;
  translate: -7% -2%;
}

.decor-img {
  position: absolute;
  bottom: 25%;
  right: -7%;
  translate: 0 63%;
  scale: 1.2;
  /* background-color: red; */
}
.decor {
  position: absolute;
  top: 0;
  left: 0;
}
.nuts.hide {
  transform: none;
}
.fill.hide {
  transform: none;
}
.lines {
  filter: drop-shadow(0 0 0.3rem rgba(0, 0, 0, 0.3));
}
.lines.hide {
  transform: translateY(-10%) translateX(5%) rotate(-2deg);
}
</style>
