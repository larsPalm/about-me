<script lang="ts">
    import { writable, derived } from "svelte/store";
    import { theme } from "../stores/themeStore";

    export let name: string = "John Doe";
    export let email: string = "john.doe@example.com";
    export let github: string = "https://github.com/johndoe";
    export let phone: string = "+1 234 567 890";
    export let LinkedIn: string = "";

    const isOpen = writable(false);
    const toggle = () => isOpen.update((v) => !v);

    // Reactive colors based on theme
    const bg = derived(theme, ($theme) =>
        $theme === "dark" ? "#000000" : "#ffffff",
    );
    const text = derived(theme, ($theme) =>
        $theme === "dark" ? "#ffffff" : "#000000",
    );
    const linkColor = "#1e90ff"; // always blue for links
</script>

<div class="card" style="background-color: {$bg}; color: {$text};">
    <div class="header" on:click={toggle}>
        <span>Contact Info</span>
        <span>{$isOpen ? "▲" : "▼"}</span>
    </div>

    <div class="body" class:hidden={!$isOpen} class:visible={$isOpen}>
        <div class="info-row"><strong>Name:</strong> {name}</div>
        <div class="info-row">
            <strong>Email:</strong>
            <a
                href={"mailto:" + email}
                style="color: {linkColor}; text-decoration: underline;"
                >{email}</a
            >
        </div>
        <div class="info-row">
            <strong>GitHub:</strong>
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style="color: {linkColor}; text-decoration: underline;"
                >{github}</a
            >
        </div>
        <div class="info-row">
            <strong>LinkedIn:</strong>
            <a
                href={LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                style="color: {linkColor}; text-decoration: underline;"
                >{LinkedIn}</a
            >
        </div>
        <div class="info-row"><strong>Phone:</strong> {phone}</div>
    </div>
</div>

<style>
    .card {
        border: 1px solid;
        border-radius: 1rem; /* more rounded corners */
        padding: 1rem;
        max-width: 320px;
        /* soft shadow for shaded corners */
        box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.1),
            /* subtle outer shadow */ inset 0 0 8px rgba(0, 0, 0, 0.05); /* soft inner shade */
        transition:
            background 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
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
</style>
