<template>
  <CharacterClassDetailDialog v-model="showDialog" :character-class="selectedClass" />
  <div class="flex flex-row flex-wrap py-6 justify-center gap-4">
    <template v-if="loading">
      <span class="font-bold">Carregando informações...</span>
    </template>
    <template v-else>
      <div
        v-for="chracterClass in characterClasses"
        :key="chracterClass.index"
        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex flex-row justify-between items-start">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ chracterClass.name }}
          </h5>
          <button
            @click="openDialog(chracterClass.index)"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Read more
            <i class="fas fa-eye w-3.5 h-3.5 ms-2"></i>
          </button>
        </div>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ characterClassesDescription[chracterClass.index] || '- - -' }}
        </p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import characterClassesDescription from '@/constants/characterClassesDescription'
import CharacterClassDetailDialog from './CharacterClassDetailDialog.vue'
import { useCharacterClassStore } from '@/stores/characterClass'

const store = useCharacterClassStore()
const { characterClasses, loading, selectedClass, showDialog } = storeToRefs(store)

const openDialog = (index: string) => {
  store.getOne(index)
}

onMounted(() => {
  store.getAll()
})
</script>
