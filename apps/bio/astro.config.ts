import { passthroughImageService } from 'astro/config';

import react from '@unej.io/config/astro/app.react.ts';

import cloudflare from '@astrojs/cloudflare';

import { bio } from '@unej.io/env/process/host.ts';

export default react({
	port: 3100,
	config: {
		site: bio(),
		output: 'server',
		adapter: cloudflare(),
		image: { service: passthroughImageService() },
	},
});
