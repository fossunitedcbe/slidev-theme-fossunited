<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  background?: string;
  logo?: string;
}>();

const style = computed(() => {
  if (props.background) {
    return {
      backgroundImage: `url(${props.background})`,
      backgroundSize: "cover",
    };
  }
  return {};
});
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <div class="absolute top-10 left-10">
      <img v-if="logo" :src="logo" class="h-12 logo" alt="Logo" />
      <template v-else>
        <img src="../assets/logos/logo-black.svg" class="h-12 dark:hidden" alt="FOSS United Logo" />
        <img src="../assets/logos/logo-white.svg" class="h-12 hidden dark:block" alt="FOSS United Logo" />
      </template>
    </div>
    <div class="my-auto w-full max-w-4xl text-gray-400 dark:text-gray-400">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.cover {
  @apply flex flex-col justify-center items-start text-left dark:bg-black-500;
  position: relative;
  overflow: hidden;
}

.logo {
  @apply dark:bg-white dark:border-1;
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
