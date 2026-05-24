<script lang="ts">
    import { onMount } from "svelte";
    import { language, setLanguage, type Language } from "../stores/langStore";
    import { t } from "../stores/i18n";

    const toggleLanguage = (event: Event) => {
        const target = event.target as HTMLSelectElement | null;
        if (!target) return;
        if (!["en", "no"].includes(target.value)) target.value = "no";
        setLanguage(target.value as Language);
        document.documentElement.lang = target.value;
    };

    onMount(() => {
        document.documentElement.lang = $language;
    });
</script>

<label class="lang-selector" for="lang-select">
    <span class="sr-only">{$t.selectedLanguage}</span>
    <select id="lang-select" on:change={toggleLanguage} bind:value={$language}>
        <option value="no">Norsk</option>
        <option value="en">English</option>
    </select>
</label>

<style>
    select {
        border: 1px solid var(--border-color);
        border-radius: 999px;
        background: var(--surface-color);
        color: var(--text-muted);
        cursor: pointer;
        font-size: 0.9rem;
        padding: 0.55rem 0.8rem;
    }

    select:focus-visible {
        border-color: var(--primary-color);
        color: var(--primary-color);
    }

    .sr-only {
        position: absolute;
        overflow: hidden;
        width: 1px;
        height: 1px;
        clip-path: inset(50%);
        white-space: nowrap;
    }
</style>
