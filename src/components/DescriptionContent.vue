<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <div class="component">
    <section class="description description_margin">
      <h1>Test assignment for front-end developer</h1>
      <p>
        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
        with a vast understanding of User design thinking as they'll be building web interfaces with
        accessibility in mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <button-component button-name="Sign up" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
//setting photo as a bg and adding styles to it
.component {
  height: 500px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../assets/descriptionBG.jpeg') center;
  background-size: cover;
  position: relative;
}

//description block styling
.description {
  height: 100%;
  max-width: 380px;
  padding: 0 16px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  &_margin {
    margin: 40px auto;
  }
}
.description h1 {
  padding: 0;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  margin: 0 0 21px 0;
}
.description p {
  padding: 0;
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  margin: 0 0 32px 0;
}

@media (min-width: 768px) {
  .description_margin {
    margin: 89px auto;
  }
}

//styles for normal screens
@media (min-width: 1024px) {
  .description_margin {
    margin: 164px auto;
  }
  .component {
    height: 650px;
  }
}
</style>
