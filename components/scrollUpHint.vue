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
  transform: translate(-50%, -50%);
  animation: hint 3s ease-in-out infinite;
}

@keyframes hint {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
    transform: translate(-50%, -50%) translateY(0.4rem);
  }
  30% {
    opacity: 0.5;
    transform: translate(-50%, -50%) translateY(0.4rem);
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  70% {
    opacity: 0.5;
    transform: translate(-50%, -50%) translateY(-0.4rem);
  }
  80% {
    opacity: 0;
    transform: translate(-50%, -50%) translateY(-0.4rem);
  }
  100% {
    opacity: 0;
  }
}
</style>
