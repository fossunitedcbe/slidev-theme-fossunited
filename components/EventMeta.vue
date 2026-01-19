<script setup lang="ts">
defineProps<{
  city?: string;
  date?: string;
  event?: string;
}>();
</script>

<template>
  <div
    class="flex flex-wrap gap-x-8 gap-y-2 mt-8 text-sm font-medium uppercase tracking-wider text-gray-600 dark:text-gray-200"
  >
    <div v-if="event" class="flex items-center gap-2">
      <div class="i-carbon:events text-green-500" />
      {{ event }}
    </div>
    <div v-if="city" class="flex items-center gap-2">
      <div class="i-carbon:location text-green-500" />
      {{ city }}
    </div>
    <div v-if="date" class="flex items-center gap-2">
      <div class="i-carbon:calendar text-green-500" />
      {{ date }}
    </div>
  </div>
</template>
