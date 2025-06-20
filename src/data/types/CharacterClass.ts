import type { Proficiency } from "./Proficiency";
import type { StartEquipment } from "./StartingEquipment";

export interface CharacterClassSummary {
    index: string;
    name: string;
}

export interface CharacterClass {
    name: string;
    hitDie: number;
    proficiencies: Proficiency[];
    proficienciesChoice: string;
    startingEquipment: StartEquipment[];
    subclass: string;
}