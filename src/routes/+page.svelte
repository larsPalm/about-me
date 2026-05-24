<script lang="ts">
    import ContactCard from "../components/ContactCard.svelte";
    import ContentSwitch from "../components/ContentSwitch.svelte";
    import PdfGenerator from "../components/PdfGenerator.svelte";
    import contact from "../dataFiles/contactInfo.json";
    import { t } from "../stores/i18n";
    import { base } from "$app/paths";
</script>

<svelte:head>
    <title>Lars Christian Hovtun Palm | Software Engineer</title>
    <meta name="description" content={$t.profileDescription} />
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Lars Christian Hovtun Palm",
            "jobTitle": "Software Engineer",
            "worksFor": {
                "@type": "Organization",
                "name": "DNB"
            },
            "knowsAbout": [
                "AWS",
                "DevOps",
                "Kotlin",
                "Java",
                "Python",
                "Software architecture"
            ]
        }
    </script>
</svelte:head>

<main class="profile">
    <section class="hero" aria-label={$t.profileSection}>
        <div class="intro">
            <p class="eyebrow">{$t.profileLabel}</p>
            <h1>{contact.name}</h1>
            <p class="summary">{$t.profileDescription}</p>
            <ul class="highlights" aria-label={$t.coreCompetence}>
                <li>{$t.cloudHighlight}</li>
                <li>{$t.languageHighlight}</li>
                <li>{$t.architectureHighlight}</li>
            </ul>
            <div class="actions">
                <PdfGenerator />
            </div>
            <ContactCard
                name={contact.name}
                email={contact.email}
                github={contact.github}
                phone={contact.phone}
                linkedin={contact.linkedin}
            />
        </div>
        <img
            class="portrait"
            src="{base}/profilebilde.png"
            alt="Lars Christian Hovtun Palm"
        />
    </section>
    <section class="details" aria-label={$t.cvSection}>
        <ContentSwitch />
    </section>
</main>

<style>
    .profile {
        width: min(1120px, calc(100% - 2rem));
        margin: 0 auto;
        padding: 2rem 0 4rem;
    }

    .hero {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: clamp(2rem, 8vw, 5rem);
        margin: 1.5rem 0 3.5rem;
    }

    .intro {
        max-width: 700px;
        min-width: 0;
    }

    .eyebrow {
        color: var(--primary-color);
        font-size: 0.95rem;
        font-weight: bold;
        letter-spacing: 0.05em;
        margin: 0 0 0.75rem;
        text-transform: uppercase;
    }

    h1 {
        font-size: clamp(2.25rem, 5vw, 3.4rem);
        line-height: 1.12;
        letter-spacing: -0.04em;
        margin: 0 0 1rem;
    }

    .summary {
        color: var(--text-muted);
        font-size: clamp(1.05rem, 2vw, 1.18rem);
        line-height: 1.62;
        margin: 0 0 1.4rem;
        max-width: 640px;
    }

    .highlights {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        list-style: none;
        margin: 0 0 1.75rem;
        padding: 0;
    }

    .highlights li {
        background: var(--tag-color);
        border-radius: 999px;
        color: var(--primary-color);
        font-size: 0.92rem;
        font-weight: bold;
        padding: 0.48rem 0.8rem;
    }

    .actions {
        margin-bottom: 1.35rem;
    }

    .portrait {
        flex: 0 0 auto;
        width: clamp(210px, 25vw, 280px);
        aspect-ratio: 4 / 5;
        object-fit: cover;
        object-position: center;
        border-radius: 1.25rem;
        box-shadow: 0 12px 32px rgba(21, 45, 71, 0.14);
    }

    .details {
        border-top: 1px solid var(--border-color);
        padding-top: 2rem;
    }

    @media (max-width: 720px) {
        .profile {
            padding-top: 1rem;
        }

        .hero {
            flex-direction: column-reverse;
            gap: 1.5rem;
            margin-bottom: 2.5rem;
        }

        .portrait {
            width: min(190px, 52vw);
        }
    }
</style>
