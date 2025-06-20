<template>
  <div>
    <h1 class="text-center text-4xl mt-2">D&D Guidebook - Home</h1>
    <div class="flex flex-row flex-wrap pt-6 justify-center gap-4">
      <ResourceCard title="Classes" route="/dashboard/characterClass" />
      <ResourceCard title="Monsters" route="" wip />
    </div>
  </div>
</template>

<script setup lang="ts">
import ResourceCard from '@/components/ResourceCard.vue'
</script>
