<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="content-block pt1">
      <p class="hide">到今天</p>
      <p class="hide">
        {{ appName }}已经诞生<span class="figure">{{ appAge.year }}</span
        >年<span class="figure">{{ appAge.month }}</span
        >月<span class="figure">{{ appAge.day }}</span
        >日啦!
      </p>
      <div v-if="summary?.user_create_date != undefined">
        <p class="hide">
          <span class="figure">{{ userRegisterDate.year }}</span
          >年 <span class="figure">{{ userRegisterDate.month }}</span
          >月 <span class="figure">{{ userRegisterDate.day }}</span
          >日
        </p>
        <p class="hide">是你和{{ appName }}第一次见面的日子</p>
      </div>
      <div v-else>
        <p class="hide">我们已经认识了<span class="accent">很久了</span></p>
        <p class="hide">久到{{ appName }}都已经忘记和你第一次见面的日子</p>
      </div>
      <div v-if="summary?.user_age">
        <p class="hide">
          {{ appName }}与你相伴已经<span class="figure">{{
            summary?.user_create_date_till_now
          }}</span
          >天了
        </p>
        <p class="hide">还是如此一往情深 !</p>
      </div>
      <div v-else>
        <p class="hide">我们一路走来</p>
        <p class="hide">还是如此一往情深 !</p>
      </div>
      <p class="hide" v-if="summary?.user_create_date_rank">
        你是第<span class="figure">{{ summary?.user_create_date_rank }}</span
        >个注册{{ appName }}的用户
      </p>
      <p class="hide" style="text-wrap: unset" v-else>
        这些相伴的日子里，{{ appName }}永远是你安心的兔子洞
      </p>

      <div class="img-wrapper">
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/3/bg.svg"
          alt=""
          class="bg"
        />
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/3/bottle.svg"
          alt=""
          class="decor bottle hide"
        />
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/3/wave.svg"
          alt=""
          class="decor wave"
        />
        <img
          src="https://i.boatonland.com/report2024/assets/imgs/3/bird.svg"
          alt=""
          class="decor bird hide"
        />
      </div>
    </div>

    <div class="content-block pt2">
      <p class="text hide">——</p>
      <p class="text highlight hide">{{ appName }}我真是万人迷呀</p>
      <p class="hide">(得意)</p>
    </div>
    <ScrollUpHint v-if="showHint" />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const PAGE_NUMBER = 3;
const { summary, appName } = useSummary();

const hide = ref(true);
const showHint = ref(false);

const appAge = computed(() => {
  let date;
  switch (summary.value?.user_school_label.toUpperCase()) {
    case "HKU":
      date = new Date("2020-10-31");
      break;
    case "UST":
      date = new Date("2020-05-02");
      break;
    case "CUHK":
      date = new Date("2020-08-24");
      break;
    default:
      date = new Date("2023-07-28");
  }
  const diffTime = Date.now() - date;
  return {
    year: Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365)),
    month: Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    ),
    day: Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    ),
  };
});

const userRegisterDate = computed(() => {
  const date = new Date(summary.value?.user_create_date);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
});

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);
  sendViewPageTracking(PAGE_NUMBER);

  hide.value = false;

  let time = 0;

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 > p:nth-child(1)"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 > p:nth-child(2)"]);
  }, (time += 300));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".bottle"]);
  }, (time += 300));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div:nth-child(3) p:nth-child(1)"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div:nth-child(3) p:nth-child(2)"]);
  }, (time += 300));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div:nth-child(4) p:nth-child(1)"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 div:nth-child(4) p:nth-child(2)"]);
  }, (time += 300));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".bird"]);
  }, (time += 300));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt1 p:nth-child(5)"]);
  }, (time += 1200));

  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 > p:nth-child(1)"]);
  }, (time += 700));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 > p:nth-child(2)"]);
  }, (time += 300));
  setTimeout(() => {
    unhideAll(PAGE_NUMBER, [".pt2 > p:nth-child(3)"]);
  }, (time += 300));

  setTimeout(() => {
    showHint.value = true;
    appendNextPage(PAGE_NUMBER);
  }, (time += 500));
}

onMounted(() => {
  init();

  onEnterViewportForFirstTime(PAGE_NUMBER, onShow);
});
</script>

<style scoped>
p {
  text-wrap: balance;
}
.page3 {
  padding-top: 5%;
  background-color: var(--clr-green);
}
.content-block {
  gap: 0.375rem;
}

@media (min-height: 650px) {
  .content-block {
    gap: 0.75rem;
  }
}
@media (min-height: 730px) {
  .content-block {
    gap: 1rem;
  }
}
@media (min-height: 790px) {
  .content-block {
    gap: 0.75rem;
  }
}
@media (min-height: 850px) {
  .page3 {
    padding-top: 20%;
  }
}

.img-wrapper {
  width: 80%;
  margin-block: -18% -20%;
  scale: 1.3;
  position: relative;
}
.decor {
  top: 0;
  left: 0;
}
.bottle {
  animation: bottle 4s infinite, wave 5s infinite linear;
}
.wave {
  animation: wave 5s infinite linear;
}
@keyframes bottle {
  0% {
    transform: translateX(3px) rotate(-3deg);
  }
  50% {
    transform: translateX(-3px) rotate(3deg);
  }
  100% {
    transform: translateX(3px) rotate(-3deg);
  }
}
@keyframes wave {
  0% {
    translate: 0 -5px;
  }
  50% {
    translate: 0 5px;
  }
  100% {
    translate: 0 -5px;
  }
}
.bird {
  top: 10%;
  animation: bird 7s infinite;
}
@keyframes bird {
  0% {
    transform: translate(5rem, 0);
  }
  25% {
    transform: translate(2rem, 2rem);
  }
  50% {
    transform: translate(-10rem, -1rem);
  }
  51% {
    transform: translate(-10rem, -0.5rem) rotateY(180deg);
  }
  75% {
    transform: translate(-3rem, 2rem) rotateY(180deg);
  }
  100% {
    transform: translate(5rem, 0);
  }
}

.pt2 {
  text-align: center;
}
.text {
  font-size: 2rem;
}
.highlight {
  color: var(--clr-oragne);
}
</style>
