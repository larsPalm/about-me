import { writable } from "svelte/store";

export type Language = "en" | "no";

export const language = writable<Language>("no");

export const setLanguage = (newLang: Language) => {
    language.set(newLang);
    localStorage.setItem("lang", newLang); // Optionally persist to localStorage
};

export type Translation = {
    [x: string]: string;
}

// Load the language from localStorage if available
if (typeof localStorage !== "undefined") {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang) {
        language.set(savedLang);
    }
}
