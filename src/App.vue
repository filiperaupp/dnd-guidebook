<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-slate-100 flex justify-center">
    <div class="container bg-gray-50 py-8 px-4">
      <h1 class="text-center text-4xl mt-2">D&D 2014 Guidebook</h1>
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
