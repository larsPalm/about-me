<script lang="ts">
    import { writable } from "svelte/store";
    import ExperienceList from "./ExperienceList.svelte";
    import EducationDisplay from "./EducationDisplay.svelte";
    import Competance from "./Competance.svelte";
    import TechPreferance from "./TechPreferance.svelte";

    import { t } from "../stores/i18n";

    // reactive translation
    $: tr = $t;

    // initialize tabs and activeTab
    let tabs: string[] = [];
    const activeTab = writable("");

    // update tabs whenever tr changes
    $: if (tr) {
        const newTabs = [
            tr.education,
            tr.experience,
            tr.achievements,
            tr.pdfSkills,
        ];

        // get current active tab index in old tabs
        let currentIndex = tabs.indexOf($activeTab);

        // update tabs
        tabs = newTabs;

        // if currentIndex valid, keep same logical tab, else default to first
        if (currentIndex >= 0 && currentIndex < newTabs.length) {
            activeTab.set(newTabs[currentIndex]);
        } else {
            activeTab.set(newTabs[0]);
        }
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
