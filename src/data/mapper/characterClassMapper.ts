import type { CharacterClass, CharacterClassSummary } from '../types/CharacterClass'

const mapToCharacterClassSummary = (data: any): CharacterClassSummary => {
  return {
    name: data.name,
    index: data.index,
  }
}

const mapToCharacterClass = (data: any): CharacterClass => {
  return {
    name: data.name,
    hitDie: data.hit_die,
    proficiencies: data.proficiencies,
    proficienciesChoice: data?.proficiency_choices[0].desc || '',
    startingEquipment: data.starting_equipment,
    subclass: data.subclasses[0].name || '',
  }
}

export { mapToCharacterClass, mapToCharacterClassSummary }
