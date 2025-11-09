<script lang="ts">
    import type { Experience } from "../types/experience";

    export let experience: Experience;

    // local state for this accordion item
    let isOpen = false;
    const toggle = () => (isOpen = !isOpen);
</script>

<div class="accordion-item">
    <div class="header" on:click={toggle}>
        <span>{experience.company || "Unknown Company"}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
    </div>

    <div class="body" class:hidden={!isOpen} class:visible={isOpen}>
        {#if experience.department}
            <div><strong>Department:</strong> {experience.department}</div>
        {/if}

        {#if experience.role}
            <div><strong>Role:</strong> {experience.role}</div>
        {/if}

        <div>
            <strong>Period:</strong>
            {experience.from || "?"} – {experience.current
                ? "Present"
                : experience.to || "?"}
        </div>

        {#if experience.comments && experience.comments.length > 0}
            <div class="comments">
                <strong>Comments:</strong>
                <ul>
                    {#each experience.comments as comment}
                        <li>{comment}</li>
                    {/each}
                </ul>
            </div>
        {/if}

        {#if experience.remarks.length > 0}
            <div class="remarks">
                <strong>Remarks:</strong>
                <ul>
                    {#each experience.remarks as remark}
                        <li>{remark}</li>
                    {/each}
                </ul>
            </div>
        {:else}
            <div class="remarks"><em>No remarks</em></div>
        {/if}
    </div>
</div>

<style>
    .accordion-item {
        display: block; /* standard block so it stacks vertically */
        width: 100%; /* allows inner container to control size */
        max-width: 500px; /* all accordions will be this width */
        margin: 0.5rem auto; /* center horizontally */
        padding: 0.8rem;
        border-radius: 1rem;
        border: 1px solid var(--text-color);
        background-color: var(--comp-bg);
        box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.2),
            inset 0 0 6px rgba(0, 0, 0, 0.05);
        cursor: pointer;
        transition:
            background 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease;
    }

    .header {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        font-size: 1.1rem;
    }

    .body {
        margin-top: 0.5rem;
        overflow: hidden;
        transition:
            max-height 0.3s ease,
            opacity 0.3s ease;
    }

    .body.hidden {
        max-height: 0;
        opacity: 0;
        pointer-events: none;
    }

    .body.visible {
        max-height: 800px;
        opacity: 1;
    }

    .body div {
        margin: 0.25rem 0;
    }

    .remarks {
        margin-top: 0.5rem;
    }

    .remarks ul {
        padding-left: 1rem;
        margin: 0.25rem 0 0.5rem 0;
    }
</style>
