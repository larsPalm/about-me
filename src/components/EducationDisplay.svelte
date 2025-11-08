<script>
    import EducationList from "./EducationList.svelte";
    import ExperienceList from "./ExperienceList.svelte";
    import SchoolList from "./SchoolList.svelte";
</script>

<div class="school-list-container">
    <SchoolList />
    <EducationList />
</div>

<style>
    .school-list-container {
        display: flex; /* enables horizontal layout */
        flex-wrap: wrap; /* allows wrapping if the screen is small */
        gap: 1rem; /* spacing between components */
        justify-content: center; /* optional: center horizontally */
        width: 100%;
    }
</style>
