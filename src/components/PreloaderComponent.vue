<script setup></script>

<template>
  <div class="app-preloader">
    <img src="src/assets/Preloader.svg" alt="preloader" />
  </div>
</template>

<style lang="scss" scoped>
.app-preloader {
  animation: spin 1.7s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
