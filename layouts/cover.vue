<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  background?: string;
}>();

const style = computed(() => {
  if (props.background) {
    return {
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${props.background})`,
      backgroundSize: "cover",
    };
  }
  return {};
});
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <div class="my-auto w-full max-w-4xl text-gray-400 dark:text-gray-400">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.cover {
  @apply flex flex-col justify-center items-start text-left dark:bg-black-500;
  /* background: ; */
  position: relative;
  overflow: hidden;
}

.slidev-layout.cover::after {
  content: "";
  position: absolute;
  top: -10%;
  right: -10%;
  width: 40%;
  height: 40%;
  background: radial-gradient(circle,
      rgba(8, 181, 77, 0.1) 0%,
      transparent 70%);
  z-index: 0;
}

.slidev-layout.cover :deep(h1) {
  @apply text-7xl font-extrabold tracking-tight mb-4 relative z-10;
  background: var(--slidev-theme-primary);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
