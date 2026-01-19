<template>
  <div class="slidev-layout quote">
    <div class="my-auto relative">
      <div class="quote-mark">“</div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.quote {
  @apply flex flex-col justify-center;
}

.slidev-layout.quote :deep(blockquote) {
  @apply relative text-3xl leading-loose whitespace-normal my-10 pl-12 py-6 border-l-4 border-primary;
  color: #1a1a1a;
}

.dark .slidev-layout.quote :deep(blockquote) {
  color: white;
}

.slidev-layout.quote :deep(blockquote p) {
  @apply m-0 leading-loose;
}

.slidev-layout.quote :deep(.attribution) {
  @apply text-xl font-medium mt-4 pl-12 opacity-80;
  color: #4a4a4a;
}

.dark .slidev-layout.quote :deep(.attribution) {
  color: #d1d1d1;
}

.slidev-layout.quote .quote-mark {
  @apply absolute -top-8 -left-4 text-8xl font-serif text-primary opacity-10 pointer-events-none select-none;
}
</style>
