import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

const base = (port: number, config: Omit<UserConfig, 'envPrefix' | 'esbuild' | 'resolve' | 'server' | 'preview'> = {}) => {
	return defineConfig({
		...config,
		envPrefix: 'PUBLIC_',
		esbuild: { legalComments: 'none' },
		resolve: { alias: { '~': resolve(process.cwd(), 'src') } },
		server: { host: true, port },
		get preview() {
			return this.server;
		},
	});
};

export default base;
