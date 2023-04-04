<script setup>
import DescriptionContent from '@/components/DescriptionContent.vue'
import UsersSection from '@/components/UsersSection.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'
import { ref } from 'vue'
const updateUsers = ref(false)
</script>

<template>
  <main class="main">
    <description-content />
    <users-section :updateUsers="updateUsers" @users-updated="updateUsers = false" />
    <registration-form @registration-successful="updateUsers = true" />
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
}
</style>
