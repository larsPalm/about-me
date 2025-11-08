import { writable } from "svelte/store";
import { browser } from "$app/environment"; // Import browser check from SvelteKit

// Get the initial theme safely
const initialTheme = "dark";

export const theme = writable(initialTheme);

// Function to toggle theme
export const toggleTheme = () => {
    theme.update((currentTheme) => {
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        if (browser) {
            localStorage.setItem("theme", newTheme);
            document.documentElement.classList.toggle("dark-mode", newTheme === "dark");
        }

        return newTheme;
    });
};
