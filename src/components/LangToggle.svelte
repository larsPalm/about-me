<script lang="ts">
    import "../styles/global.scss"; // Import the global styles for theme
    import { language, setLanguage, type Language } from "../stores/langStore"; // Import language store
    import { t } from "../stores/i18n";

    // Function to toggle language
    const toggleLanguage = (event: Event) => {
        const target = event.target as HTMLSelectElement | null;
        if (!target) return; // Ensure target is not null
        if (!["en", "no"].includes(target.value)) target.value = "no";
        setLanguage(target.value as Language);
    };
</script>

<div class="lang-selector-container">
    <!-- Dropdown for language selection -->
    <label for="lang-select" class="lang-label">{$t.selectedLanguage}</label>
    <select id="lang-select" on:change={toggleLanguage} bind:value={$language}>
        <option value="en">🇬🇧 English</option>
        <option value="no">🇳🇴 Norsk</option>
    </select>
</div>

<style>
    .lang-selector-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }

    .lang-label {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: bold;
    }

    select {
        font-size: 16px;
        padding: 10px;
        width: 150px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    select:focus {
        outline: none;
        background-color: #e0e0e0;
    }
</style>
