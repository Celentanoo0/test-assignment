<script setup>
import HeaderSection from "@/components/HeaderSection.vue";
import MainSection from "@/components/MainSection.vue";
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
//*, *::before, *::after{
//  margin: 0;
//  padding: 0;
//  box-sizing: border-box;
//}
.wrapper{
  background: #F8F8F8;
}

.size-controller{
  max-width: 1170px;
  //min-height: 100vh; ???
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>