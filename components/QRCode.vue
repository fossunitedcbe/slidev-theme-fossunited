<script setup>
import QRious from 'qrious'
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  position: {
    type: String,
    default: 'bottom-right',
  },
  size: {
    type: Number,
    default: 300,
  },
  additionalClasses: {
    type: String,
    default: '',
  },
})

const qrcode = computed(() => {
  return new QRious({
    value: props.value,
    size: props.size,
  }).toDataURL()
})

const posClasses = computed(() => {
  switch (props.position) {
    case 'center':
      return 'flex items-center justify-center mx-70'
    case 'top-left':
      return 'absolute top-4 left-4'
    case 'top-right':
      return 'absolute top-4 right-4'
    case 'bottom-left':
      return 'absolute bottom-4 left-4'
    case 'bottom-right':
    default:
      return 'absolute bottom-4 right-4'
  }
})
</script>

<template>
  <div :class="['dark:bg-white dark:p-2', 'qrcode', posClasses, additionalClasses]">
    <slot />
    <img
      :src="qrcode"
      alt="QR Code"
      class="w-m inline-block"
    >
  </div>
</template>