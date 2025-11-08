<script lang="ts">
    import type { Education } from "../types/education";
    import type { Thesis } from "../types/thesis";
    import utdanningJson from "../dataFiles/education.json";
    import EducationAccordion from "./EducationAccordion.svelte";
    import type { EducationData } from "../types/educationData";

    const utdanning: EducationData = utdanningJson;
</script>

<div class="school-container">
    <h1>Utdanning</h1>
    <EducationAccordion education={utdanning.dnb} />
    <EducationAccordion education={utdanning.master} />
    <EducationAccordion education={utdanning.bachelor} />
    <EducationAccordion education={utdanning.pt} />
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
