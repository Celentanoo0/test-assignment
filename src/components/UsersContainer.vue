<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import PreloaderComponent from '@/components/PreloaderComponent.vue'
import CustomTooltip from '@/components/CustomTooltip.vue'
import { computed, onMounted, reactive, ref, toRefs, watch } from 'vue'
import { getUsers, uploadUsers } from '@/api'

const props = defineProps({
  updateUsers: {
    required: false,
    type: Boolean
  }
})
const { updateUsers } = toRefs(props)

const emit = defineEmits({
  'users-updated': null
})

const users = reactive([])
const maxUsersOnPage = ref(6)
const addNewUsersIsPossible = ref(true)
const NEW_USERS_QUANTITY = 6

onMounted(() => {
  getUsers(100).then(updateUsersArray)
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

const paginatedUsers = computed(() => {
  return users.slice(0, maxUsersOnPage.value)
})

const updateUsersArray = (data) => {
  for (const elem of data) {
    users.push(elem)
  }
}

const addUsersOnPage = () => {
  maxUsersOnPage.value += NEW_USERS_QUANTITY
  if (users.length <= maxUsersOnPage.value) {
    uploadUsers().then((data) => {
      if (!data) {
        addNewUsersIsPossible.value = false
        return
      }
      updateUsersArray(data)
      users.sort((a, b) => b.registration_timestamp - a.registration_timestamp)
    })
  }
}
</script>

<template>
  <preloader-component v-if="!users.length" class="app-preloader" />
  <div class="users-wrapper__users users users_margin">
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
          <p>
            <custom-tooltip>{{ user.email }}</custom-tooltip>
          </p>
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
//styles for preloader component
.app-preloader {
  margin: 100px 0;
}

//styles for button component
.show-more-button {
  margin: 50px 0 140px;
}

//styles for users wrapper
.users {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  &_margin {
    margin: 0 16px;
  }
}

//styles for user block
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

//styles for tablets screens
@media (min-width: 767px) {
  .users {
    gap: 16px;
    &_margin {
      margin: 0 32px;
    }
  }
}

//styles for normal screens
@media (min-width: 1024px) {
  .users {
    gap: 29px;
    &_margin {
      margin: 0 60px;
    }
  }

  .user {
    flex: 1 1 calc(33.333% - 29px);

    &__name p,
    &__description p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 200px;
      margin: 0 auto;
    }
  }
}

//styles for wide screens
@media (min-width: 2560px) {
  .users {
    margin: 0;
  }
}
</style>
