<script lang="ts">
    import { writable } from "svelte/store";
    import type { Thesis } from "../types/thesis";

    export let thesis: Thesis;

    const isOpen = writable(false);
    const toggle = () => isOpen.update((v) => !v);
</script>

<div class="accordion-item thesis">
    <div class="header" on:click={toggle}>
        <span>{thesis.name || "Thesis"}</span>
        <span>{$isOpen ? "▲" : "▼"}</span>
    </div>

    <div class="body" class:hidden={!$isOpen} class:visible={$isOpen}>
        {#if thesis.subTitle}
            <div><strong>Subtitle:</strong> {thesis.subTitle}</div>
        {/if}

        {#if thesis.topics && thesis.topics.length > 0}
            <div><strong>Topics:</strong></div>
            <ul>
                {#each thesis.topics as topic}
                    <li>{topic}</li>
                {/each}
            </ul>
        {/if}
    </div>
</div>

<style>
    .accordion-item {
        border: 1px solid var(--text-color);
        background-color: var(--comp-bg);
        border-radius: 1rem;
        padding: 1rem;
        width: 300px;
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
        max-height: 400px;
        opacity: 1;
    }

    ul {
        margin: 0.25rem 0 0.5rem 1rem;
    }

    .thesis {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
</style>
