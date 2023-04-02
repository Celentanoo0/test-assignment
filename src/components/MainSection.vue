<script setup>
import DescriptionContent from "@/components/DescriptionContent.vue";
import UsersSection from "@/components/UsersSection.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";
</script>

<template>
  <main class="main">
    <description-content />
    <users-section />
    <registration-form />
  </main>
</template>

<style lang="scss" scoped>
.main{
  display: flex;
  flex-direction: column;
}
</style>