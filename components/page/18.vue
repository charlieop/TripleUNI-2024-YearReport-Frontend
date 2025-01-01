<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="content-block pt1">
      <div>
        <p class="hide">最后...</p>
        <p class="hide">请查收你的</p>
      </div>
      <p class="title hide">2024年度AI总结</p>
      <div class="loader hide">
        <div class="painting"></div>
        <p>
          <span class="figure">{{ appName }}</span
          >正在
        </p>
        <p class="accent">
          {{ action }}<span class="loading-animation">...</span>
        </p>
      </div>
    </div>
    <div class="pt2">
      <div class="img-wrapper hide">
        <img :src="$config.app.baseURL + summary?.ai_image" alt="" />
      </div>
      <p class="title hide">--{{ summary?.ai_title }}</p>

      <div class="text-wrapper hide">
        <img src="/imgs/18/paper.webp" alt="" />
        <p class="">{{ description }}</p>
      </div>
      <div class="placeholder"></div>
    </div>
    <div class="bottom">
      <ScrollUpHint v-show="shwoScrollUpHint" />
      <Footer />
    </div>
  </div>
</template>

<script setup>
const PAGE_NUMBER = 18;
const { summary, appName } = useSummary();

const shwoScrollUpHint = ref(false);
const contentReady = computed(() => {
  return (
    summary.value &&
    summary.value.ai_image &&
    summary.value.ai_description &&
    summary.value.ai_title
  );
});

const actionList = [
  "为你生成画像",
  "分析你的足迹",
  "决定你的称号",
  "思考你的人物",
];
const action = ref(actionList[0]);

const description = ref("");

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);

  let i = 0;
  setInterval(() => {
    action.value = actionList[i];
    i = (i + 1) % actionList.length;
  }, 2000);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);
  sendViewPageTracking(PAGE_NUMBER);

  let time = 0;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div p:nth-child(1)"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div p:nth-child(2)"]);
  }, (time += 300));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 .title"]);
  }, (time += 500));

  if (contentReady.value) {
    setTimeout(() => {
      displayAIContent();
    }, (time += 1500));
  } else {
    setTimeout(() => {
      unhideAll(PAGE_NUMBER, [".pt1 .loader"]);
    }, (time += 300));
    watch(contentReady, (value) => {
      if (value) {
        setTimeout(() => {
          displayAIContent();
        }, 1000);
      }
    });
  }
}

function displayAIContent() {
  console.log("Displaying AI content");
  const pt1 = document.querySelector(".page18 .pt1");
  pt1.classList.add("animation");

  const scrollingContext = document.querySelector(".page18");
  const imgWrapper = document.querySelector(".page18 .img-wrapper");
  const pt2 = document.querySelector(".page18 .pt2");
  scrollingContext.addEventListener("scroll", () => {
    if (imgWrapper.getBoundingClientRect().top <= 0) {
      pt2.classList.add("sticked");
    } else {
      pt2.classList.remove("sticked");
    }
  });

  let time = 1000;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 .img-wrapper"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 .title"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 .text-wrapper"]);
  }, (time += 300));

  const allText = summary.value.ai_description;
  for (let i = 0; i < allText.length; i++) {
    setTimeout(() => {
      description.value += allText[i];
      const textWrapper = document.querySelector(".page18 .text-wrapper p");
      textWrapper.scrollTop = textWrapper.scrollHeight;
    }, (time += 20));
  }

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
.page18 {
  background: linear-gradient(
    0deg,
    #55804a 0%,
    #5e8556 17%,
    #96a19d 60%,
    #ddc5f7 93%
  );
  color: var(--clr-brown);
  overflow-y: scroll;
}

.bottom {
  position: absolute;
  bottom: calc(- var(--height) - var(--width) / 5 * 4);
  width: 100%;
}

.pt1 {
  margin-block: 3rem 7rem;
}
.placeholder {
  height: 4rem;
}

.pt2 .title {
  margin-top: 2rem;
  padding-inline: 1rem;
  font-size: var(--fs-accent);
  text-align: right;
  position: sticky;
  top: calc(var(--width) / 5 * 4 - 4rem - 3ch);
  transition: all 0.5s ease-in-out;
}
.sticked .title {
  color: var(--clr-offwhite);
}
.text-wrapper {
  position: sticky;
  top: calc(var(--width) / 5 * 4 - 4rem);
  border-radius: 5px;
  overflow: hidden;

  width: 80%;
  height: calc(var(--height) - var(--width) / 5 * 4 + 1rem);
  margin: 0 auto;
  margin-top: 3rem;
}
.text-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.text-wrapper p {
  font-size: 0.875em;
  white-space: pre-wrap;
  position: absolute;
  top: 5%;
  left: 0;
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  padding: 0.5rem 1.5rem 4.5rem 1.5rem;
  scrollbar-width: thin; /* For Firefox */
}

.text-wrapper p::-webkit-scrollbar {
  width: 8px; /* For WebKit browsers */
}

