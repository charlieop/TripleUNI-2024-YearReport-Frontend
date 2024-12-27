<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="group_2 content-block">
      <p class="textAni hide">
        你最常与xx见面的时间是
        <span class="font_2">XX</span>
      </p>
    </div>
    <img class="image pos star-twinkle" src="/imgs/5/star out.webp" />
    <div class="chart-wrapper imgAni hide" ref="chartRef"></div>

    <div class="equal-division">
      <div class="equal-division-item">
        <img class="shrink-0 image_3 imgAni hide" src="/imgs/5/you.webp" />
        <p class="ml-9 font_4 textAni hide">你</p>
      </div>
      <div class="equal-division-item">
        <img class="shrink-0 image_3 imgAni hide" src="/imgs/5/all.webp" />
        <span class="font_4 ml-9 textAni hide">大家</span>
      </div>
    </div>

    <div class="group_8 content-block">
      <p class="textAni hide">
        <span class="font_2">XX%</span>的日子里熬着夜刷噗噗
      </p>
      <p class="textAni hide">不睡觉的时候</p>
      <p class="textAni hide">你都在想什么呢？</p>
      <p class="textAni hide">就你这个作息</p>
      <p class="textAni hide">不谈异国恋真是可惜了</p>
    </div>

    <ScrollUpHint v-if="showHint" />
    <Footer />
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { ref, onMounted } from "vue";

const PAGE_NUMBER = 5;
const showHint = ref(false);
const chartRef = ref(null);
const loading = ref(true);

const chartOption = {
  grid: {
    left: "5%",
    right: "5%",
    top: "10%",
    bottom: "10%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
    axisLine: { lineStyle: { color: "#f9f5f0" } },
    axisLabel: { color: "#f9f5f0" },
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 100,
    interval: 25,
    axisLine: { lineStyle: { color: "#f9f5f0" } },
    axisLabel: { color: "#f9f5f0" },
    splitLine: { show: true, lineStyle: { color: "#ffffff1A" } },
  },
series: [
  {
    name: "你",
    type: "line",
    smooth: true,
    data: [30, 40, 60, 70, 80, 70, 60, 50, 40, 30, 20, 10],
    itemStyle: { color: "#FACB98" }, // 改为橙色
    areaStyle: {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          { offset: 0, color: "#FACB98AA" }, // 改为橙色
          { offset: 1, color: "#FACB9811" }, // 改为橙色
        ],
      },
    },
  },
  {
    name: "大家",
    type: "line",
    smooth: true,
    data: [20, 30, 40, 50, 60, 70, 80, 70, 60, 50, 40, 30],
    itemStyle: { color: "#7CB6B2" }, // 改为绿色
    areaStyle: {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          { offset: 0, color: "#7CB6B2AA" }, // 改为绿色
          { offset: 1, color: "#7CB6B211" }, // 改为绿色
        ],
      },
    },
  }
],
};

let chart = null;

const drawChart = () => {
  if (chartRef.value) {
    chart = echarts.init(chartRef.value);
    chart.setOption(chartOption);
    chart.resize();
    window.addEventListener("resize", () => {
      chart?.resize();
    });
  }
};

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`);
  loading.value = true;
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`);
  setTimeout(() => {
    drawChart();
    loading.value = false;
  }, 200);

  let time = 0;
  const delays = [1000, 500, 0, 1500, 500, 500, 500, 500]; // 与原本style中delay对应

  const textList = Array.from(
    document.querySelectorAll(`.page${PAGE_NUMBER} .textAni`)
  );
  const imgList = Array.from(
    document.querySelectorAll(`.page${PAGE_NUMBER} .imgAni`)
  );
  imgList.forEach((el) => {
    setTimeout(() => {
      el.classList.remove("hide");
    }, 200);
  });
  textList.forEach((el, index) => {
    setTimeout(() => {
      el.classList.remove("hide");
    }, (time += delays[index] ?? 200));
  });

  // 所有文字出现后再append
  setTimeout(() => {
    showHint.value = true;
    appendNextPage(PAGE_NUMBER);
  }, time + 200);
  console.log(`Page ${PAGE_NUMBER} shown`);
}

onMounted(() => {
  init();
  onEnterViewportForFirstTime?.(PAGE_NUMBER, onShow);
});
</script>

<style scoped lang="css">
.imgAni {
  opacity: 0;
  clip-path: inset(0 100% 0 0);
  transition: clip-path 1.5s ease-out, opacity 1.5s ease-out;
}
.star-twinkle {
  /* 1.5s闪烁一次，前后交替、无限循环 */
  animation: flicker 1.5s infinite alternate ease-in-out;
}

/* 通过opacity和scale实现星星闪烁 */
@keyframes flicker {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.imgAni.hide {
  opacity: 0;
  clip-path: inset(0 100% 0 0);
}

.imgAni:not(.hide) {
  opacity: 1;
  clip-path: inset(0 0 0 0);
}

.singleLine {
  display: inline-block;
  white-space: nowrap;
}
.chart-wrapper {
  width: 100%; /* 设置合适的宽度 */
  margin: 0 auto; /* 水平居中 */
  display: flex;
  height:24vh;
  justify-content: center; /* 内容水平居中 */
  align-items: center; /* 内容垂直居中 */
}
.shrink-0 {
  flex-shrink: 0;
}

.page {
  background-color: #39372a;
  width: 100%;
  margin: 0;
  overflow: hidden;
}
.group {
  padding-top: 3.38rem;
}
.group_2 {
  margin-left: 0.38rem;
  margin-top: 5rem;
}

.text_2 {
  line-height: 1.16rem;
}
.font_2 {
  font-size: var(--fs-figure);
  font-family: var(--ff-primary);
  line-height: 2.69rem;
  color: var(--clr-text);
}

.text {
  line-height: 1rem;
}
.image {
  width: 8.69rem;
  height: 8.56rem;
}
.pos {
  position: absolute;
  right: 0;
  top: -1rem;
}
.group_3 {
  margin-top: 1.25rem;
}

.pos_13 {
  position: absolute;
  left: 0.74rem;
  right: 0.76rem;
  top: 0.77rem;
}

.equal-division {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  margin-top: 1.25rem;
}

.equal-division-item {
  padding: 0.13rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 1.2rem;
}
.image_3 {
  width: 3.34rem;
  height: 1.22rem;
}
.font_4 {
  font-size: 1rem;
  font-family: AaTangYuanTi;
  line-height: 0.91rem;
  color: #ffffff;
}
.group_8 {
  text-align: end;
  margin-top: 2.63rem;
  text-align: right;
  margin-bottom: 1rem;
}
.group_9 {
  margin-top: 2.63rem;
}
.image_4 {
  width: 4.63rem;
  height: 4.63rem;
}
</style>
