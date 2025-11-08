<script>
    import EducationList from "./EducationList.svelte";
    import SchoolList from "./SchoolList.svelte";
</script>

<div class="school-list-container">
    <SchoolList />
    <EducationList />
</div>

<style>
    .school-list-container {
        display: flex;
        flex-wrap: wrap; /* allow wrapping */
        gap: 1rem;
        justify-content: center;
        align-items: flex-start;
    }

    /* Each list container gets fixed width */
    .school-list-container > * {
        flex: 0 0 340px; /* fixed width, prevent flex from stretching */
        display: flex;
        flex-direction: column; /* stack items vertically inside each list */
        margin: 0; /* remove auto margins */
    }
</style>
