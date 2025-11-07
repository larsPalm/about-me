<script lang="ts">
    import { writable, derived } from "svelte/store";
    import { theme } from "../stores/themeStore";
    import type { School } from "../types/school";

    export let name: string = "";
    export let type: string = "";
    export let from: string = "";
    export let to: string = "";
    export let fordypning: string = "";

    const isOpen = writable(false);
    const toggle = () => isOpen.update((v) => !v);

    // Reactive colors based on theme store
    const bg = derived(theme, ($theme) =>
        $theme === "dark" ? "#000000" : "#ffffff",
    );
    const text = derived(theme, ($theme) =>
        $theme === "dark" ? "#ffffff" : "#000000",
    );
    const linkColor = "#1e90ff"; // consistent blue for links
</script>

<div class="accordion-item" style="background-color: {$bg}; color: {$text};">
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
        border: 1px solid var(--text);
        border-radius: 1rem;
        padding: 1rem;
        max-width: 320px;
        box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.1),
            inset 0 0 8px rgba(0, 0, 0, 0.05);
        margin: 0.5rem auto;
        cursor: pointer;
        transition:
            background 0.25s ease,
            color 0.25s ease,
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

    a {
        color: #1e90ff;
        text-decoration: underline;
    }
</style>
