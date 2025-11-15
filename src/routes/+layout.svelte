<script lang="ts">
	import LangToggle from "../components/LangToggle.svelte";
	import PdfGenerator from "../components/PdfGenerator.svelte";
	import ThemeToggle from "../components/ThemeToggle.svelte";
	export const prerender = true;
</script>

<div class="centered-container">
	<LangToggle />
	<ThemeToggle />
	<PdfGenerator />
</div>

<slot />

<style>
	:root {
		--bg: #ffffff;
		--comp-bg: #b3b0b0;
		--text: #000000;
	}

	:root.dark {
		--bg: #000000;
		--comp-bg: #3d3c3c;
		--text: #ffffff;
	}

	html,
	body {
		margin: 0;
		padding: 0;
		background: var(--bg);
		color: var(--text);
		font-family: system-ui, sans-serif;
		min-height: 100vh;
		transition:
			background 0.25s ease,
			color 0.25s ease;
	}

	button.theme-toggle {
		border: 1px solid var(--text);
		background: transparent;
		color: var(--text);
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		cursor: pointer;
		margin: 1rem;
	}
	.centered-container {
		display: flex;
		flex-direction: column; /* stack vertically */
		align-items: center; /* center horizontally */
		justify-content: flex-start; /* optional: start from top */
		gap: 1rem; /* spacing between ThemeToggle and PdfGenerator */
		padding: 2rem 0;
	}
</style>
