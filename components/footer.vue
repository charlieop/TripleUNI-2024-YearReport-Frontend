<template>
  <div class="footer-wrapper">
    <p>@TripleUni 2024</p>
  </div>
</template>

<script setup></script>

<style scoped>
.footer-wrapper {
  --_clr-text: var(--clr-offwhite);
  color: var(--_clr-text, var(--clr-offwhite));
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  transform: translate(-50%, 0%);
  font-family: var(--ff-accent);
  font-size: var(--fs-primary);
}
</style>
