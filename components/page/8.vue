<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="flex-col">
      <div class="group_2 content-block">
        <span class="font_2 textAni hide"> 2024年 </span>
        <p class="textAni hide">
          你一共浏览了
          <span class="figure">{{ summary?.user_view_post_count }}</span>
          条树洞
        </p>
        <p class="textAni hide">
          击败了
          <span class="font_2"
            >{{ summary?.user_view_post_count_percentage }}%</span
          >
          的用户
        </p>
        <p class="textAni hide">2024年你刷到的第一条{{ appName }}是</p>
      </div>

      <div class="post-container textAni hide">
        <Post :post-info="summary?.user_first_see_post" />
      </div>
      <div class="mt-40 flex-col group_3">
        <img
          class="image self-center image-draw"
          src="https://i.boatonland.com/report2024/assets/imgs/8/Vector.webp"
        />

        <div v-if="summary?.user_followed_top10" class="text-center">
          <p class="textAni hide">
            你收藏了
            <span class="text_2"> 【年度前🔟热帖】 </span>
          </p>
          <p class="textAni hide">爱看热闹的小姐姐/小哥哥一枚吖</p>
          <img
            class="image_2 handshake-ani"
            src="https://i.boatonland.com/report2024/assets/imgs/8/8.webp"
          />
        </div>
        <div v-else-if="summary?.user_commented_top10" class="text-center">
          <p class="textAni hide">
            你在
            <span class="text_2"> 【年度前🔟热帖】 </span>
            评价了
          </p>
          <div class="special textAni hide">
            <span class="font_2">【{{ commented }}】</span>
          </div>
          <p class="textAni hide">万丈高楼平地起</p>
          <p class="textAni hide">你也是其中的一层呢</p>
        </div>
        <div v-else class="flex-row">
          <div class="text-start">
            <p class="textAni hide">
              你<span class="text_2">完全没有</span>涉足过
            </p>
            <p class="textAni hide">{{ appName }}最热的树洞</p>
            <p class="textAni hide">真是个遗世独立的高人啊</p>
          </div>
          <img
            src="https://i.boatonland.com/report2024/assets/imgs/8/lengthwise.webp"
            class="image_3"
          />
        </div>
      </div>
    </div>

    <ScrollUpHint v-if="showHint" />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const PAGE_NUMBER = 8;
const { summary, appName } = useSummary();

const showHint = ref(false);

const commented = computed(() => {
  if (summary.value?.user_comment_for_top10.length <= 10) {
    return summary.value?.user_comment_for_top10;
  }
  return summary.value?.user_comment_for_top10.slice(0, 10) + "...";
});

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
  // 先隐藏所有文本
  const texts = document.querySelectorAll(`.page${PAGE_NUMBER} .textAni`);
  texts.forEach((el) => el.classList.add("hide"));
  const arm = document.querySelector(".image_3");
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);
  sendViewPageTracking(PAGE_NUMBER);

  let time = 0;
  const delays = [700, 300, 300, 300, 300, 700, 300, 300, 300];

  const textList = Array.from(
    document.querySelectorAll(`.page${PAGE_NUMBER} .textAni`)
  );
  textList.forEach((el, index) => {
    setTimeout(() => {
      el.classList.remove("hide");
    }, (time += delays[index] ?? 200));
  });

  // 在所有文字显示完毕后执行
  setTimeout(() => {
    showHint.value = true;
    appendNextPage(PAGE_NUMBER);
  }, time + 200); // 额外添加500ms缓冲时间
}
onMounted(() => {
  init();
  onEnterViewportForFirstTime(PAGE_NUMBER, onShow);
  // 添加动画结束监听器
});
</script>

<style scoped lang="css">
.post-container {
  margin-block: 0.5rem;
  padding-inline: 2.25rem;
}

.textAni {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.mt-40 {
  margin-top: 2.5rem;
}

.textAni.hide {
  opacity: 0;
}

.textAni:not(.hide) {
  opacity: 1;
}
.handshake-ani {
  /* 起始时仅显示图片中线，且整体上移一些 */
  clip-path: inset(0 50% 0 50%);
  transform: translateY(-50px);
  animation: showHands 2s ease-out forwards;
}

@keyframes showHands {
  0% {
    clip-path: inset(0 50% 0 50%);
    transform: translateY(-50px);
  }
  100% {
    clip-path: inset(0 0 0 0);
    transform: translateY(0);
  }
}
.image-draw {
  /* 保持原有属性的同时，添加动画 */
  animation: drawEffect 2s linear forwards;
  /* 起始时将图片裁剪为 0，即看不到内容 */
  clip-path: inset(0 100% 0 0);
}

@keyframes drawEffect {
  to {
    /* 最终展示全部内容 */
    clip-path: inset(0 0 0 0);
  }
}

.flex-col {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: hidden;
  gap: 0;
}
.flex-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  margin-left: -1.5rem;
}
.page {
  display: flex;
  overflow-y: hidden;
  padding: 3.98rem 0 0 0;
  background-color: #7cb6b2;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.text-center {
  display: grid;
  place-items: center;
  gap: 0.5rem;
}
.text-start {
  display: grid;
  place-items: start;
  gap: 0.5rem;
}
.group_2 {
  margin-left: 0.13rem;
}
.font_2 {
  font-size: var(--fs-figure);
  font-family: var(--ff-primary);
  line-height: 2.69rem;
  color: var(--clr-text);
}

.group_3 {
  width: 100%;
  margin-left: 0;

  margin-top: 1rem;
}
.image {
  width: 15rem;
  height: 4.5vh;
  align-self: center;
}

.group_4 {
  text-align: center;
  gap: 0.75rem;
}

.text_2 {
  color: #facb98;
  font-size: 1.35rem;
  font-family: AaTangYuanTi;
  line-height: 1.81rem;
}
.special {
  display: grid;
  place-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.group_5 {
  margin-top: -2.13rem;
  padding: 15.38rem 0 1.5rem;
}

.text_3 {
  color: #facb98;
  font-size: 1.25rem;
  font-family: Irish Grover;
  line-height: 1.16rem;
}

.image_2 {
  width: 130vw;
  height: 32vh;
}
.image_3 {
  position: absolute;
  right: 0;
  transform-origin: center 20%;
  bottom: 0%;
  transform: translateY(100%);
  animation: armRise 1.5s ease-out forwards;
}

@keyframes armRise {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.pos {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
