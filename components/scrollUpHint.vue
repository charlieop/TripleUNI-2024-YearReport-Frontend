<template>
  <div class="hint-wrapper">
    <img src="/imgs/arrow.svg" alt="" />
  </div>
</template>

<script setup></script>

<style scoped>
.hint-wrapper {
  width: 4rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  translate: -2rem -2rem;
  animation: hint 3s ease-in-out infinite;
}

@keyframes hint {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
    bottom: 0.6rem;
  }
  30% {
    opacity: 0.5;
    bottom: 0.6rem;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  70% {
    opacity: 0.5;
    bottom: 1.4rem;
  }
  80% {
    opacity: 0;
    bottom: 1.4rem;
  }
  100% {
    opacity: 0;
  }
}
</style>
