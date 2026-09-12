<script lang="ts">
    import ExperienceList from "./ExperienceList.svelte";
    import EducationDisplay from "./EducationDisplay.svelte";
    import Competance from "./Competance.svelte";
    import TechPreferance from "./TechPreferance.svelte";
    import { t } from "../stores/i18n";

    type Section = "experience" | "skills" | "education" | "additional";

    let activeTab: Section = "experience";
    $: tabs = [
        { id: "experience" as Section, label: $t.experience },
        { id: "skills" as Section, label: $t.pdfSkills },
        { id: "education" as Section, label: $t.education },
        { id: "additional" as Section, label: $t.additional },
    ];

    const selectTab = (index: number) => {
        activeTab = tabs[index].id;
    };

    const handleTabKeydown = (event: KeyboardEvent, index: number) => {
        let nextIndex: number | undefined;

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            nextIndex = (index + 1) % tabs.length;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
            nextIndex = 0;
        } else if (event.key === "End") {
            nextIndex = tabs.length - 1;
        }

        if (nextIndex !== undefined) {
            event.preventDefault();
            selectTab(nextIndex);
            document.getElementById(`tab-${tabs[nextIndex].id}`)?.focus();
        }
    };
</script>

<div class="tabs" role="tablist" aria-label={$t.sections}>
    {#each tabs as tab (tab.id)}
        <button
            id="tab-{tab.id}"
            type="button"
            role="tab"
            class:active={activeTab === tab.id}
            aria-selected={activeTab === tab.id}
            aria-controls="panel-{tab.id}"
            tabindex={activeTab === tab.id ? 0 : -1}
            on:keydown={(event) => handleTabKeydown(event, tabs.indexOf(tab))}
            on:click={() => (activeTab = tab.id)}
        >
            {tab.label}
        </button>
    {/each}
</div>

<div
    id="panel-{activeTab}"
    class="tab-content"
    role="tabpanel"
    aria-labelledby="tab-{activeTab}"
    tabindex="0"
>
    {#if activeTab === "experience"}
        <ExperienceList />
    {:else if activeTab === "skills"}
        <TechPreferance />
    {:else if activeTab === "education"}
        <EducationDisplay />
    {:else}
        <Competance />
    {/if}
</div>

<style>
    .tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        margin-bottom: 2.2rem;
    }

    button {
        border: 1px solid var(--border-color);
        border-radius: 999px;
        background: var(--surface-color);
        color: var(--text-muted);
        cursor: pointer;
        font-size: 0.95rem;
        font-weight: 600;
        min-height: 44px;
        padding: 0.7rem 1.05rem;
        transition:
            border-color 0.2s ease,
            background-color 0.2s ease,
            color 0.2s ease;
    }

    button:hover,
    button:focus-visible {
        border-color: var(--primary-color);
        color: var(--primary-color);
    }

    button.active {
        border-color: var(--primary-color);
        background: var(--primary-color);
        color: var(--text-on-primary);
    }

    button:not(.active):active {
        background: var(--surface-muted);
    }

    .tab-content {
        max-width: none;
    }

    @media (max-width: 520px) {
        .tabs {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        button {
            width: 100%;
        }
    }
</style>
