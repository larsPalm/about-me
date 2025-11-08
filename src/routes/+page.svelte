<script lang="ts">
    import ContactCard from "../components/ContactCard.svelte";
    import EducationDisplay from "../components/EducationDisplay.svelte";
    import contact from "../dataFiles/contactInfo.json";
</script>

<div class="center-vert">
    <div class="contact-wrapper">
        <div class="contact-container">
            <ContactCard
                name={contact.name}
                email={contact.email}
                github={contact.github}
                phone={contact.phone}
                LinkedIn={contact.linkedin}
            />
            <div class="contact-image">
                <img src="/profilebilde.png" alt="Profile picture" />
            </div>
        </div>
    </div>
    <div class="center">
        <div class="body">
            <EducationDisplay />
        </div>
    </div>
</div>

<style>
    .center {
        display: flex;
        justify-content: center;
        margin: 1rem;
    }
    .center-vert {
        display: flex;
        flex-direction: column; /* stack children vertically */
        justify-content: center; /* horizontal center */
        margin: 0; /* optional: remove extra margin */
    }
    .body {
        transition:
            max-height 0.3s ease,
            opacity 0.3s ease;
        overflow: hidden;
    }
    .contact-wrapper {
        display: flex;
        justify-content: center; /* horizontal centering */
        /*align-items: flex-start; /* vertical alignment at top, use center if you want full vertical centering */
        margin: 2rem 0; /* spacing above/below the entire container */
        gap: 2rem; /* optional gap if there are multiple stacked sections */
    }
    .contact-container {
        display: flex;
        flex-direction: row; /* side by side */
        align-items: center; /* vertical alignment */
        justify-content: center; /* horizontal centering */
        gap: 1rem; /* reduced space between ContactCard and image */
    }

    .contact-image img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 1rem;
        box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.2),
            inset 0 0 6px rgba(0, 0, 0, 0.05);
        transition: box-shadow 0.25s ease;
    }

    html.dark-mode .contact-image img {
        box-shadow:
            0 4px 8px rgba(255, 255, 255, 0.1),
            inset 0 0 6px rgba(255, 255, 255, 0.05);
    }
</style>
