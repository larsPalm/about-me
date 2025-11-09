<script lang="ts">
    import { writable } from "svelte/store";
    import type { Cloud } from "../types/cloud";

    export let title: string;
    export let list: string[] | Cloud[] = [];

    const isOpen = writable(false);

    const toggle = () => {
        isOpen.update((v) => !v);
    };

    // Type guard to check if an item is Cloud
    const isCloud = (item: string | Cloud): item is Cloud => {
        return (
            typeof item === "object" && "name" in item && "resources" in item
        );
    };
</script>

<div class="accordion-item">
    <div class="header" on:click={toggle}>
        <span>{title}</span>
        <span>{$isOpen ? "▲" : "▼"}</span>
    </div>

    <div class="body" class:hidden={!$isOpen} class:visible={$isOpen}>
        <ul>
            {#each list as item}
                {#if isCloud(item)}
                    <li>
                        <strong>{item.name}</strong>
                        <ul>
                            {#each item.resources as r}
                                <li>{r}</li>
                            {/each}
                        </ul>
                    </li>
                {:else}
                    <li>{item}</li>
                {/if}
            {/each}
        </ul>
    </div>
</div>

<style>
    .accordion-item {
        padding: 1rem;
        border-radius: 1rem;
        border: 1px solid var(--text-color);
        background-color: var(--comp-bg);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        transition:
            background 0.25s ease,
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
        max-height: 800px;
        opacity: 1;
    }

    ul {
        margin: 0.25rem 0 0 1rem;
    }

    li {
        margin: 0.25rem 0;
    }
</style>
