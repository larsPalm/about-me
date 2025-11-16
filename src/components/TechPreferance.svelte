<script lang="ts">
    import type { TechSkills } from "../types/techSkills";
    import skillsJson from "../dataFiles/techStack.json";
    import SkillAccordion from "./SkillAccordion.svelte";
    import { t } from "../stores/i18n";

    export let skills: TechSkills = skillsJson;
</script>

<div class="skills-container">
    <SkillAccordion title={"Programming"} list={skills.programming} />
    <SkillAccordion title="Frameworks" list={skills.framework} />
    <SkillAccordion title="Clouds" list={skills.clouds} />
    <SkillAccordion title="Database" list={skills.database} />
    <SkillAccordion title="IaC" list={skills.iac} />
    <SkillAccordion title="CI/CD" list={skills.cicd} />
    <SkillAccordion title={$t.other} list={skills.other} />
</div>

<style>
    .skills-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    }
</style>
