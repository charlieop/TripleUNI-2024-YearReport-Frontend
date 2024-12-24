<template>
  <div class="page flex-col" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="group_2 content-block">
      <p class="textAni hide">你最常与xx见面的时间是
        <span class="font_2">XX</span>
      </p>
    </div>
    <img
      class="image pos"
      src="https://ide.code.fun/api/image?token=676a34ba797f850011f3ffc2&name=f42a24e1bf12fbf3d793644f3e6ae26a.png"
    />
    <div class="chart-wrapper" ref="chartRef"></div>
    
    <div class="flex-row nowrap items-center equal-division">
      <div class="equal-division-item flex-row items-center">
        <img
          class="shrink-0 image_3"
          src="https://ide.code.fun/api/image?token=676a34ba797f850011f3ffc2&name=80ade87bcf90ba8543f3e9051f39c823.png"
        />
        <p class="ml-6 font_4 textAni hide">你</p>
      </div>
      <div class="items-center equal-division-item">
        <img
          class="shrink-0 image_3"
          src="https://ide.code.fun/api/image?token=676a34ba797f850011f3ffc2&name=f004ea26bd3ee825426b09d834efda43.png"
        />
        <span class="font_4 ml-9 textAni hide">大家</span>
      </div>
    </div>
   
    <div class="self-end group_8 content-block">
      <p class="textAni hide"><span class="font_2">XX%</span>的日子里熬着夜刷噗噗</p>
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
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

const PAGE_NUMBER = 5
const showHint = ref(false)
const chartRef = ref(null)
const loading = ref(true)

const chartOption = {
  grid: {
    left: '5%',
    right: '5%',
    top: '10%',
    bottom: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
    axisLine: { lineStyle: { color: '#f9f5f0' } },
    axisLabel: { color: '#f9f5f0' }
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 100,
    interval: 25,
    axisLine: { lineStyle: { color: '#f9f5f0' } },
    axisLabel: { color: '#f9f5f0' },
    splitLine: { show: true, lineStyle: { color: '#ffffff1A' } }
  },
  series: [
    {
      name: '你',
      type: 'line',
      smooth: true,
      data: [30, 40, 60, 70, 80, 70, 60, 50, 40, 30, 20, 10],
      itemStyle: { color: '#7CB6B2' },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: '#7CB6B2AA' },
            { offset: 1, color: '#7CB6B211' }
          ]
        }
      }
    },
    {
      name: '大家',
      type: 'line',
      smooth: true,
      data: [20, 30, 40, 50, 60, 70, 80, 70, 60, 50, 40, 30],
      itemStyle: { color: '#FACB98' },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: '#FACB98AA' },
            { offset: 1, color: '#FACB9811' }
          ]
        }
      }
    }
  ]
}

let chart = null

const drawChart = () => {
  if (chartRef.value) {
    chart = echarts.init(chartRef.value)
    chart.setOption(chartOption)
    chart.resize()
    window.addEventListener('resize', () => {
      chart?.resize()
    })
  }
}

function init() {
  console.log(`Page ${PAGE_NUMBER} initialized`)
  loading.value = true
}

function onShow() {
  console.log(`Page ${PAGE_NUMBER} shown`)
  setTimeout(() => {
    drawChart()
    loading.value = false
  }, 200)

  let time = 0
  const delays = [0, 200, 600, 600, 600, 600, 600, 600] // 与原本style中delay对应

  const textList = Array.from(document.querySelectorAll(`.page${PAGE_NUMBER} .textAni`))
  textList.forEach((el, index) => {
    setTimeout(() => {
      el.classList.remove('hide')
    }, time += delays[index] ?? 200)
  })

  // 所有文字出现后再append
  setTimeout(() => {
    showHint.value = true
    appendNextPage(PAGE_NUMBER)
  }, time + 200)
}

onMounted(() => {
  init()
  onEnterViewportForFirstTime?.(PAGE_NUMBER, onShow)
})
</script>

<style scoped lang="css">
  .singleLine{
  display: inline-block;
  white-space: nowrap;
}
.chart-wrapper {
  width: 80%;
  height: 16vh;
  min-height: 100px;
  flex-shrink: 0;
  margin:0;
}
.nowrap{
  flex-wrap:nowrap;
  overflow:hidden;
}
.chart {
  width: 100%;
  height: 100% ;
  min-height: inherit;
}
  .ml-9 {
    margin-left: 0.56rem;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    overflow-y:hidden;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    
    overflow-y:hidden;
    overflow-x:hidden;
    
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-center {
    justify-content: center;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-center {
    align-items: center;
  }
  .items-baseline {
    align-items: baseline;
  }
  .items-stretch {
    align-items: stretch;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-center {
    align-self: center;
  }

  .self-stretch {
    align-self: stretch;
  }
  .shrink {
    flex-shrink: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .relative {
    position: relative;
  }
  .page {
    background-color: #39372a;
    width: 100%;
    margin:0;
    overflow: hidden;
  }
  .group {
    padding-top: 3.38rem;
  }
  .group_2 {
    margin-left: 0.38rem;
    margin-top:5rem;
  }
  .font_2 {
    font-size: 1.25rem;
    font-family: AaTangYuanTi;
    line-height: 1.5rem;
    color: #ffffff;
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
    line-height: 1.00rem;
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
    align-self: center;
    margin-top: 1.25rem;
  }
 
  .equal-division-item {
    padding: 0.13rem 0;
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
    
    margin-top: 2.63rem;
    text-align: right;
    margin-bottom:1rem;
  
  }
  .group_9 {
    margin-top: 2.63rem;
  }
  .image_4 {
    width: 4.63rem;
    height: 4.63rem;
  }
  

</style>
