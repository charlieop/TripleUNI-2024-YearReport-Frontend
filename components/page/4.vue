<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="group content-block">
      <div class="group_2">
        <img class="image run-ltr" src="/imgs/4/person.webp" />
        <img class="image_2 run-ltr" src="/imgs/4/2.webp" />
      </div>
      <div class="mt-12">
        <div class="textAni" style="animation-delay: 0.2s">
          <span class="font_2">
            今年，你<span class="accent" v-if="summary?.user_date_count <= 10"
              >好像不是</span
            >很爱{{ appName }}
            <span v-if="summary?.user_date_count <= 10">:(</span>
            <span v-else>❤️</span>
          </span>
        </div>

        <div class="textAni hide">
          <p>
            你在{{ appName }}登陆了
            <span class="font_2">{{ summary?.user_date_count }}</span
            >天
          </p>
        </div>
        <div class="textAni hide">
          <p>
            一共使用{{ appName }}
            <span class="font_2">{{ summary?.user_minute_count }}</span
            >分钟
          </p>
        </div>
        <div class="textAni hide">
          <p>
            在校内排名第
            <span class="font_2">{{ summary?.user_minute_count_rank }}</span
            >名
          </p>
        </div>
      </div>
    </div>
    <div class="group_3">
      <div class="section">
        <img src="/imgs/4/background.webp" alt="" class="background-img" />
        <slot></slot>
        <div class="group_4">
          <div class="section_2"></div>
          <div class="pos_2">
            <div class="textAni hide">
              <span class="font_3">相当于看了</span>
              <span class="font_2 text">{{ effectiveEpisodeCount }}</span>
              <span class="font_3">集 </span>
              <div class="text-center">
                <span class="font_3">《再见爱人》</span>
              </div>
            </div>
          </div>
        </div>
        <div class="group_6">
          <img class="image_5" src="/imgs/4/smiles.webp" />
          <img class="image_4 pos_3" src="/imgs/4/broken heart.webp" />
        </div>
      </div>
      <img class="image_3 pos star-in" src="/imgs/4/star in.webp" />
    </div>

    <ScrollUpHint v-if="showHint" />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const PAGE_NUMBER = 4;
const { summary, appName } = useSummary();

const hide = ref(true);
const showHint = ref(false);

const effectiveEpisodeCount = computed(() => {
  const minutes = summary.value?.user_minute_count / 90;
  return Number.isInteger(minutes) ? minutes : minutes.toFixed(1);
});

function init() {
  // 将所有 .textAni 的内容先隐藏
  const texts = document.querySelectorAll(`.page${PAGE_NUMBER} .textAni`);
  texts.forEach((el) => el.classList.add("hide"));
}

function onShow() {
  hide.value = false;
  let time = -99990;
  // 这里的延时数组可根据需要调整
  const delays = [0, 200, 600, 600, 600];

  const textList = Array.from(
    document.querySelectorAll(`.page${PAGE_NUMBER} .textAni`)
  );
  textList.forEach((el, index) => {
    setTimeout(() => {
      unhide(el);
    }, (time += delays[index] ?? 200));
  });

  // 所有文字出现后可执行后续操作
  setTimeout(() => {
    showHint.value = true;
    appendNextPage?.(PAGE_NUMBER); // 确保 appendNextPage 传递 true 参数
  }, time + 200);

  console.log(`Page ${PAGE_NUMBER} shown`);
}
onMounted(() => {
  init();
  onEnterViewportForFirstTime?.(PAGE_NUMBER, onShow);
});
</script>

<style scoped>
.run-ltr {
  position: relative;
  /* 单次从左向右移动并最终停留在终点 */
  animation: runLeftToRight 2s ease-in-out forwards;
}

.star-in {
  opacity: 0;
  clip-path: inset(0 0 0 100%);
  animation: moveIn 1s ease-in-out forwards;
  animation-delay: 2s;
  /* 2秒后开始动画 */
}

@keyframes moveIn {
  0% {
    opacity: 0;
    clip-path: inset(0 50% 0 50%);
    /* 从中间开始 */
  }

  100% {
    opacity: 1;
    clip-path: inset(0 0 0 0);
    /* 完全展开 */
  }
}

@keyframes runLeftToRight {
  0% {
    transform: translateX(-200px);
  }

  100% {
    transform: translateX(0);
  }
}

.textAni {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.textAni.hide {
  opacity: 0;
}

.textAni:not(.hide) {
  opacity: 1;
}

.mt-12 {
  margin-top: 0.75rem;
}

.text-center {
  text-align: center;
}

.page {
  padding: 2.25rem 0 0rem;
  background-color: var(--clr-brown);
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}

.group {
  width: 100%;
}

.group_2 {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 2.63rem;
}

.image {
  margin-right: -4.44rem;
  width: 4.13rem;
  height: 6.13rem;
}

.image_2 {
  margin-right: 3.5rem;
  margin-top: 2rem;
  width: 4vw;
  height: 2.1vh;
}

.font {
  font-size: var(--fs-primary);
  font-family: var(--ff-primary);
  line-height: 1.5rem;
  color: var(--clr-text);
}

.font_2 {
  font-size: var(--fs-figure);
  font-family: var(--ff-primary);
  line-height: 2.69rem;
  color: var(--clr-text);
}

.group_3 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  margin-top: 0;
  padding: 4.38rem 0 4.13rem;
}

.section {
  display: flex;
  flex-direction: column;
  padding: 1.41rem 3.44rem 0;
  position: relative; /* 添加相对定位 */
  height: 8.75rem;
  width: 100%;
}

.background-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0; /* 确保图片在底层 */
}

