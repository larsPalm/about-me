<script lang="ts">
    import type { Cloud } from "../types/cloud";
    import { t } from "../stores/i18n";

    export let title: string;
    export let list: string[] | Cloud[] = [];
    export let secondaryList: string[] = [];

    const isCloud = (item: string | Cloud): item is Cloud =>
        typeof item === "object" && "resources" in item;
</script>

<article class="skill">
    <h3>{title}</h3>
    <ul>
        {#each list as item (typeof item === "string" ? item : item.name)}
            {#if isCloud(item)}
                <li>
                    <strong>{item.name}:</strong>
                    {#if item.priority === "secondary"}
                        <span class="secondary-label">({$t.secondaryExperience})</span>
                    {/if}
                    {item.resources.join(", ")}
                </li>
            {:else}
                <li>{item}</li>
            {/if}
        {/each}
        {#if secondaryList.length > 0}
            <li class="secondary-heading">{$t.secondaryDatabases}</li>
            {#each secondaryList as item (item)}
                <li>{item}</li>
            {/each}
        {/if}
    </ul>
</article>

<style>
    .skill {
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        background: var(--surface-color);
        min-width: 0;
        padding: 1.1rem 1.25rem;
    }

    h3 {
        color: var(--primary-color);
        font-size: 1rem;
        margin: 0 0 0.75rem;
    }

    ul {
        color: var(--text-muted);
        font-size: 0.94rem;
        line-height: 1.5;
        margin: 0;
        padding-left: 1.05rem;
    }

    li + li {
        margin-top: 0.28rem;
    }

    .secondary-label {
        color: var(--text-muted);
        font-size: 0.88em;
        font-style: italic;
        margin-left: 0.25rem;
    }

    .secondary-heading {
        color: var(--text-color);
        font-weight: 600;
        list-style: none;
        margin-left: -1.05rem;
        margin-top: 0.8rem;
    }
</style>
