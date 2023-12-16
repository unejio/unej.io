import { defineConfig } from 'astro/config';
import type { AstroUserConfig } from 'astro';

const base = (port: number, config: Omit<AstroUserConfig, 'server' | 'vite'> = {}) => {
	return defineConfig({
		...config,
		server: { host: true, port },
		vite: { esbuild: { legalComments: 'none' } },
	});
};

export default base;
