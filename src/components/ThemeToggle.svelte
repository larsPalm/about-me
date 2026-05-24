<script lang="ts">
    import { onMount } from "svelte";
    import { t } from "../stores/i18n";

    let darkMode = false;

    onMount(() => {
        darkMode = localStorage.getItem("theme") === "dark";
        document.documentElement.classList.toggle("dark-mode", darkMode);
    });

    const toggle = () => {
        darkMode = !darkMode;
        document.documentElement.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    };
</script>

<button type="button" class="theme-toggle" aria-pressed={darkMode} on:click={toggle}>
    {darkMode ? $t.themeLight : $t.themeDark}
</button>

<style>
    .theme-toggle {
        border: 1px solid var(--border-color);
        border-radius: 999px;
        background: var(--surface-color);
        color: var(--text-muted);
        cursor: pointer;
        font-size: 0.9rem;
        padding: 0.55rem 0.9rem;
    }

    .theme-toggle:hover,
    .theme-toggle:focus-visible {
        border-color: var(--primary-color);
        color: var(--primary-color);
    }
</style>
