<template>
  <div class="christmas-tree-wrapper">
    <div class="snow-flakes-1"></div>
    <div class="snow-flakes-2"></div>
    <div class="tree-container">
      <div class="ball-0"></div>
      <div class="tree-p1">
        <ul>
          <li>
            <div class="xmas-ball ball-1"></div>
            <div class="tree-left-branch"></div>
          </li>
          <li><div class="tree-right-branch"></div></li>
        </ul>
      </div>
      <div class="tree-p2">
        <ul>
          <li>
            <div class="xmas-ball ball-2"></div>
            <div class="tree-left-branch"></div>
          </li>
          <li>
            <div class="xmas-ball ball-3"></div>
            <div class="tree-right-branch"></div>
          </li>
        </ul>
      </div>
      <div class="tree-p3">
        <ul>
          <li>
            <div class="xmas-ball ball-6"></div>
            <div class="tree-left-branch"></div>
          </li>
          <li>
            <div class="xmas-ball ball-5"></div>
            <div class="xmas-ball ball-4"></div>
            <div class="tree-right-branch"></div>
          </li>
        </ul>
      </div>
      <div class="tree-p4">
        <ul>
          <li>
            <div class="xmas-ball ball-7"></div>
            <div class="xmas-ball ball-8"></div>
            <div class="tree-left-branch"></div>
          </li>
          <li>
            <div class="xmas-ball ball-9"></div>
            <div class="xmas-ball ball-10"></div>
            <div class="tree-right-branch stubborn"></div>
          </li>
        </ul>
      </div>
      <div class="wood"></div>
    </div>
  </div>
</template>

<style scoped>
.christmas-tree-wrapper {
  scale: 1.1;
  translate: 0 5%;
}

ul li {
  display: inline-block;
}

/*
-- Snow --
*/
.snow-flakes-1,
.snow-flakes-2 {
  height: 5px;
  width: 5px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  z-index: 20;
  background-color: transparent;
  opacity: 1;
}

.snow-flakes-1 {
  top: 0;
  opacity: 0;
  box-shadow: 453px 577px 6px 3px #fff, 498px 625px 6px 4px #fff,
    70px 486px 6px 4px #fff, 158px 291px 6px 2px #fff, 56px 152px 6px 3px #fff,
    131px 272px 6px 5px #fff, 368px 33px 6px 6px #fff, 434px 402px 6px 8px #fff,
    384px 186px 6px 3px #fff, 274px 405px 6px 3px #fff, 68px 359px 6px 4px #fff,
    130px 546px 6px 8px #fff, 223px 224px 6px 6px #fff, 678px 176px 6px 7px #fff,
    641px 205px 6px 5px #fff, 691px 635px 6px 8px #fff, 59px 307px 6px 3px #fff,
    266px 101px 6px 3px #fff, 631px 490px 6px 4px #fff, 53px 171px 6px 8px #fff,
    72px 367px 6px 5px #fff, 81px 369px 6px 5px #fff, 610px 361px 6px 7px #fff,
    544px 240px 6px 6px #fff, 123px 372px 6px 4px #fff, 56px 500px 6px 8px #fff,
    658px 639px 6px 4px #fff, 85px 508px 6px 7px #fff, 58px 600px 6px 8px #fff,
    213px 359px 6px 1px #fff;
  animation: moveDown 10s ease infinite;
}

.snow-flakes-2 {
  top: -700px;
  opacity: 0;
  box-shadow: 136px 530px 6px 7px #fff, 101px 99px 6px 4px #fff,
    205px 670px 6px 5px #fff, 521px 199px 6px 3px #fff, 510px 341px 6px 6px #fff,
    380px 540px 6px 8px #fff, 29px 505px 6px 3px #fff, 391px 194px 6px 6px #fff,
    337px 151px 6px 7px #fff, 43px 48px 6px 4px #fff, 274px 315px 6px 6px #fff,
    183px 317px 6px 4px #fff, 522px 320px 6px 7px #fff, 35px 567px 6px 1px #fff,
    20px 378px 6px 2px #fff, 519px 498px 6px 4px #fff, 328px 120px 6px 1px #fff,
    253px 640px 6px 6px #fff, 88px 158px 6px 5px #fff, 695px 278px 6px 5px #fff,
    540px 235px 6px 2px #fff, 34px 637px 6px 1px #fff, 353px 416px 6px 1px #fff,
    551px 336px 6px 6px #fff, 217px 562px 6px 8px #fff, 1px 440px 6px 8px #fff,
    588px 163px 6px 1px #fff, 77px 508px 6px 1px #fff, 163px 682px 6px 7px #fff,
    525px 596px 6px 1px #fff;
  animation: moveDown 8s ease infinite;
  animation-delay: 2s;
}

