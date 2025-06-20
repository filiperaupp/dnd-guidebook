<template>
  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm w-full flex flex-row justify-between items-start"
  >
    <h5 class="mb-2 mr-4 text-2xl font-bold tracking-tight text-gray-900">
      {{ title }}
    </h5>

    <p v-if="wip">{W.I.P}</p>
    <RouterLink v-else :to="route">
      <a
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
      >
        Explore
        <i class="fas fa-arrow-right w-3.5 h-3.5 ms-2"></i>
      </a>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    route: string;
    title: string;
    wip?: boolean;
  }>(),
  { wip: false }
);
</script>

<style scoped></style>
