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
    <div class="my-auto w-full max-w-4xl">
      <slot />
    </div>
  </div>
</template>