/*
-- Xmas Balls
*/
.xmas-ball {
  border-radius: 50%;
  position: absolute;
  z-index: 5;
}

.ball-0 {
  animation: Blink 3s infinite;
  filter: brightness(1.1);
}

.ball-3,
.ball-6,
.ball-9 {
  animation: Blink 3s infinite;
}
.ball-1,
.ball-4,
.ball-7,
.ball-10 {
  animation: Blink 2s infinite;
}
.ball-2,
.ball-5,
.ball-8 {
  animation: Blink 4s infinite;
}

.ball-0 {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: #fbc02d;
  border: 6px solid #f9a825;
  margin: auto;
  position: relative;
  top: 15px;
  z-index: 6;

  border: none;
}

.ball-1 {
  height: 20px;
  width: 20px;
  background-color: #f48fb1;
  border: 4px solid #f06292;
  bottom: 22px;
  right: 10px;

  border: none;
}

.ball-2 {
  height: 15px;
  width: 15px;
  background-color: #b39ddb;
  border: 4px solid #9575cd;
  bottom: 26px;
  right: 55px;

  border: none;
}

.ball-3 {
  height: 30px;
  width: 30px;
  background-color: #90caf9;
  border: 4px solid #64b5f6;
  bottom: 50px;
  left: 18px;

  border: none;
}

.ball-4 {
  height: 25px;
  width: 25px;
  background-color: #90caf9;
  border: 4px solid #64b5f6;
  bottom: 20px;
  left: 70px;

  border: none;
}

.ball-5 {
  height: 15px;
  width: 15px;
  background-color: #ffab91;
  border: 4px solid #ff8a65;
  top: 6px;
  left: 0px;

  border: none;
}

.ball-6 {
  height: 20px;
  width: 20px;
  background-color: #66bb6a;
  border: 4px solid #4caf50;
  top: 51px;
  right: 73px;

  border: none;
}

.ball-7 {
  height: 10px;
  width: 10px;
  background-color: #90caf9;
  border: 4px solid #64b5f6;
  top: 18px;
  right: 90px;

  border: none;
}

.ball-8 {
  height: 15px;
  width: 15px;
  background-color: #f48fb1;
  border: 4px solid #f06292;
  top: 30px;
  right: 15px;

  border: none;
}

.ball-9 {
  height: 10px;
  width: 10px;
  background-color: #b39ddb;
  border: 4px solid #9575cd;
  top: 8px;
  left: 30px;

  border: none;
}

.ball-10 {
  height: 20px;
  width: 20px;
  background-color: #ffab91;
  border: 4px solid #ff8a65;
  top: 25px;
  right: 90px;

  border: none;
}

/*
-- Tree Styles
*/
.tree-container {
  bottom: 12px;
  position: relative;
}

.tree-p1,
.tree-p2,
.tree-p3,
.tree-p4 {
  text-align: center;
}

.tree-p1 li,
.tree-p2 li,
.tree-p3 li,
.tree-p4 li {
  overflow: hidden;
}

.tree-p1 li:first-child,
.tree-p2 li:first-child,
.tree-p3 li:first-child,
.tree-p4 li:first-child {
  position: relative;
  left: 5px;
}

.tree-p1 li:nth-child(2),
.tree-p2 li:nth-child(2),
.tree-p3 li:nth-child(2),
.tree-p4 li:nth-child(2) {
  position: relative;
  right: 5px;
}

.tree-left-branch,
.tree-right-branch {
  background-color: #2e7d32;
  background-color: var(--clr-green);

  position: relative;
}

