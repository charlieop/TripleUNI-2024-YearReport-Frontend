<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="decor-img">
      <img src="/imgs/10/bg.webp" alt="" class="bg" />
      <img src="/imgs/10/fill.webp" alt="" class="decor fill hide" />
      <img src="/imgs/10/lines.webp" alt="" class="decor lines hide" />
      <img src="/imgs/10/nuts.webp" alt="" class="decor nuts hide" />
    </div>
    <div class="content-block pt1">
      <div>
        <p class="hide">某大量收藏帖子</p>
        <p class="hide">你是第<span class="figure">X</span>个收藏的</p>
      </div>
    </div>
    <div class="content-block pt2">
      <p class="right hide">大家都没有围观的帖子</p>
      <div class="post-wrapper hide">
        <Post :post-info="dummyPostInfo" />
      </div>
      <div class="right">
        <p class="hide">你是唯一一个收藏的</p>
        <p class="hide">它一定对你有什么特别的意义吧!</p>
      </div>
    </div>
    <div class="content-block pt3">
      <div>
        <p class="figure hide">不过</p>
        <p class="hide">有<span class="figure">XX</span>条帖子</p>
        <p class="hide">你围观后再也没看过</p>
      </div>
      <div class="accent hide">
        <img
          src="/imgs/10/text-background.webp"
          alt=""
          class="text-background"
        />
        <p>像屯粮的小松鼠一样 :D</p>
      </div>
    </div>
    <div class="scroll-up-hint hide">
      <ScrollUpHint style="filter: brightness(0)" />
    </div>
    <Footer style="--_clr-text: var(--clr-brown)" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 10;

const dummyPostInfo = {
  post_id: 13552,
  user_avatar: "UST",
  post_topic: "情感",
  is_following: true,
  post_follower_num: 100,
  post_comment_num: 50,
  post_msg: "This is a post message. lorem ipsum dolor sit amet. lorem",
};

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);

  let time = 0;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div:nth-child(1) p:nth-child(1)"]);
  }, (time += 1000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div:nth-child(1) p:nth-child(2)"]);
  }, (time += 500));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 p.right"]);
  }, (time += 1500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".post-wrapper"]);
  }, (time += 500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 .right p:nth-child(1)"]);
  }, (time += 500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 .right p:nth-child(2)"]);
  }, (time += 1000));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 div:nth-child(1) p:nth-child(1)"]);
  }, (time += 1500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 div:nth-child(1) p:nth-child(2)"]);
  }, (time += 1000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 div:nth-child(1) p:nth-child(3)"]);
  }, (time += 500));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 .accent", ".lines"]);
  }, (time += 1000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 .accent", ".fill"]);
  }, (time += 1000));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt3 .accent", ".nuts", ".scroll-up-hint"]);
    appendNextPage(PAGE_NUMBER);
  }, (time += 1000));
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
  width: 90%;
  height: 130%;
  translate: -3% -15%;
}

.decor-img {
  position: absolute;
  bottom: 45%;
  right: -10%;
  width: 90%;
  translate: 0 100%;
}
.decor {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
