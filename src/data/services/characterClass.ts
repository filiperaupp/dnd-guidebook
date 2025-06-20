import axios from "axios";
import { mapToCharacterClassSummary, mapToCharacterClass } from "../mapper/characterClassMapper";
import type { CharacterClass, CharacterClassSummary } from "../types/CharacterClass";

const API_BASE = "https://www.dnd5eapi.co/api/classes";

const getAllCharacterClasses = async(): Promise<CharacterClassSummary[]> => {
  const response = await axios.get(API_BASE);
  return response.data.results.map(mapToCharacterClassSummary);
}

const getCharacterClassByIndex = async (index: string): Promise<CharacterClass> => {
  const response = await axios.get(`${API_BASE}/${index}`);
  return mapToCharacterClass(response.data);
}

export {
    getAllCharacterClasses,
    getCharacterClassByIndex
}