.text-wrapper p::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.img-wrapper {
  position: sticky;
  top: 0;
  width: 80%;
  margin: 0.5rem auto;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 0 0.5rem 0.125rem #f9f5f0aa;
}
.img-wrapper::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.7) 70%,
    rgba(0, 0, 0, 0.9) 100%
  );
  opacity: 0;
}
.sticked .img-wrapper {
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0.5rem auto;
  aspect-ratio: 4 / 3;
  box-shadow: none;
}
.sticked .img-wrapper::after {
  opacity: 1;
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.pt1 .title {
  font-size: 2rem;
  transition: all 2s ease-in-out;
  position: absolute;
  top: 7rem;
}
.pt1.animation .title {
  /* font-size: var(--fs-figure); */
  top: 2rem;
}
.pt1.animation > div {
  position: absolute;
  opacity: 0;
}

.loader {
  position: absolute;
  top: calc(0.5 * var(--height));
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: max-content;
}
.loading-animation {
  clip-path: inset(0 100% 0 0);
  animation: l1 2s steps(4) infinite;
}
@keyframes l1 {
  to {
    clip-path: inset(0 -34% 0 0);
  }
}
.painting {
  width: 120px;
  margin: 1rem auto;
  aspect-ratio: 2;
  --c: linear-gradient(
    var(--clr-purple) 25%,
    var(--clr-green) 0 50%,
    #eeb77a 0 75%,
    var(--clr-purple) 0
  );
  background: var(--c), var(--c), var(--c), var(--c);
  background-size: 26% 400%;
  background-position: calc(0 * 100% / 3) 100%, calc(1 * 100% / 3) 100%,
    calc(2 * 100% / 3) 100%, calc(3 * 100% / 3) 100%;
  background-repeat: no-repeat;
  animation: l10 3s infinite;
}
@keyframes l10 {
  0% {
    background-position: calc(0 * 100% / 3) calc(3 * 100% / 3),
      calc(1 * 100% / 3) calc(3 * 100% / 3),
      calc(2 * 100% / 3) calc(3 * 100% / 3),
      calc(3 * 100% / 3) calc(3 * 100% / 3);
  }
  8.33% {
    background-position: calc(0 * 100% / 3) calc(2 * 100% / 3),
      calc(1 * 100% / 3) calc(3 * 100% / 3),
      calc(2 * 100% / 3) calc(3 * 100% / 3),
      calc(3 * 100% / 3) calc(3 * 100% / 3);
  }
  16.67% {
    background-position: calc(0 * 100% / 3) calc(2 * 100% / 3),
      calc(1 * 100% / 3) calc(2 * 100% / 3),
      calc(2 * 100% / 3) calc(3 * 100% / 3),
      calc(3 * 100% / 3) calc(3 * 100% / 3);
  }
  25% {
    background-position: calc(0 * 100% / 3) calc(2 * 100% / 3),
      calc(1 * 100% / 3) calc(2 * 100% / 3),
      calc(2 * 100% / 3) calc(2 * 100% / 3),
      calc(3 * 100% / 3) calc(3 * 100% / 3);
  }
  30%,
  33.33% {
    background-position: calc(0 * 100% / 3) calc(2 * 100% / 3),
      calc(1 * 100% / 3) calc(2 * 100% / 3),
      calc(2 * 100% / 3) calc(2 * 100% / 3),
      calc(3 * 100% / 3) calc(2 * 100% / 3);
  }
  41.67% {
    background-position: calc(0 * 100% / 3) calc(1 * 100% / 3),
      calc(1 * 100% / 3) calc(2 * 100% / 3),
      calc(2 * 100% / 3) calc(2 * 100% / 3),
      calc(3 * 100% / 3) calc(2 * 100% / 3);
  }
  50% {
    background-position: calc(0 * 100% / 3) calc(1 * 100% / 3),
      calc(1 * 100% / 3) calc(1 * 100% / 3),
      calc(2 * 100% / 3) calc(2 * 100% / 3),
      calc(3 * 100% / 3) calc(2 * 100% / 3);
  }
  58.33% {
    background-position: calc(0 * 100% / 3) calc(1 * 100% / 3),
      calc(1 * 100% / 3) calc(1 * 100% / 3),
      calc(2 * 100% / 3) calc(1 * 100% / 3),
      calc(3 * 100% / 3) calc(2 * 100% / 3);
  }
  63%,
  66.67% {
    background-position: calc(0 * 100% / 3) calc(1 * 100% / 3),
      calc(1 * 100% / 3) calc(1 * 100% / 3),
      calc(2 * 100% / 3) calc(1 * 100% / 3),
      calc(3 * 100% / 3) calc(1 * 100% / 3);
  }
  75% {
    background-position: calc(0 * 100% / 3) calc(0 * 100% / 3),
      calc(1 * 100% / 3) calc(1 * 100% / 3),
      calc(2 * 100% / 3) calc(1 * 100% / 3),
      calc(3 * 100% / 3) calc(1 * 100% / 3);
  }
  83.33% {
    background-position: calc(0 * 100% / 3) calc(0 * 100% / 3),
      calc(1 * 100% / 3) calc(0 * 100% / 3),
      calc(2 * 100% / 3) calc(1 * 100% / 3),
      calc(3 * 100% / 3) calc(1 * 100% / 3);
  }
  91.67% {
    background-position: calc(0 * 100% / 3) calc(0 * 100% / 3),
      calc(1 * 100% / 3) calc(0 * 100% / 3),
      calc(2 * 100% / 3) calc(0 * 100% / 3),
      calc(3 * 100% / 3) calc(1 * 100% / 3);
  }
  97%,
  100% {
    background-position: calc(0 * 100% / 3) calc(0 * 100% / 3),
      calc(1 * 100% / 3) calc(0 * 100% / 3),
      calc(2 * 100% / 3) calc(0 * 100% / 3),
      calc(3 * 100% / 3) calc(0 * 100% / 3);
  }
}

button {
  position: absolute;
  top: 50%;
  width: 80%;
  left: 10%;

  border: none;
  border-radius: 5px;
  background-color: var(--clr-offwhite);
  padding: 1rem 2rem;
}
</style>
