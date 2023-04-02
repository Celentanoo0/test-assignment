<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <header class="header">
    <div class="size-controller">
      <div class="logo">
        <img src="src/assets/logo.svg" alt="Logo" />
      </div>
      <div class="buttons">
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
.header {
  background: white;
  height: 60px;
}

.size-controller {
  height: 100%;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  padding: 0 0 0 16px;
}

.buttons {
  padding: 0 16px 0 0;
  &__button:last-child {
    margin: 0 0 0 10px;
  }
  & ul {
    display: flex;
  }
}
</style>