.tree-left-branch {
  transform: skew(-30deg);
  left: 60px;
  border-bottom-left-radius: 25px;
  border: none;
}

.tree-right-branch {
  transform: skew(30deg);
  right: 60px;
  border-bottom-right-radius: 25px;
  border: none;
  overflow: clip;
}

.tree-left-branch::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #062f0e3a;
  transform: translate(-50%);
  z-index: 10;
}
.tree-right-branch::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #062f0e3a;
  transform: translate(-50%);
  z-index: 10;
}

.tree-right-branch::after {
  content: "";
  position: absolute;
  height: 100%;
  z-index: 10;
  background-color: rgba(27, 94, 32, 0.2);
  right: 0;
  border-bottom-right-radius: 15px;
}

.tree-right-branch:first-child::after {
  width: 15px;
}

.tree-right-branch:nth-child(2)::after {
  width: 20px;
}

.tree-right-branch:nth-child(3)::after {
  width: 25px;
}

.tree-right-branch.stubborn::after {
  width: 30px;
}

/*
-- Tree Part 1 Sizes
*/
.tree-p1 .tree-left-branch,
.tree-p1 .tree-right-branch {
  width: 100px;
  height: 110px;
}

.tree-p1 ul {
  height: 109px;
}

/*
-- Tree Part 2 Sizes
*/
.tree-p2 .tree-left-branch,
.tree-p2 .tree-right-branch {
  width: 140px;
  height: 95px;
}

.tree-p2 ul {
  height: 94px;
}

/*
-- Tree Part 3 Sizes
*/
.tree-p3 {
  z-index: 1;
}

.tree-p3 .tree-left-branch,
.tree-p3 .tree-right-branch {
  width: 165px;
  height: 85px;
}

.tree-p3 ul {
  height: 84px;
}

/*
-- Tree Part 4 Sizes
*/
.tree-p4 {
  z-index: 2;
  position: relative;
}

.tree-p4 .tree-left-branch,
.tree-p4 .tree-right-branch {
  width: 188px;
  height: 70px;
}

.tree-p4 ul {
  height: 70px;
}

/*
-- Tree Wood Styles
*/
.wood {
  height: 70px;
  width: 55px;
  background-color: #a98274;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  margin: auto;
  position: relative;
  border: none;
  overflow: clip;
}

.wood::before {
  content: "";
  position: absolute;
  height: 100%;
  z-index: 1;
  background-color: rgba(121, 85, 72, 0.2);
  width: 25px;
  right: 0;
}

/*
-- Blink Xmas Balls
*/
@keyframes Blink {
  50% {
    filter: brightness(1.3);
  }
}

/*
-- Snow Fall
*/
@keyframes moveDown {
  0% {
    transform: translateY(-40em);
    opacity: 1;
  }
  25% {
    opacity: 0.8;
  }
  50% {
    box-shadow: 598px 565px 6px 8px #fff, 563px 297px 6px 4px #fff,
      700px 240px 6px 8px #fff, 5px 595px 6px 8px #fff, 520px 555px 6px 8px #fff,
      222px 67px 6px 4px #fff, 262px 467px 6px 6px #fff,
      296px 534px 6px 7px #fff, 575px 380px 6px 3px #fff, 69px 5px 6px 5px #fff,
      299px 649px 6px 2px #fff, 333px 625px 6px 4px #fff,
      407px 460px 6px 3px #fff, 122px 551px 6px 1px #fff,
      156px 430px 6px 1px #fff, 154px 9px 6px 3px #fff, 309px 217px 6px 2px #fff,
      260px 570px 6px 4px #fff, 504px 566px 6px 6px #fff,
      33px 661px 6px 8px #fff, 59px 49px 6px 1px #fff, 627px 26px 6px 4px #fff,
      386px 617px 6px 8px #fff, 60px 160px 6px 8px #fff, 265px 74px 6px 7px #fff,
      110px 13px 6px 3px #fff, 62px 563px 6px 4px #fff, 486px 608px 6px 1px #fff,
      238px 619px 6px 4px #fff, 182px 350px 6px 7px #fff;
    opacity: 0.6;
  }
  75% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(30em);
    opacity: 0.1;
  }
}
</style>
