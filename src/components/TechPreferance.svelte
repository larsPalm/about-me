<script lang="ts">
    import { writable } from "svelte/store";
    import type { TechSkills } from "../types/techSkills";
    import skillsJson from "../dataFiles/techStack.json";

    export let skills: TechSkills = skillsJson;

    // Separate writable stores for each section
    const programmingOpen = writable(false);
    const frameworkOpen = writable(false);
    const cloudsOpen = writable(false);
    const cicdOpen = writable(false);
    const iacOpen = writable(false);

    const toggle = (store: typeof programmingOpen) => {
        store.update((v) => !v);
    };
</script>

<div class="skills-container">
    <!-- Programming -->
    <div class="accordion-item">
        <div class="header" on:click={() => toggle(programmingOpen)}>
            <span>Programming</span>
            <span>{$programmingOpen ? "▲" : "▼"}</span>
        </div>
        <div
            class="body"
            class:hidden={!$programmingOpen}
            class:visible={$programmingOpen}
        >
            <ul>
                {#each skills.programming as prog}
                    <li>{prog}</li>
                {/each}
            </ul>
        </div>
    </div>

    <!-- Framework -->
    <div class="accordion-item">
        <div class="header" on:click={() => toggle(frameworkOpen)}>
            <span>Frameworks</span>
            <span>{$frameworkOpen ? "▲" : "▼"}</span>
        </div>
        <div
            class="body"
            class:hidden={!$frameworkOpen}
            class:visible={$frameworkOpen}
        >
            <ul>
                {#each skills.framework as fw}
                    <li>{fw}</li>
                {/each}
            </ul>
        </div>
    </div>

    <!-- Clouds -->
    <div class="accordion-item">
        <div class="header" on:click={() => toggle(cloudsOpen)}>
            <span>Clouds</span>
            <span>{$cloudsOpen ? "▲" : "▼"}</span>
        </div>
        <div
            class="body"
            class:hidden={!$cloudsOpen}
            class:visible={$cloudsOpen}
        >
            {#each skills.clouds as cloud}
                <div class="cloud">
                    <strong>{cloud.name}</strong>
                    <ul>
                        {#each cloud.resources as res}
                            <li>{res}</li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>

    <!-- CI/CD -->
    <div class="accordion-item">
        <div class="header" on:click={() => toggle(cicdOpen)}>
            <span>CI/CD</span>
            <span>{$cicdOpen ? "▲" : "▼"}</span>
        </div>
        <div class="body" class:hidden={!$cicdOpen} class:visible={$cicdOpen}>
            <ul>
                {#each skills.cicd as ci}
                    <li>{ci}</li>
                {/each}
            </ul>
        </div>
    </div>

    <!-- IaC -->
    <div class="accordion-item">
        <div class="header" on:click={() => toggle(iacOpen)}>
            <span>Infrastructure as Code</span>
            <span>{$iacOpen ? "▲" : "▼"}</span>
        </div>
        <div class="body" class:hidden={!$iacOpen} class:visible={$iacOpen}>
            <ul>
                {#each skills.iac as tool}
                    <li>{tool}</li>
                {/each}
            </ul>
        </div>
    </div>
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

    .accordion-item {
        padding: 1rem;
        border-radius: 1rem;
        border: 1px solid var(--text-color);
        background-color: var(--comp-bg);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        transition:
            background 0.25s ease,
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
        max-height: 600px;
        opacity: 1;
    }

    .body ul {
        margin: 0.25rem 0 0 1rem;
    }

    .body li {
        margin: 0.25rem 0;
    }

    .cloud {
        margin-bottom: 0.5rem;
    }
</style>
