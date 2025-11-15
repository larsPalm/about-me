import { derived } from "svelte/store";
import { language, type Language, type Translation } from "./langStore";
import { no } from '../lang/no'
import { en } from '../lang/en'
// Ensure translations object is typed correctly
const translations: Record<Language, Translation> = {
    en: en,
    no: no,
};

// Derived store that updates when language changes
export const t = derived(language, ($language: Language) => translations[$language] ?? translations.en);
