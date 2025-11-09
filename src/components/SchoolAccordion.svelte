<script lang="ts">
    import { writable } from "svelte/store";

    export let name: string = "";
    export let type: string = "";
    export let from: string = "";
    export let to: string = "";
    export let fordypning: string = "";

    const isOpen = writable(false);
    const toggle = () => isOpen.update((v) => !v);
</script>

<div class="accordion-item">
    <div class="header" on:click={toggle}>
        <span>{name || "No Name"}</span>
        <span>{$isOpen ? "▲" : "▼"}</span>
    </div>

    <div class="body" class:hidden={!$isOpen} class:visible={$isOpen}>
        {#if type}<div><strong>Type:</strong> {type}</div>{/if}
        {#if from}<div><strong>From:</strong> {from}</div>{/if}
        {#if to}<div><strong>To:</strong> {to}</div>{/if}
        {#if fordypning}<div>
                <strong>Fordypning:</strong>
                {fordypning}
            </div>{/if}
    </div>
</div>

<style>
    .accordion-item {
        border: 1px solid var(--text-color);
        background-color: var(--comp-bg); /* use CSS variable */
        border-radius: 1rem;
        padding: 1rem;
        width: 320px; /* fixed width for uniformity */
        max-width: 100%; /* prevents overflow on small screens */
        box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.2),
            inset 0 0 6px rgba(0, 0, 0, 0.05);
        margin: 0.5rem auto; /* center horizontally */
        cursor: pointer;
        transition:
            background 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease;
    }

    /* Adjust shadow for dark mode */
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
        max-height: 500px;
        opacity: 1;
    }

    .body div {
        margin: 0.25rem 0;
    }
</style>
