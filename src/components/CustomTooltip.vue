<script setup>
import { ref } from 'vue'

const showTooltip = ref(false)
const tooltipText = ref('')
let timeoutId = null

const handleMouseover = (event) => {
  timeoutId = setTimeout(() => {
    if (tooltipText.value === '') {
      tooltipText.value = event.target.innerText
      showTooltip.value = true
    }
  }, 500)
}

const handleMouseleave = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  showTooltip.value = false
  tooltipText.value = ''
}
</script>

<template>
  <div @mouseover="handleMouseover" @mouseleave="handleMouseleave" class="app-tooltip">
    <slot></slot>
    <div v-if="showTooltip" class="app-tooltip__tooltip-text">{{ tooltipText }}</div>
  </div>
</template>

<style>
.app-tooltip__tooltip-text {
  position: absolute;
  background: rgba(0, 0, 0, 0.87);
  color: white;
  padding: 3px 16px;
  border-radius: 4px;
  z-index: 9999;
  font-size: 16px;
  line-height: 26px;
}
</style>
