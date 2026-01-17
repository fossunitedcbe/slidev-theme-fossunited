<script setup lang="ts">
const props = defineProps<{
  type: "tip" | "warning" | "note";
}>();

const configs = {
  tip: {
    icon: "i-carbon:idea",
    class:
      "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300",
    iconClass: "text-green-500",
    title: "Tip",
  },
  warning: {
    icon: "i-carbon:warning",
    class:
      "bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-300",
    iconClass: "text-amber-500",
    title: "Warning",
  },
  note: {
    icon: "i-carbon:information",
    class:
      "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300",
    iconClass: "text-blue-500",
    title: "Note",
  },
};

const config = configs[props.type];
</script>

<template>
  <div
    :class="[
      'p-4 my-4 border-l-4 rounded-r-lg flex gap-4 items-start',
      config.class,
    ]"
  >
    <div :class="['text-2xl mt-0.5', config.iconClass]">
      <div :class="config.icon" />
    </div>
    <div>
      <div class="font-bold uppercase text-xs tracking-widest mb-1 opacity-80">
        {{ config.title }}
      </div>
      <div class="leading-relaxed">
        <slot />
      </div>
    </div>
  </div>
</template>
