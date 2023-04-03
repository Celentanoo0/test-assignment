<script setup></script>

<template>
  <div class="users-wrapper__users users">
    <div class="users__user user">
      <div class="user__wrapper">
        <div class="user__profile-photo">
          <img src="src/assets/photo-cover.svg" alt="profile-photo" />
        </div>
        <div class="user__name">
          <p>Ilya</p>
        </div>
        <div class="user__description">
          <p>Co-Founder and CEO</p>
          <p>Ilya_founder@gmail.com</p>
          <p>+38 (098) 235 44 24</p>
        </div>
      </div>
    </div>
    <div class="users__user user">
      <div class="user__wrapper">
        <div class="user__profile-photo">
          <img src="src/assets/photo-cover.svg" alt="profile-photo" />
        </div>
        <div class="user__name">
          <p>Ilya</p>
        </div>
        <div class="user__description">
          <p>Co-Founder and CEO</p>
          <p>Ilya_founder@gmail.com</p>
          <p>+38 (098) 235 44 24</p>
        </div>
      </div>
    </div>
    <div class="users__user user">
      <div class="user__wrapper">
        <div class="user__profile-photo">
          <img src="src/assets/photo-cover.svg" alt="profile-photo" />
        </div>
        <div class="user__name">
          <p>Ilya</p>
        </div>
        <div class="user__description">
          <p>Co-Founder and CEO</p>
          <p>Ilya_founder@gmail.com</p>
          <p>+38 (098) 235 44 24</p>
        </div>
      </div>
    </div>
    <div class="users__user user">
      <div class="user__wrapper">
        <div class="user__profile-photo">
          <img src="src/assets/photo-cover.svg" alt="profile-photo" />
        </div>
        <div class="user__name">
          <p>Ilya</p>
        </div>
        <div class="user__description">
          <p>Co-Founder and CEO</p>
          <p>Ilya_founder@gmail.com</p>
          <p>+38 (098) 235 44 24</p>
        </div>
      </div>
    </div>
    <div class="users__user user">
      <div class="user__wrapper">
        <div class="user__profile-photo">
          <img src="src/assets/photo-cover.svg" alt="profile-photo" />
        </div>
        <div class="user__name">
          <p>Ilya</p>
        </div>
        <div class="user__description">
          <p>Co-Founder and CEO</p>
          <p>Ilya_founder@gmail.com</p>
          <p>+38 (098) 235 44 24</p>
        </div>
      </div>
    </div>
    <div class="users__user user">
      <div class="user__wrapper">
        <div class="user__profile-photo">
          <img src="src/assets/photo-cover.svg" alt="profile-photo" />
        </div>
        <div class="user__name">
          <p>Ilya</p>
        </div>
        <div class="user__description">
          <p>Co-Founder and CEO</p>
          <p>Ilya_founder@gmail.com</p>
          <p>+38 (098) 235 44 24</p>
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
}

.user {
  background: white;
  border-radius: 10px;
  flex: 1 1 auto;
  margin: 0 16px 16px;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;

  &__wrapper {
    overflow: hidden;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__profile-photo {
    width: 70px;
    margin: 0 0 20px 0;
  }

  &__name {
    margin: 0 0 20px 0;
  }

  &__description{
  }
  &__description p {
    font-size: 16px;
    line-height: 26px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width:250px;
    margin: 0 auto;
  }

  &:last-child {
    margin: 0 16px;
  }
}
</style>
