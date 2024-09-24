import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
				// cf. https://rollupjs.org/configuration-options/#external
				external: ['css-tree'],
		}
	}
};

export default config;
