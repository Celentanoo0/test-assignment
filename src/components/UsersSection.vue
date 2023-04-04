<script setup>
import UsersContainer from '@/components/UsersContainer.vue'
import { toRefs } from 'vue'
const props = defineProps({
  updateUsers: {
    required: false,
    type: Boolean
  }
})
const emit = defineEmits({
  'users-updated': null
})
const { updateUsers } = toRefs(props)
</script>

<template>
  <section class="users-wrapper">
    <div class="users-wrapper__users-heading users-heading">
      <h1>Working with GET request</h1>
    </div>
    <users-container :updateUsers="updateUsers" @users-updated="emit('users-updated')" />
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
