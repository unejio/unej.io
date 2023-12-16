import react from '@unej.io/config/astro/app.react.ts';

import sitemap from '@astrojs/sitemap';

import { site } from '@unej.io/env/process/host.ts';

export default react({
	port: 3000,
	integrations: [sitemap()],
	config: {
		site: site(),
	},
});
