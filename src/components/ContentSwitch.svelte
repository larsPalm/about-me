<script lang="ts">
    import { writable } from "svelte/store";
    import ExperienceList from "./ExperienceList.svelte";
    import EducationDisplay from "./EducationDisplay.svelte";
    import Competance from "./Competance.svelte";
    import TechPreferance from "./TechPreferance.svelte";

    import { t } from "../stores/i18n";

    // reactive translation
    $: tr = $t;

    // reactive tabs array
    $: tabs = [tr.education, tr.experience, tr.achievements, tr.pdfSkills];

    const activeTab = writable("");

    // build tabs **only when tr is defined**
    $: if (tr) {
        const newTabs = [
            tr.education,
            tr.experience,
            tr.achievements,
            tr.pdfSkills,
        ];
        tabs = newTabs;

        // if activeTab is not in newTabs, reset it
        activeTab.update((current) =>
            newTabs.includes(current) ? current : newTabs[0],
        );
    }

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
        {#if $activeTab === tr.education}
            <EducationDisplay />
        {:else if $activeTab === tr.experience}
            <ExperienceList />
        {:else if $activeTab === tr.pdfSkills}
            <TechPreferance />
        {:else if $activeTab === tr.achievements}
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
