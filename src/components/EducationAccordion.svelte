<script lang="ts">
    import { writable } from "svelte/store";
    import ThesisAccordion from "./ThesisAccordion.svelte";
    import type { Education } from "../types/education";
    import { t } from "../stores/i18n";

    export let education: Education;

    const isOpen = writable(false);
    const toggle = () => isOpen.update((v) => !v);
</script>

<div class="accordion-item">
    <div class="header" on:click={toggle}>
        <span>{education.name || education.school}</span>
        <span>{$isOpen ? "▲" : "▼"}</span>
    </div>

    <div class="body" class:hidden={!$isOpen} class:visible={$isOpen}>
        {#if education.school}
            <div><strong>{$t.uniSchool}:</strong> {education.school}</div>
        {/if}

        {#if education.type}
            <div><strong>Type:</strong> {education.type}</div>
        {/if}

        {#if education.from || education.to}
            <div>
                <strong>{$t.years}:</strong>
                {education.from} – {education.to}
            </div>
        {/if}

        {#if education.grade}
            <div><strong>{$t.grade}:</strong> {education.grade}</div>
        {/if}

        {#if education.subjects && education.subjects.length > 0}
            <div>
                <strong>{$t.subject}:</strong>
                <ul>
                    {#each education.subjects as subject}
                        <li>{subject}</li>
                    {/each}
                </ul>
            </div>
        {/if}

        {#if education.thesis}
            <ThesisAccordion thesis={education.thesis} />
        {/if}
    </div>
</div>

<style>
    .accordion-item {
        border: 1px solid var(--text-color);
        background-color: var(--comp-bg);
        border-radius: 1rem;
        padding: 1rem;
        width: 340px;
        box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.2),
            inset 0 0 6px rgba(0, 0, 0, 0.05);
        margin: 0.5rem auto;
        cursor: pointer;
        transition:
            background 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease;
    }

    html.dark-mode .accordion-item {
        box-shadow:
            0 4px 8px rgba(255, 255, 255, 0.1),
            inset 0 0 6px rgba(255, 255, 255, 0.05);
    }

    .header {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        font-size: 1.1rem;
    }

    .body {
        margin-top: 0.5rem;
        transition:
            max-height 0.3s ease,
            opacity 0.3s ease;
        overflow: hidden;
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

    .body div {
        margin: 0.25rem 0;
    }

    ul {
        margin: 0.25rem 0 0.5rem 1rem;
    }
</style>
