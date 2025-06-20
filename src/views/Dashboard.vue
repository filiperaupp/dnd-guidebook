<template>
  <div>
    <RouterLink to="/">
      <a
        to="/dashboard"
        class="ml-6 mt-6 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
      >
        <i class="fas fa-arrow-left w-3.5 h-3.5 me-2"></i>
        Back to menu
      </a>
    </RouterLink>
    <RouterView />
  </div>
</template>

<script setup lang="ts"></script>
