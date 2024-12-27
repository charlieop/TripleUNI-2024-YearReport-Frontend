<template>
  <div class="page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="group_2 content-block">
      <p class="textAni hide">
        你最常与{{ appName }}见面的时间是
        <span class="accent">{{ mostActiveTime }}</span>
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
        <span class="font_2">{{ summary?.user_stayup_late_ratio }}% </span
        >的日子里熬着夜刷{{ appName }}
      </p>
      <template v-if="summary?.user_stayup_late_ratio > 40">
        <p class="textAni hide">不睡觉的时候</p>
        <p class="textAni hide">你都在想什么呢？</p>
        <p class="textAni hide">就你这个作息</p>
        <p class="textAni hide">不谈异国恋真是可惜了</p>
      </template>
      <template v-else>
        <p class="textAni hide">拥有者很多人做不到的</p>
        <p class="textAni hide">早睡早起健康生活</p>
        <p class="textAni hide">你肯定是个很自律的人吧</p>
        <p class="textAni hide">要坚持哦!</p>
      </template>
    </div>

    <ScrollUpHint v-if="showHint" />
    <Footer />
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
import { computed } from "vue";
const PAGE_NUMBER = 5;
const { summary, appName } = useSummary();

const showHint = ref(false);
const chartRef = ref(null);
const loading = ref(true);
const userHourDist = computed(() => {
  let distRaw = summary.value?.user_hour_distribution;
  if (typeof distRaw === "string") {
    try {
      distRaw = JSON.parse(distRaw);
    } catch (e) {
      console.error("解析 user_hour_distribution 出错：", e);
      distRaw = [];
    }
  }
  return Array.isArray(distRaw) ? distRaw.map(v => v * 100) : [];
});

// 解析 total_hour_distribution
const totalHourDist = computed(() => {
  return summary.value?.total_hour_distribution?.map(v => v * 100) ?? Array(24).fill(0);
});
const maxYValue = computed(() => {
  const maxU = userHourDist.value.length ? Math.max(...userHourDist.value) : 0;
  const maxT = totalHourDist.value.length ? Math.max(...totalHourDist.value) : 0;
  const rawMax = Math.max(maxU, maxT);
  const rounded = Math.ceil(rawMax / 5) * 5; 
  return rounded
});
const mostActiveTime = computed(() => {
  switch (summary.value?.user_most_active_period) {
    case "morning":
      return "早上";
    case "afternoon":
      return "下午";
    case "evening":
      return "晚上";
    case "midnight":
      return "深夜";
    default:
      return "未知时间";
  }
});

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
    // 修改为24小时
    data: Array.from({length: 24}, (_, i) => i),
    axisLine: { lineStyle: { color: "#000000aa" } },
    axisTick: {
      show: false,
    },
    axisLabel: { 
      color: "#f9f5f0",
      interval: 2 // 每隔2小时显示一个刻度
    },
    splitLine: {
      show: true,
      lineStyle: { color: "#00000040", type: "dashed" },
    },
  },
  yAxis: {
    type: "value",
    min: 0,
   max: maxYValue.value,  // 调整最大值以适应百分比数据
    interval: 5,
    axisLine: { lineStyle: { color: "#f9f5f0" } },
    axisLabel: { 
      color: "#f9f5f0",
      formatter: '{value}%' // 添加百分比符号
    },
    splitLine: {
      show: true,
      lineStyle: { color: "#00000040", type: "dashed" },
    },
  },
  series: [
    {
      name: "你",
      type: "line",
      smooth: true,
      symbol: "none",
      data: userHourDist.value,
      itemStyle: { color: "#FACB98" },
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "#FACB98AA" },
            { offset: 1, color: "#FACB9811" },
          ],
        },
      },
    },
    {
      name: "大家",
      type: "line",
      smooth: true,
      symbol: "none",
      // 替换这里的数据
      data: totalHourDist.value,
      itemStyle: { color: "#ddc5f7" },
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "#ddc5f7AA" },
            { offset: 1, color: "#ddc5f711" },
          ],
        },
      },
    }
  ]
}

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
  console.log(summary.value?.user_hour_distribution)
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
  height: 24vh;
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
