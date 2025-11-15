<script lang="ts">
    import { writable } from "svelte/store";
    import ExperienceList from "./ExperienceList.svelte";
    import EducationDisplay from "./EducationDisplay.svelte";
    import Competance from "./Competance.svelte";
    import TechPreferance from "./TechPreferance.svelte";

    const tabs = ["Utdanning", "Erfaring", "Kompetanse", "Ferdigheter"];
    const activeTab = writable(tabs[1]);

    const setTab = (tab: string) => {
        activeTab.set(tab);
    };
</script>

<div>
    <div class="tab-buttons">
        {#each tabs as tab}
            <button
                class:active={$activeTab === tab}
                on:click={() => setTab(tab)}
            >
                {tab}
            </button>
        {/each}
    </div>

    <div class="tab-content">
        {#if $activeTab === "Utdanning"}
            <EducationDisplay />
        {:else if $activeTab === "Erfaring"}
            <ExperienceList />
        {:else if $activeTab === "Ferdigheter"}
            <TechPreferance />
        {:else if $activeTab === "Kompetanse"}
            <Competance />
        {/if}
    </div>
</div>

<style>
    button {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: 1px solid var(--text);
        background-color: blue;
        color: white;
        cursor: pointer;
        font-weight: bold;
        transition:
            background-color 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease;
    }

    /* Active tab */
    button.active {
        background-color: #ff0000;
        color: var(--bg);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

    /* Hover effect */
    button:hover {
        background-color: var(--comp-bg);
        color: var(--bg);
    }

    /* Optional: spacing for multiple buttons */
    .tab-buttons {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 1rem;
    }
</style>
