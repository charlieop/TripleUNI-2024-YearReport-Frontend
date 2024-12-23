<template>
  <div class="flex-col page" :class="`page${PAGE_NUMBER}`" :id="`page${PAGE_NUMBER}`">
    <div class="flex-col self-stretch">
      <div class="flex-col self-center group">
        <div class="flex-row justify-end group_2">
          <img
            class="image"
            src="/imgs/4/1.svg"
          />
          <img
            class="self-start image_2"
            src="/imgs/4/2.svg"
          />
        </div>
        <div class="mt-12">
          <div class="textAni" style="animation-delay: 0.2s;">
          <span class="font_2">
            今年，你很爱xx
            </span>
          </div>
            <br />
       
          <span class="font"><br /></span>
          <div class="textAni" style="animation-delay: 0.8s;">
          <span class="font">你在xx登陆了</span>
          <span class="font_2">X</span>
          <span class="font">
            天
            <br />
          </span>
         </div>
         <div class="textAni" style="animation-delay: 1.4s;">
          <span class="font">一共使用xx</span>
          <span class="font_2">XX</span>
          <span class="font">
            分钟
            <br />
          </span>
        </div>
        <div class="textAni" style="animation-delay: 1.4s;">
          <span class="font">在校内排名第</span>
          <span class="font_2">XX</span>
          <span class="font">
            名
            <br />
          </span>
        </div>
        </div>
      </div>
      <div class="flex-col justify-start self-stretch relative group_3">
        <div class="flex-col section">
       
          <div class="flex-col justify-end self-end relative group_4">
            <div class="section_2"></div>
            <div class="group_5 pos_2">
              <div class="flex-row justify-end ">
             <div class="textAni" style="animation-delay: 2.0s;">
               <div class="singleLine">
                <span class="font_3">相当于看了</span>
                 <span class="font_2 text">XX</span>
                <span class="font_3">集
                
               </span>
              </div>
              <span class="font_3">《再见爱人》</span>
             </div>
              
              </div>
            </div>
          </div>
          <div class="flex-col justify-start items-start self-stretch relative group_6">
            <img
              class="image_5"
              src="/imgs/4/smiles.svg"
            />
            <img
              class="image_4 pos_3"
              src="/imgs/4/broken_heart.svg"
            />
          </div>
        </div>
        <img
          class="image_3 pos"
          src="/imgs/4/star_in.svg"
        />
      </div>
      
    </div>
    <ScrollUpHint v-if="showHint" />
      <Footer />
  </div>
</template>

<script setup>

import { reactive, onMounted } from 'vue';

const PAGE_NUMBER = 4;
const hide = ref(true)
const showHint = ref(false)

function init() {
  // 将所有 .textAni 的内容先隐藏
  const texts = document.querySelectorAll(`.page${PAGE_NUMBER} .textAni`)
  texts.forEach(el => el.classList.add('hide'))
}

function onShow() {
  hide.value = false
  let time = 0
  // 这里的延时数组可根据需要调整
  const delays = [0, 200, 600, 600, 600,]

  const textList = Array.from(
    document.querySelectorAll(`.page${PAGE_NUMBER} .textAni`)
  )
  textList.forEach((el, index) => {
    setTimeout(() => {
      unhide(el)
    }, (time += delays[index] ?? 200))
  })

  // 所有文字出现后可执行后续操作
  setTimeout(() => {
    showHint.value = true
    appendNextPage?.(PAGE_NUMBER)
  }, time + 200)
}

onMounted(() => {
  init()
  onEnterViewportForFirstTime?.(PAGE_NUMBER, onShow)
})
</script>


<style scoped>

.mt-12 {
    margin-top: 0.75rem;
  }
  .singleLine{
    white-space: nowrap;
    overflow: hidden;
    
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
  padding: 4.25rem 0 1.5rem;
  background-color: var(--clr-brown);
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.group {
  width: 18.09rem;
}
.group_2 {
  padding: 0 2.63rem;
}
.image {
  margin-right: -5.44rem;
  width: 4.13rem;
  height: 6.13rem;
}
.image_2 {
  margin-right: 3.88rem;
  margin-top: 2rem;
  width: 1.56rem;
  height: 1.31rem;
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
  margin-top: 2.25rem;
  padding: 4.38rem 0 4.13rem;
}
.section {
  padding: 1.41rem 3.44rem 0;
  background-image: url('imgs/4/white_background.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 8.75rem;
  width:100%;
}
.group_4 {
  margin-right: 0.5rem;
  padding-top: 1.88rem;
  width: 12.99rem;
}
.section_2 {
  width:100%;
  margin-left:-0.3rem;
  opacity: 0.9;
  background-image: radial-gradient(50% 50% at 50% 50%, #facb98 0%, #e8e8e8 92%);
  filter: blur(0.13rem);
  border-radius: 50%;
  height: 2.94rem;
}
.group_5 {
  text-align: center;
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
  margin-top: -1.38rem;
  padding: 0.38rem 0;
}
.image_5 {
  width: 4.06rem;
  height: 2.69rem;
}
.image_4 {
  width: 3.88rem;
  height: 3.44rem;
}
.pos_3 {
  position: absolute;
  left: 3.45rem;
  bottom: 0;
}
.image_3 {
  width: 21.88rem;
  height: 17.25rem;
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