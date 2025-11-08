<script lang="ts">
    import { writable } from "svelte/store";
    import type { Experience } from "../types/experience";

    export let experience: Experience;

    const isOpen = writable(false);
    const toggle = () => isOpen.update((v) => !v);
</script>

<div class="accordion-item">
    <div class="header" on:click={toggle}>
        <span>{experience.company || "Unknown Company"}</span>
        <span>{$isOpen ? "▲" : "▼"}</span>
    </div>

    <div class="body" class:hidden={!$isOpen} class:visible={$isOpen}>
        {#if experience.department}
            <div><strong>Department:</strong> {experience.department}</div>
        {/if}

        {#if experience.role}
            <div><strong>Role:</strong> {experience.role}</div>
        {/if}

        <div>
            <strong>Period:</strong>
            {experience.from || "?"} – {experience.current
                ? "Present"
                : experience.to || "?"}
        </div>

        {#if experience.remarks && experience.remarks.length > 0}
            <div class="remarks">
                <strong>Remarks:</strong>
                <ul>
                    {#each experience.remarks as remark}
                        <li>{remark}</li>
                    {/each}
                </ul>
            </div>
        {:else}
            <div class="remarks"><em>No remarks</em></div>
        {/if}
    </div>
</div>

<style>
    .accordion-item {
        max-width: 200px;
        margin: 0.5rem auto;
        padding: 1rem;
        border-radius: 1rem;
        border: 1px solid var(--text-color);
        background-color: var(--comp-bg);
        box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.2),
            inset 0 0 6px rgba(0, 0, 0, 0.05);
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
        overflow: hidden;
        transition:
            max-height 0.3s ease,
            opacity 0.3s ease;
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

    .remarks {
        margin-top: 0.5rem;
    }

    .remarks ul {
        margin: 0.25rem 0 0.5rem 1rem;
    }
</style>
