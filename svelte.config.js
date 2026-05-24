import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'docs',       // build output folder in main branch
			assets: 'docs',
			fallback: '404.html'
		}),
		paths: {
			base: '/about-me'
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
