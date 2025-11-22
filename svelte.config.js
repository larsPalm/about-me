import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'docs',       // build output folder in main branch
			assets: 'docs',
			fallback: 'index.html'
		}),
		paths: {
			base: '/docs'
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
