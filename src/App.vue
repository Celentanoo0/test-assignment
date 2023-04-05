<script setup>
//todo:
// 2.error in upload input when file isn't a photo [DONE]
// 3.error in text input when incorrect data [DONE]
// 4.fix input radio [DONE]
// 5.problems with text wrap [DONE]
// 7.fix api getUsers, it doesnt work correctly (can display only last 100 users) [DONE]
// 8. implement User with this phone or email already exist validation [DONE]
// 11. check is api working correct when more than 100 users (sort!) [DONE]
// 1.email when hover to it
// 6.wait screen when users aren't loaded
// 9. refactor html,css, and js, if needed
// 10. pixel-perfect????
// 12. check is api working when there are more than 100 people are registered
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
