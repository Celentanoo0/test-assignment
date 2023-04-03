<script setup>
import UsersContainer from '@/components/UsersContainer.vue'
</script>

<template>
  <section class="users-wrapper">
    <div class="users-wrapper__users-heading users-heading">
      <h1>Working with GET request</h1>
    </div>
    <users-container />
  </section>
</template>

<style lang="scss" scoped>
.users-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.users-heading {
  margin: 140px 16px 50px;
  text-align: center;
  font-size: 40px;
  line-height: 40px;
  color: rgba(0, 0, 0, 0.87);
}
</style>
