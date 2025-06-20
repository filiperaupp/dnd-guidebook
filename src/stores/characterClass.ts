import { getAllCharacterClasses, getCharacterClassByIndex } from '@/data/services/characterClass'
import type { CharacterClass, CharacterClassSummary } from '@/data/types/CharacterClass'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCharacterClassStore = defineStore('characterClassStore', () => {
  const characterClasses = ref<CharacterClassSummary[]>([])
  const loading = ref(false)
  const selectedClass = ref<CharacterClass>()
  const showDialog = ref(false)

  const getAll = async () => {
    loading.value = true
    const result = await getAllCharacterClasses()
    characterClasses.value = result
    loading.value = false
  }

  const getOne = async (index: string) => {
    getCharacterClassByIndex(index).then((characterClass) => {
      selectedClass.value = characterClass
      showDialog.value = true
    })
  }

  return {
    characterClasses,
    loading,
    selectedClass,
    showDialog,
    getAll,
    getOne,
  }
})
