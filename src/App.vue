<script setup>
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
//page bg-color
.wrapper {
  background: #f8f8f8;
}

//set max width of content on the page due to the markup. Content alignment
.size-controller {
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
