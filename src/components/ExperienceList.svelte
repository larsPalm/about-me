<script lang="ts">
    import ExperienceAccordion from "./ExperienceAccordion.svelte";
    import erfaringJson from "../dataFiles/experience.json";
    import type { ExperienceData } from "../types/experienceData";

    const erfaring: ExperienceData = erfaringJson as ExperienceData;
</script>

<div class="experience-container">
    <h1>Erfaring</h1>
    <div class="experience-list">
        {#each erfaring.erfaring as exp (exp.company)}
            <ExperienceAccordion experience={exp} />
        {/each}
    </div>
</div>

<style>
    .experience-container {
        display: flex;
        flex-direction: column; /* vertical stacking */
        align-items: center; /* center horizontally */
        gap: 1rem; /* spacing between header and accordions */
        margin: 2rem 0; /* optional top/bottom spacing */
    }

    .experience-container h1 {
        margin: 0;
        font-size: 2rem;
        font-weight: bold;
    }

    .experience-list {
        display: flex;
        flex-direction: column; /* vertical stacking */
        gap: 1rem; /* spacing between accordions */
        align-items: center;
        max-width: 360px; /* match accordion width for consistency */
    }

    @media (min-width: 768px) {
        .experience-list {
            max-width: 400px; /* slightly wider on bigger screens */
        }
    }
</style>
