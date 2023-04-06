<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <header class="header">
    <div class="size-controller">
      <div class="header__logo logo logo_margin">
        <img src="../assets/logoImage.svg" alt="Logo" />
      </div>
      <div class="header__buttons buttons buttons_margin">
        <nav>
          <ul>
            <button-component class="buttons__button button" button-name="Users" />
            <button-component class="buttons__button button" button-name="Sign up" />
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
//header bg and height
.header {
  background: white;
  height: 60px;
}

//set max width of header due to the markup. Content alignment
.size-controller {
  height: 100%;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

//margin for logo
.logo_margin {
  margin: 0 0 0 16px;
}

//buttons block styles
.buttons {
  &_margin {
    margin: 0 16px 0 0;
  }
  &__button:last-child {
    margin: 0 0 0 10px;
  }
  & ul {
    display: flex;
  }
}

//styles for tablets
@media (min-width: 768px) {
  .logo,
  .buttons {
    margin: 0 32px;
  }
}

//styles for default screens
@media (min-width: 1024px) {
  .logo,
  .buttons {
    margin: 0 60px;
  }
}

//styles for wide screens
@media (min-width: 2560px) {
  .logo,
  .buttons {
    margin: 0;
  }
}
</style>
