<script setup>
//todo:
// 1.email when hover to it
// 2.error in upload input when file isn't a photo
// 3.error in text input when incorrect data
// 4.fix input radio
// 5.problems with text wrap
import HeaderSection from '@/components/HeaderSection.vue'
import MainSection from '@/components/MainSection.vue'
</script>

<template>
  <div class="wrapper">
    <header-section />
    <div class="size-controller">
      <main-section />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background: #f8f8f8;
}

.size-controller {
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
