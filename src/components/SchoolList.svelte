<script>
    import SchoolAccordion from "./SchoolAccordion.svelte";
    import schoolJson from "../dataFiles/schools.json";

    import { t } from "../stores/i18n";
</script>

<div class="school-container">
    <h1>{$t.school}</h1>
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

<style>
    .school-container {
        display: flex;
        flex-direction: column; /* vertical stacking */
        align-items: center; /* center horizontally */
        gap: 1rem; /* spacing between header and accordions */
        margin: 2rem 0; /* optional top/bottom spacing */
    }

    .school-container h1 {
        margin: 0;
        font-size: 2rem;
        font-weight: bold;
    }
</style>
