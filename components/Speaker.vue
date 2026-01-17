<script setup lang="ts">
defineProps<{
  name: string;
  role?: string;
  avatar?: string;
  twitter?: string;
  github?: string;
  website?: string;
}>();
</script>

<template>
  <div
    class="flex items-center gap-6 mt-10 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
  >
    <img
      v-if="avatar"
      :src="avatar"
      class="w-24 h-24 rounded-full border-4 border-green-500 shadow-lg"
    />
    <div
      v-else
      class="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl font-bold"
    >
      {{ name.charAt(0) }}
    </div>
    <div>
      <div class="text-2xl font-bold text-gray-900 dark:text-white">
        {{ name }}
      </div>
      <div v-if="role" class="text-green-600 font-medium">{{ role }}</div>
      <div class="flex gap-4 mt-3 text-gray-500">
        <a
          v-if="twitter"
          :href="`https://twitter.com/${twitter}`"
          target="_blank"
          class="hover:text-sky-500 no-underline"
        >
          <div class="i-carbon:logo-twitter text-xl" />
        </a>
        <a
          v-if="github"
          :href="`https://github.com/${github}`"
          target="_blank"
          class="hover:text-black dark:hover:text-white no-underline"
        >
          <div class="i-carbon:logo-github text-xl" />
        </a>
        <a
          v-if="website"
          :href="website"
          target="_blank"
          class="hover:text-green-500 no-underline"
        >
          <div class="i-carbon:carbon-link text-xl" />
        </a>
      </div>
    </div>
  </div>
</template>
