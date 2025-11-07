<script lang="ts">
	import ThemeToggle from "../components/ThemeToggle.svelte";
</script>

<ThemeToggle />
<slot />

<style>
	:root {
		--bg: #ffffff;
		--text: #000000;
	}

	:root.dark {
		--bg: #000000;
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
</style>
