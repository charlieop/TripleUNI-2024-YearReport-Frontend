<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="decor-img">
      <img src="/imgs/10/bg.svg" alt="" class="bg" />
      <img src="/imgs/10/fill.webp" alt="" class="decor fill hide" />
      <img src="/imgs/10/lines.webp" alt="" class="decor lines hide" />
      <img src="/imgs/10/nuts.webp" alt="" class="decor nuts hide" />
    </div>
    <div class="content-block pt1">
      <div>
        <template v-if="summary?.user_followed_top_follow_rank > 0">
          <p class="hide">
            某大量收藏帖子
            <span class="accent">
              #{{ summary?.user_followed_top_follow.uni_post_id }}
            </span>
          </p>
          <p class="hide">
            你是第<span class="figure">{{
              summary?.user_followed_top_follow_rank
            }}</span
            >个收藏的
          </p>
        </template>
        <template v-else>
          <p class="hide">你今年没有收藏过最热门的帖子</p>
          <p class="hide">是一个不爱凑热闹的人呢</p>
        </template>
      </div>
    </div>
    <div class="content-block pt2">
      <template v-if="summary?.user_followed_only_follow_post_list.length > 0">
        <p class="right hide">大家都没有围观的帖子</p>
        <div class="post-wrapper hide">
          <Post :post-info="summary?.user_followed_only_follow_post_list[0]" />
        </div>
        <div class="right">
          <p class="hide">你是唯一一个收藏的</p>
          <p class="hide">它一定对你有什么特别的意义吧!</p>
        </div>
      </template>
      <template v-else>
        <p class="right hide">你没有收藏过任何小众的帖子</p>
        <div class="right">
          <p class="hide">是还没有找到你的共鸣</p>
          <p class="hide">还是天生不爱收藏呢</p>
        </div>
      </template>
    </div>
    <div class="content-block pt3">
      <div>
        <p class="figure hide">不过</p>
        <p class="hide">有<span class="figure">{{ summary?.user_followed_no_review_post_count }}</span>条帖子</p>
        <p class="hide">你围观后再也没看过</p>
      </div>
      <div class="accent hide">
        <img
          src="/imgs/10/text-background.svg"
          alt=""
          class="text-background"
        />
        <p v-if="summary?.user_followed_no_review_post_count > 0">
          像屯粮的小松鼠一样 :D
        </p>
        <p v-else>真是太不可思议了 :O</p>
      </div>
    </div>
    <ScrollUpHint style="filter: brightness(0.4)" v-show="shwoScrollUpHint" />
    <Footer style="--_clr-text: var(--clr-brown)" />
  </div>
</template>

<script setup>
const PAGE_NUMBER = 10;
const { summary, appName } = useSummary();

const shwoScrollUpHint = ref(false);

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
    unhideAll(PAGE_NUMBER, [".pt3 .accent", ".nuts"]);
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
