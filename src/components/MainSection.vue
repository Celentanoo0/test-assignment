<script setup>
import DescriptionContent from '@/components/DescriptionContent.vue'
import UsersSection from '@/components/UsersSection.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'
import { ref } from 'vue'

const updateUsers = ref(false)

const usersUpdateRequest = () => {
  updateUsers.value = true
}

const usersSectionUpdated = () => {
  updateUsers.value = false
}
</script>

<template>
  <main class="main">
    <description-content />
    <users-section :updateUsers="updateUsers" @users-updated="usersSectionUpdated" />
    <registration-form @registration-successful="usersUpdateRequest" />
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
}
</style>
