<script setup>
import { ref } from 'vue'

const showTooltip = ref(false)
const tooltipText = ref('')

const handleMouseover = (event) => {
  if (tooltipText.value === '') {
    tooltipText.value = event.target.innerText
    showTooltip.value = true
  }
}

const handleMouseleave = () => {
  showTooltip.value = false
  tooltipText.value = ''
}
</script>

<template>
  <div @mouseover="handleMouseover" @mouseleave="handleMouseleave">
    <slot></slot>
    <div v-if="showTooltip" class="app-tooltip">{{ tooltipText }}</div>
  </div>
</template>

<style>
.app-tooltip {
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
