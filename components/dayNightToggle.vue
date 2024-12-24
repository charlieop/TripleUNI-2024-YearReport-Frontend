<template>
  <div class="day-night-toggle">
    <div class="day">
      <img src="/imgs/dayNightToggle/cloud2.svg" alt="" class="decor cloud2" />
      <img src="/imgs/dayNightToggle/cloud1.svg" alt="" class="decor cloud1" />
    </div>
    <div class="night">
      <img src="/imgs/dayNightToggle/stars.webp" alt="" class="decor stars" />
    </div>
    <div class="toggle">
      <div class="inner">
        <!-- <img src="/imgs/dayNightToggle/sun.svg" alt="" class="sun" /> -->
        <div class="sun"></div>
      </div>
      <div class="inner">
        <img src="/imgs/dayNightToggle/moon.webp" alt="" class="moon" />
      </div>
      <!-- <div class="inner">
        <img
          src="/imgs/dayNightToggle/shape.png"
          alt=""
          class="moon moon__full"
        />
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.day-night-toggle {
  --_opacity-day: 1;
  --_opacity-night: calc(1 - var(--_opacity-day));
  --_button-width: 250px;

  position: relative;
  width: var(--_button-width);
  aspect-ratio: 2.5 /1;
  border-radius: 999rem;
  overflow: clip;
}

.toggle {
  position: absolute;
  top: 0;
  left: calc(var(--_opacity-day) * 100%);
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 999rem;
  transform: translateX(calc(var(--_opacity-day) * -100%));

  transition: none;
}

.inner {
  position: absolute;
  top: 0;
  left: 0;
  --_margin: 0.5rem;
  margin: var(--_margin);
  width: calc(100% - var(--_margin) * 2);
  height: calc(100% - var(--_margin) * 2);
  border-radius: 999rem;

  /* background-color: red; */
}

.sun {
  transition: none;
  opacity: var(--_opacity-day);
  transform: scale(calc(0.6 + 0.4 * var(--_opacity-day)))
    rotate(calc(160deg * var(--_opacity-day)))
    translate(
      calc(2rem * var(--_opacity-night)),
      calc(3rem * var(--_opacity-night))
    );
  height: 100%;
  aspect-ratio: 1 / 1;
  background-color: #fcdc38;
  box-shadow: inset 0 2px 10px #c8a73ac2, 0 0 10px rgba(242, 213, 138, 0.5),
    0 0 30px rgba(242, 213, 138, 0.2);
  border-radius: inherit;
  filter: brightness(calc(0.5 + 0.5 * var(--_opacity-day)));
}
.moon {
  transition: none;
  scale: 1.3;
  opacity: var(--_opacity-night);
  transform: rotate(calc(20deg * var(--_opacity-day)))
    translate(
      calc(4rem * var(--_opacity-day)),
      calc(1rem * var(--_opacity-day))
    )
    rotate(calc(120deg * var(--_opacity-day)));
}
/* .moon__full {
  scale: 1.14;
  translate: 3px 1px;
  opacity: calc(1 - var(--_opacity-night));
  transition: opacity 0.1s;
} */

.day {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: #7cb6b2;
  transition: none;

  /* opacity: var(--_opacity-day); */
}
.day::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  border: 3px solid #749f9c;
}

.decor {
  transition: none;
}
.cloud1 {
  width: 40%;
  top: 35%;
  left: -7%;
  transform: translateX(calc(-3rem * var(--_opacity-night)));
}
.cloud2 {
  width: 35%;
  top: 50%;
  left: 16%;
  transform: translate(
    calc(-1rem * var(--_opacity-night)),
    calc(2.5rem * var(--_opacity-night))
  );
}
.stars {
  height: 90%;
  top: 5%;
  right: -3%;
  transform: translateX(calc(6rem * var(--_opacity-day)))
    scaleY(calc(0.6 + 0.4 * var(--_opacity-night)));
}

.night {
  /* display: none; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: #334b49;
  transition: none;

  opacity: var(--_opacity-night);
}
.night::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  border: 3px solid #78a9a6;
}
</style>
