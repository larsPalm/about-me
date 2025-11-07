<script lang="ts">
    import ContactCard from "../components/ContactCard.svelte";
    import SchoolAccordion from "../components/SchoolAccordion.svelte";
    import contact from "../dataFiles/contactInfo.json";
    import schoolJson from "../dataFiles/schools.json";
    import { writable } from "svelte/store";

    const showCV = writable(true);
    const toggleCV = () => showCV.set(!$showCV);
</script>

<ContactCard
    name={contact.name}
    email={contact.email}
    github={contact.github}
    phone={contact.phone}
    LinkedIn={contact.linkedin}
/>
<div class="center">
    <div class="body" class:hidden={!$showCV} class:visible={$showCV}>
        <h1>Skoler</h1>
        {#each schoolJson.schools as school}
            <SchoolAccordion
                name={String(school.name)}
                type={String(school.type)}
                from={String(school.from)}
                to={String(school.to)}
                fordypning={String(school.fordypning)}
            />
        {/each}
    </div>
</div>

<style>
    .center {
        display: flex;
        justify-content: center;
        margin: 1rem;
    }

    .cv-card {
        border: 1px solid var(--text, #000);
        border-radius: 1rem;
        padding: 1rem;
        max-width: 400px;
        box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.1),
            inset 0 0 8px rgba(0, 0, 0, 0.05);
        transition:
            background 0.25s ease,
            color 0.25s ease;
        cursor: pointer;
    }

    .header {
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .body {
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
        max-height: 1000px;
        opacity: 1;
    }
</style>
