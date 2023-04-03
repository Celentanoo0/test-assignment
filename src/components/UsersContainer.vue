<script setup>
import { onMounted, reactive } from 'vue'
import { getUsers } from '@/api'

onMounted(() => {
  getUsers().then((data) => {
    for (const elem of data) {
      users.push(elem)
    }
  })
  console.log(users)
})

const users = reactive([])
</script>

<template>
  <div class="users-wrapper__users users">
    <div class="users__user user" v-for="user in users" :key="user.id">
      <div class="user__wrapper">
        <div class="user__profile-photo">
          <img :src="user.photo" alt="profile-photo" />
        </div>
        <div class="user__name">
          <p>{{user.name}}</p>
        </div>
        <div class="user__description">
          <p>{{user.position}}</p>
          <p>{{user.email}}</p>
          <p>{{user.phone}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
