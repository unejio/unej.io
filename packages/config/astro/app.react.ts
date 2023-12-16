import type { AstroIntegration, AstroUserConfig } from 'astro';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import base from './base.ts';

type AppOptions = {
	port: number;
	integrations?: AstroIntegration[];
	config?: Omit<AstroUserConfig, 'integrations' | 'server' | 'vite'>;
};

const app = (options: AppOptions) => {
	const { port, integrations = [], config = {} } = options;

	integrations.push(
		tailwind({
			applyBaseStyles: false,
		})
	);
	integrations.push(react());

	return base(port, { ...config, integrations });
};

export default app;
