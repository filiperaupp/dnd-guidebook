<template>
  <CharacterClassDetailDialog v-model="showDialog" :character-class="selectedClass" />
  <div class="flex flex-row flex-wrap p-6 justify-center gap-4">
    <div
      v-for="chracterClass in chracterClasses"
      :key="chracterClass.index"
      class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex flex-row justify-between items-start">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ chracterClass.name }}
        </h5>
        <button
          @click="openDialog(chracterClass.index)"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Read more
          <i class="fas fa-arrow-right w-3.5 h-3.5 ms-2"></i>
        </button>
      </div>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ chracterClassesDescription[chracterClass.index] || "- - -" }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import chracterClassesDescription from "@/constants/chracterClassesDescription";
import CharacterClassDetailDialog from "./CharacterClassDetailDialog.vue";
import { getAllCharacterClasses, getCharacterClassByIndex } from "../../data/services/characterClass";

const chracterClasses = ref([]);
const showDialog = ref(false);
const selectedClass = ref();

const openDialog = (index: string) => {
  axios
    .get(`https://www.dnd5eapi.co/api/2014/classes/${index}`)
    .then(({ data }) => {
      selectedClass.value = data;
      showDialog.value = true;
    });
  
    getCharacterClassByIndex(index).then(characterClass => {
      console.log(characterClass)
    })
};

const getClasses = async () => {
  // const result = await axios.get("https://www.dnd5eapi.co/api/2014/classes");
  const result = await getAllCharacterClasses();
  
  // const chracterClassesDetails = result.map((characterClass) =>
  //   getCharacterClassByIndex(characterClass.index)
  //   // axios.get(`https://www.dnd5eapi.co/api/2014/classes/${item.index}`)
  // );
  // const finishResult = await Promise.all(chracterClassesDetails);
  // console.log(finishResult);

  chracterClasses.value = result;
};

getClasses();
</script>
