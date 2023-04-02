<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  buttonWidth: {
    required: false,
    type: String
  }
})

const { buttonWidth } = toRefs(props)
</script>

<template>
  <div class="button" :style="{ width: buttonWidth + 'px' }">
    <slot>ButtonName</slot>
  </div>
</template>

<style lang="scss" scoped>
.button {
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
}
.button:hover {
  background: #ffe304;
}
.button:disabled {
  background: #b4b4b4;
  color: white;
}
</style>
