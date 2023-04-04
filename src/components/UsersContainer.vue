<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import { computed, onMounted, reactive, ref, toRefs, watch } from 'vue'
import { getUsers } from '@/api'

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

const users = reactive([])
const maxUsersOnPage = ref(6)
const NEW_USERS_QUANTITY = 6
const addNewUsersIsPossible = ref(true)

onMounted(() => {
  getUsers(100).then(updateUsersArray)
  // users.sort((a, b) => a.registration_timestamp - b.registration_timestamp)
})

watch(updateUsers, () => {
  if (!updateUsers.value) {
    return
  }
  users.splice(0)
  maxUsersOnPage.value = 6
  getUsers(100).then(updateUsersArray)
  emit('users-updated')
})

const updateUsersArray = (data) => {
  for (const elem of data) {
    users.push(elem)
  }
}

const paginatedUsers = computed(() => {
  return users.slice(0, maxUsersOnPage.value)
})

const addUsersOnPage = () => {
  maxUsersOnPage.value += NEW_USERS_QUANTITY
  if (users.length <= maxUsersOnPage.value) {
    addNewUsersIsPossible.value = false
  }
}
</script>

<template>
  <div class="users-wrapper__users users">
    <div class="users__user user" v-for="user in paginatedUsers" :key="user.id">
      <div class="user__wrapper">
        <div class="user__profile-photo">
          <img :src="user.photo" alt="profile-photo" />
        </div>
        <div class="user__name">
          <p>{{ user.name }}</p>
        </div>
        <div class="user__description">
          <p>{{ user.position }}</p>
          <p>{{ user.email }}</p>
          <p>{{ user.phone }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="show-more-button">
    <button-component
      button-name="Show more"
      button-width="120"
      @click="addUsersOnPage"
      v-if="addNewUsersIsPossible"
    />
  </div>
</template>

<style lang="scss" scoped>
.show-more-button {
  margin: 50px 0 140px;
}

.users {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 16px;
  gap: 20px;
}

.user {
  background: white;
  border-radius: 10px;
  flex: 1 1 auto;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;

  &__wrapper {
    overflow: hidden;
    margin: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }

  &__profile-photo {
    width: 70px;
    img {
      border-radius: 50%;
    }
  }

  &__name p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 250px;
  }

  &__description p {
    font-size: 16px;
    line-height: 26px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 250px;
  }
}

@media (min-width: 767px) {
  .users {
    margin: 0 32px;
    gap: 16px;
  }
}
@media (min-width: 1024px) {
  .users {
    margin: 0 60px;
    gap: 29px;
  }
  .user {
    flex: 1 1 calc(33.333% - 29px);

    &__description p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 200px;
      margin: 0 auto;
    }
  }
}
@media (min-width: 2560px) {
  .users {
    margin: 0;
  }
}
</style>
