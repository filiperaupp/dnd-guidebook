<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    @click.self="close"
  >
    <div class="p-4 border rounded-lg shadow bg-white space-y-4 relative m-6 max-w-2xl">
      <button
        @click="close"
        class="absolute top-2 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
      >
        ✕
      </button>
      <h2 class="text-2xl font-bold">
        {{ characterClass?.name }}
      </h2>

      <p><span class="font-bold">Hit Dice:</span> 1d{{ characterClass?.hitDie }}</p>

      <div>
        <span class="font-bold">Proficiencies: </span>
        <span
          v-for="(proficiency, index) in characterClass?.proficiencies"
          :key="proficiency.index"
        >
          {{ proficiency.name + (index < characterClass.proficiencies.length - 1 ? ', ' : '') }}
        </span>
      </div>

      <div v-if="characterClass?.proficienciesChoice">
        <span class="font-bold">Skill Choices:</span>
        <p>{{ characterClass.proficienciesChoice }}</p>
      </div>

      <div>
        <span class="font-bold">Starting Equipment:</span>
        <ul class="list-disc list-inside">
          <li
            v-for="equipment in characterClass?.startingEquipment"
            :key="equipment.equipment.index"
          >
            {{ equipment.equipment.name }} (x{{ equipment.quantity }})
          </li>
        </ul>
      </div>

      <div v-if="characterClass?.subclass">
        <span class="font-bold">Subclass:</span> {{ characterClass.subclass }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { CharacterClass } from '@/data/types/CharacterClass'

defineProps<{
  modelValue: boolean
  characterClass?: CharacterClass
}>()

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}
</script>