/* 确保其他内容在图片上层 */
.section > *:not(.background-img) {
  position: relative;
  z-index: 1;
}

.group_4 {
  display: flex;
  flex-direction: column;

  position: relative;
  margin-right: 0.5rem;
  padding-top: 1.88rem;
  width: 100%;
}

.section_2 {
  width: 100%;
  margin-left: -0.3rem;
  opacity: 0.9;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    #facb98 0%,
    #e8e8e8 92%
  );
  filter: blur(0.13rem);
  border-radius: 50%;
  height: 2.94rem;
}

.grou p_5 {
  text-align: center;
}

.page4 {
  background-color: #39372a;
}

.pos_2 {
  position: absolute;
  left: 0.62rem;
  right: 0;
  top: 0;
}

.font_3 {
  font-size: var(--fs-accent);
  font-family: var(--ff-primary);
  line-height: 1.81rem;
  color: var(--clr-brown);
}

.text {
  color: var(--clr-brown);
}

.group_6 {
  position: relative;
  margin-top: -1.88rem;
  padding: 2.375vh 0;
}

.image_5 {
  width: 4.06rem;
  height: 5vh;
  margin-bottom: -0.8rem;
}

.image_4 {
  width: 3.88rem;
  height: 3.44rem;
  margin-bottom: -0.8rem;
}

.pos_3 {
  position: absolute;
  left: 3.45rem;
  /* 3.45rem */
  bottom: 0;
}

.image_3 {
  width: 21.88rem;
  /* 21.88rem */
  height: 17.25rem;
  /* 17.25rem */
}

.text_2 {
  color: var(--clr-oragne);
  font-size: var(--fs-primary);
  font-family: var(--ff-accent);
  line-height: 1.16rem;
}

.pos {
  position: absolute;
  left: 1.12rem;
  bottom: 0;
}

.background {
  position: absolute;
  width: 24.56rem;
  height: 8.19rem;
  z-index: -1;
}

.text_2 {
  color: var(--clr-oragne);
  font-size: var(--fs-primary);
  font-family: var(--ff-accent);
  line-height: 1.16rem;
}
</style>
