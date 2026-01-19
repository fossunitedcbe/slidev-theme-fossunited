<template>
  <div class="slidev-layout section">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.section {
  @apply flex flex-col justify-center items-center text-center bg-green-50;
}

.slidev-layout.section :deep(h1) {
  @apply text-6xl text-green-700;
}

.slidev-layout.section :deep(p) {
  @apply text-gray-500;
}
</style>
