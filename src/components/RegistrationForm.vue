<script setup>
import { computed, ref } from 'vue'

const nameField = ref('')
const emailField = ref('')
const phoneField = ref('')
const selectedOption = ref(null)

const submitButtonState = computed(() => {
  return (
    nameField.value === '' ||
    emailField.value === '' ||
    phoneField.value === '' ||
    selectedOption.value === null
  )
})
</script>

<template>
  <section class="form-wrapper">
    <div class="form-wrapper__form-heading form-heading">
      <h1>Working with POST request</h1>
    </div>
    <div class="form-wrapper__form form">
      <form action="submit-form.php" method="post" enctype="multipart/form-data">
        <div class="form__name form__item">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            v-model="nameField"
            required
          />
        </div>

        <div class="form__email form__item">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            v-model="emailField"
            required
          />
        </div>

        <div class="form__phone form__item">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            pattern="[0-9]{10}"
            v-model="phoneField"
            required
          />
        </div>

        <div class="form__position form__item">
          <div class="form__position-description">Select your position:</div>
          <div class="form__position-item radio-container">
            <input type="radio" id="fontend" name="position" v-model="selectedOption" />
            <label for="fontend">Frontend developer</label>
          </div>
          <div class="form__position-item radio-container">
            <input type="radio" id="backend" name="position" v-model="selectedOption" />
            <label for="backend">Backend developer</label>
          </div>
          <div class="form__position-item radio-container">
            <input type="radio" id="ui" name="position" v-model="selectedOption" />
            <label for="ui">Designer</label>
          </div>
          <div class="form__position-item radio-container">
            <input type="radio" id="qa" name="position" v-model="selectedOption" />
            <label for="qa">QA</label>
          </div>
        </div>

        <div class="form__image form__item">
          <input type="file" id="image" name="image" />
          <div class="form__upload-button upload-button">
            <label for="image" class="upload-button__left">Upload</label>
            <label for="image" class="upload-button__right">Upload your photo</label>
          </div>
        </div>

        <div class="form__submit form__item">
          <input type="submit" class="submit" value="Sign up" :disabled="submitButtonState" />
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.radio-container input[type='radio'] {
  display: none;
}

.radio-container input[type='radio'] + label:before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  border-radius: 50%;
  border: 1px solid #d0cfcf;
  vertical-align: middle;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
}

.radio-container input[type='radio']:checked + label:before {
  background: #00bdd3;
  border: 1px solid #00bdd3;
  padding: 0;
  box-shadow: inset 0 0 0 4px #fff;
}

.form-heading {
  margin: 0 16px 50px;
  color: rgba(0, 0, 0, 0.87);
  font-size: 40px;
  line-height: 40px;
  text-align: center;
}
.form {
  padding: 0 16px;
  max-width: 380px;
  margin: 0 auto;

  &__name,
  &__email,
  &__phone {
    display: flex;
  }
  &__name input,
  &__email input,
  &__phone input {
    padding: 14px 0 14px 16px;
    flex: 1 1 auto;
    border: 1px solid #d0cfcf;
    border-radius: 4px;
    color: #7e7e7e;
  }

  &__phone {
    position: relative;
  }
  &__phone:after {
    position: absolute;
    content: '+38 (XXX) XXX - XX - XX';
    font-size: 12px;
    line-height: 14px;
    color: #7e7e7e;
    top: 54px;
    left: 15px;
  }

  &__position {
    font-size: 16px;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.87);
  }
  &__position-item label {
    margin: 0 0 0 12px;
  }

  &__item {
    margin: 0 0 50px;
  }
  &__item:last-child {
    margin: 0 0 100px;
  }
  &__item input[type='file'] {
    display: none;
  }

  &__submit {
    display: flex;
    justify-content: center;
  }
}

.upload-button {
  font-size: 16px;
  line-height: 26px;
  display: flex;
  &__left {
    border: 1px solid rgba(0, 0, 0, 0.87);
    border-radius: 4px 0px 0px 4px;
    padding: 14px 15px;
    color: rgba(0, 0, 0, 0.87);
  }
  &__right {
    border: 1px solid #d0cfcf;
    border-radius: 0 4px 4px 0;
    padding: 14px 15px;
    color: rgba(126, 126, 126, 1);
    flex: 1 1 auto;
    text-align: left;
  }
}

.submit {
  cursor: pointer;
  display: inline-block;
  line-height: 26px;
  background: #f4e041;
  border-radius: 80px;
  border: none;
  padding: 4px 0;
  width: 100px;
  text-align: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  transition: all 0.2s;
}
.submit:hover {
  background: #ffe304;
}
.submit:disabled {
  background: #b4b4b4;
  color: white;
}
</style>