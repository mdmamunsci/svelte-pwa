import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		files: {
			serviceWorker: 'src/service-worker.ts', // Add a custom service worker
		},

		// serviceWorker: {
		// 	register: true, // Enable service worker registration
		// },
	}
};

export default config;
