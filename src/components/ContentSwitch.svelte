<script lang="ts">
    import { writable } from "svelte/store";
    import ExperienceList from "./ExperienceList.svelte";
    import EducationDisplay from "./EducationDisplay.svelte";
    import Competance from "./Competance.svelte";
    import TechPreferance from "./TechPreferance.svelte";

    const tabs = ["Education", "Experience", "Kompetanse", "Faglig interesser"];
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
        {#if $activeTab === "Education"}
            <EducationDisplay />
        {:else if $activeTab === "Experience"}
            <ExperienceList />
        {:else if $activeTab === "Faglig interesser"}
            <TechPreferance />
        {:else if $activeTab === "Kompetanse"}
            <Competance />
        {/if}
    </div>
</div>

<style>
    .tab-buttons {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .tab-buttons button {
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: 1px solid var(--text);
        background: var(--comp-bg);
        cursor: pointer;
        font-weight: bold;
        transition:
            background 0.2s,
            color 0.2s;
    }

    .tab-buttons button.active {
        background: var(--text);
        color: var(--bg);
    }

    .tab-content {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .school-list-container {
        display: flex;
        flex-wrap: wrap; /* allow wrapping */
        gap: 1rem;
        justify-content: center;
        align-items: flex-start;
    }

    .school-list-container > * {
        flex: 0 0 340px; /* fixed width */
        display: flex;
        flex-direction: column;
        margin: 0;
    }
</style>
