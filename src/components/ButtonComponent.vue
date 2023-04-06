<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  buttonName: {
    required: true,
    type: String,
    default: 'Button name'
  },
  buttonWidth: {
    required: false,
    type: String
  },
  buttonType: {
    required: false,
    type: String,
    default: 'button'
  }
})

const { buttonType, buttonName, buttonWidth } = toRefs(props)
</script>

<template>
  <input
    :type="buttonType"
    :value="buttonName"
    class="app-button"
    :style="{ width: buttonWidth + 'px' }"
  />
</template>

<style lang="scss" scoped>
.app-button {
  cursor: pointer;
  line-height: 26px;
  background: #f4e041;
  border-radius: 80px;
  padding: 4px 0;
  width: 100px;
  text-align: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  transition: all 0.2s;
  border: 0;
}
.app-button:hover {
  background: #ffe304;
}
.app-button:disabled {
  background: #b4b4b4;
  color: white;
}
</style>
