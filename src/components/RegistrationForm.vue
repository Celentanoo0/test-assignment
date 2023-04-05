<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { getPositions, registrationRequest } from '@/api'
import ButtonComponent from '@/components/ButtonComponent.vue'

const emit = defineEmits({
  'registration-successful': null
})

const nameField = ref('')
const emailField = ref('')
const phoneField = ref('')
const selectedOption = ref(null)
const uploadedPhoto = ref(null)
const registrationSuccessful = ref(false)
const positions = reactive([])
const fieldsToValidate = reactive({
  name: {
    validationError: false,
    errorText: ''
  },
  email: {
    validationError: false,
    errorText: ''
  },
  phone: {
    validationError: false,
    errorText: ''
  },
  photo: {
    validationError: false,
    errorText: ''
  }
})

const PHONE_EMAIL_VALIDATION_ERROR = 'User with this phone or email already exist'

const handleRegistration = async () => {
  const response = await registrationRequest(
    nameField.value,
    emailField.value,
    phoneField.value,
    selectedOption.value,
    uploadedPhoto.value
  )

  if (response.success) {
    registrationSuccessful.value = true
    for (const [keyName, value] of Object.entries(fieldsToValidate)) {
      fieldsToValidate[keyName].validationError = false
      fieldsToValidate[keyName].errorText = ''
    }
    emit('registration-successful')
    return
  }

  if(response.message === PHONE_EMAIL_VALIDATION_ERROR){
      const errorFields = ['email', 'phone'];
      for(const elem of errorFields){
          fieldsToValidate[elem].validationError = true;
          fieldsToValidate[elem].errorText = PHONE_EMAIL_VALIDATION_ERROR;
      }
      phoneField.value = '';
      emailField.value = '';
  }

  for (const [keyName, value] of Object.entries(fieldsToValidate)) {
    if (response.fails && Object.prototype.hasOwnProperty.call(response.fails, keyName)) {
      fieldsToValidate[keyName].validationError = true
      fieldsToValidate[keyName].errorText = response.fails[keyName][0]
    }
  }
}

onMounted(() => {
  getPositions().then((data) => {
    for (const elem of data) {
      positions.push(elem)
    }
  })
})

const submitButtonState = computed(() => {
  return (
    nameField.value === '' ||
    emailField.value === '' ||
    phoneField.value === '' ||
    selectedOption.value === null ||
    uploadedPhoto.value === null
  )
})

const positionNameWithoutSpaces = (posName) => {
  return posName.split(' ').join('_')
}

const uploadedPhotoName = computed(() => {
  return uploadedPhoto.value ? uploadedPhoto.value.name : 'Upload your photo'
})

const onPhotoSelected = (event) => {
  if (event && event.target && event.target.files && event.target.files[0]) {
    uploadedPhoto.value = event.target.files[0]
  }
}
</script>

<template>
  <div class="form-wrapper__reg-successful reg-successful" v-if="registrationSuccessful">
    <div class="reg-successful__text">
      <h1>User successfully registered</h1>
    </div>
    <div class="reg-successful__image">
      <img src="src/assets/success-image.svg" alt="reg" />
    </div>
  </div>
  <section class="form-wrapper" v-if="!registrationSuccessful">
    <div class="form-wrapper__form-heading form-heading">
      <h1>Working with POST request</h1>
    </div>
    <div class="form-wrapper__form form">
      <form action="#" method="post" enctype="multipart/form-data">
        <div
          class="form__name form__item"
          :class="{ 'validation-fail': fieldsToValidate.name.validationError }"
        >
          <input type="text" id="name" name="name" placeholder="Your name" v-model="nameField" />
          <p class="form__validation-fail-text" v-if="fieldsToValidate.name.validationError">
            {{ fieldsToValidate.name.errorText }}
          </p>
        </div>

        <div
          class="form__email form__item"
          :class="{ 'validation-fail': fieldsToValidate.email.validationError }"
        >
          <input type="email" id="email" name="email" placeholder="Email" v-model="emailField" />
          <p class="form__validation-fail-text" v-if="fieldsToValidate.email.validationError">
            {{ fieldsToValidate.email.errorText }}
          </p>
        </div>

        <div
          class="form__phone form__item"
          :class="{ 'validation-fail': fieldsToValidate.phone.validationError }"
        >
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            pattern="\+380\d{9}"
            v-model="phoneField"
          />
          <p class="form__phone-placeholder" v-if="!fieldsToValidate.phone.validationError">
            +38 (XXX) XXX - XX - XX
          </p>
          <p class="form__validation-fail-text" v-if="fieldsToValidate.phone.validationError">
            {{ fieldsToValidate.phone.errorText }}
          </p>
        </div>

        <div class="form__position form__item">
          <div class="form__position-description">Select your position:</div>
          <div
            class="form__position-item radio-container"
            v-for="position in positions"
            :key="position.id"
          >
            <input
              type="radio"
              :id="positionNameWithoutSpaces(position.name)"
              name="position"
              @click="selectedOption = position.id"
            />
            <label :for="positionNameWithoutSpaces(position.name)">{{ position.name }}</label>
          </div>
        </div>

        <div class="form__image form__item">
          <input type="file" accept="image/*" id="image" name="image" @change="onPhotoSelected" />
          <div class="form__upload-button upload-button">
            <label
              for="image"
              class="upload-button__left"
              :class="{ error: fieldsToValidate.photo.validationError }"
              >Upload</label
            >
            <p
              v-if="fieldsToValidate.photo.validationError"
              class="upload-button__validation-error"
            >
              {{ fieldsToValidate.photo.errorText }}
            </p>
            <label
              for="image"
              class="upload-button__right"
              :class="{ error: fieldsToValidate.photo.validationError }"
              >{{ uploadedPhotoName }}</label
            >
          </div>
        </div>

        <div class="form__submit form__item">
          <button-component
            button-type="submit"
            button-name="Sign up"
            :disabled="submitButtonState"
            @click.prevent="handleRegistration"
          />
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.reg-successful {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 0 0 100px 0;
  &__text {
    font-size: 40px;
    line-height: 40px;
    color: rgba(0, 0, 0, 0.87);
    text-align: center;
  }
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
    background: #f8f8f8;
  }

  &__name.validation-fail,
  &__email.validation-fail,
  &__phone.validation-fail {
    border: 2px solid rgba(203, 61, 64, 1);
    border-radius: 4px;
  }

  &__validation-fail-text {
    position: absolute;
    top: 55px;
    left: 18px;
    font-size: 12px;
    line-height: 14px;
    color: #cb3d40;
  }

  &__phone {
    position: relative;
  }
  &__phone-placeholder {
    position: absolute;
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
  &__position-description {
    margin: 0 0 11px 0;
  }
  &__position-item label {
    margin: 0 0 0 12px;
  }
  &__position-item {
    margin: 0 0 7px 0;
  }
  &__position-item:last-child {
    margin: 0;
  }

  &__item {
    margin: 0 0 50px;
    position: relative;
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
  position: relative;
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
  &__validation-error {
    color: rgba(203, 61, 64, 1);
    font-size: 12px;
    line-height: 14px;
    position: absolute;
    top: 63px;
    left: 18px;
  }
}
.upload-button {
  &__left.error {
    border: 2px solid rgba(203, 61, 64, 1);
    border-right: 0px;
  }
  &__right.error {
    border: 2px solid rgba(203, 61, 64, 1);
  }
}

.radio-container input[type='radio'] {
  display: none;
}
.radio-container {
  display: flex;
  align-items: center;
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
</style>
