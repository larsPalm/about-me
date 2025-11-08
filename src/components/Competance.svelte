<script lang="ts">
    import { writable } from "svelte/store";
    import type { Language } from "../types/language";
    import langJson from "../dataFiles/language.json";
    import kompetanse from "../dataFiles/kompetanse.json";

    export let languages: Language[] = langJson;
    export let achievements: string[] = kompetanse;

    const langOpen = writable(false);
    const achOpen = writable(false);

    const toggleLang = () => langOpen.update((v) => !v);
    const toggleAch = () => achOpen.update((v) => !v);
</script>

<div class="accordion-wrapper">
    <div class="accordion-item">
        <div class="header" on:click={toggleLang}>
            <span>Languages</span>
            <span>{$langOpen ? "▲" : "▼"}</span>
        </div>
        <div class="body" class:hidden={!$langOpen} class:visible={$langOpen}>
            <ul>
                {#each languages as lang (lang.name)}
                    <li><strong>{lang.name}:</strong> {lang.level}</li>
                {/each}
            </ul>
        </div>
    </div>

    <div class="accordion-item">
        <div class="header" on:click={toggleAch}>
            <span>Achievements</span>
            <span>{$achOpen ? "▲" : "▼"}</span>
        </div>
        <div class="body" class:hidden={!$achOpen} class:visible={$achOpen}>
            <ul>
                {#each achievements as ach (ach)}
                    <li>{ach}</li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style>
    .accordion-wrapper {
        display: flex;
        flex-direction: row; /* horizontal layout */
        justify-content: center; /* center the accordions */
        gap: 1rem; /* spacing between accordions */
        flex-wrap: wrap; /* wrap on small screens */
        align-items: flex-start; /* prevent height stretching */
    }

    .accordion-item {
        flex: 0 0 300px; /* fixed width */
        padding: 1rem;
        border-radius: 1rem;
        border: 1px solid var(--text-color);
        background-color: var(--comp-bg);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        transition:
            background 0.25s ease,
            box-shadow 0.25s ease;
    }

    .header {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        font-size: 1.1rem;
    }

    .body {
        margin-top: 0.5rem;
        overflow: hidden;
        transition:
            max-height 0.3s ease,
            opacity 0.3s ease;
        width: 100%; /* ensure it fills the accordion width */
    }

    .body.hidden {
        max-height: 0;
        opacity: 0;
        pointer-events: none;
    }

    .body.visible {
        max-height: 600px;
        opacity: 1;
    }

    .body ul {
        margin: 0.25rem 0 0 1rem;
    }

    .body li {
        margin: 0.25rem 0;
    }
</style>
