<template>
  <div class="slidev-layout code">
    <div class="w-full h-full flex flex-col">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.code {
  @apply p-6;
}
</style>
