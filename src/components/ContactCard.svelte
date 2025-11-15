<script lang="ts">
    import { writable } from "svelte/store";
    import { t } from "../stores/i18n";

    export let name: string = "John Doe";
    export let email: string = "john.doe@example.com";
    export let github: string = "https://github.com/johndoe";
    export let phone: string = "+1 234 567 890";
    export let LinkedIn: string = "";

    const isOpen = writable(false);
    const toggle = () => isOpen.update((v) => !v);

    const linkColor = "#1e90ff"; // always blue for links
</script>

<div class="card">
    <div class="header" on:click={toggle}>
        <span>{$t.contact}</span>
        <span>{$isOpen ? "▲" : "▼"}</span>
    </div>

    <div class="body" class:hidden={!$isOpen} class:visible={$isOpen}>
        <div class="info-row"><strong>{$t.name}:</strong> {name}</div>
        <div class="info-row">
            <strong>{$t.email}:</strong>
            <a
                href={"mailto:" + email}
                style="color: {linkColor}; text-decoration: underline;"
            >
                {email}
            </a>
        </div>
        <div class="info-row">
            <strong>GitHub:</strong>
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style="color: {linkColor}; text-decoration: underline;"
            >
                {github}
            </a>
        </div>
        {#if LinkedIn}
            <div class="info-row">
                <strong>LinkedIn:</strong>
                <a
                    href={LinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    style="color: {linkColor}; text-decoration: underline;"
                >
                    {LinkedIn}
                </a>
            </div>
        {/if}
        <div class="info-row"><strong>{$t.phone}:</strong> {phone}</div>
    </div>
</div>

<style>
    .card {
        border: 1px solid var(--text-color);
        border-radius: 1rem; /* rounded corners */
        padding: 1rem;
        max-width: 320px;
        background-color: var(--comp-bg); /* use global variable */
        box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.1),
            inset 0 0 8px rgba(0, 0, 0, 0.05); /* soft inner shade */
        margin: 1rem auto;
        cursor: pointer;
        transition:
            background 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease;
    }

    /* Adjust box-shadow for dark mode */
    html.dark-mode .card {
        box-shadow:
            0 4px 8px rgba(255, 255, 255, 0.1),
            inset 0 0 8px rgba(255, 255, 255, 0.05);
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
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

    .info-row {
        margin: 0.25rem 0;
    }

    a {
        color: #1e90ff;
        text-decoration: underline;
    }
</style>
