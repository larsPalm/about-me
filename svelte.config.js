// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// This is where the adapter goes
		adapter: adapter({
			pages: 'build',      // folder where prerendered pages go
			assets: 'build',     // folder for static assets
			fallback: 'index.html' // SPA-style fallback for dynamic client-side routes
		}),

		// prerender all known routes
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
