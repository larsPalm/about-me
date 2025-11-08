<script lang="ts">
    import ExperienceAccordion from "./ExperienceAccordion.svelte";
    import erfaringJson from "../dataFiles/experience.json";
    import type { ExperienceData } from "../types/experienceData";

    const erfaring: ExperienceData = erfaringJson as ExperienceData;
</script>

<div class="experience-container">
    <h1>Erfaring</h1>
    <div class="experience-list">
        {#each erfaring.erfaring as exp}
            <ExperienceAccordion experience={exp} />
        {/each}
    </div>
</div>

<style>
    .experience-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem; /* smaller spacing */
        width: 100%; /* fill parent flex item */
    }

    .experience-container h1 {
        margin: 0 0 0.5rem 0;
        font-size: 1.5rem;
        text-align: center;
    }

    .experience-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%; /* fill parent */
        align-items: stretch; /* accordion items take full width */
    }
</style>
