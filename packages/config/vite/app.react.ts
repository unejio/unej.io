import type { PluginOption, UserConfig } from 'vite';

import react from '@vitejs/plugin-react';

import base from './base.ts';

import html, { type HTMLPluginOptions } from './@plugins/html.ts';

type AppOptions = {
	port: number;
	plugins?: PluginOption[];
	config?: Omit<UserConfig, 'envPrefix' | 'esbuild' | 'plugins' | 'resolve' | 'server' | 'preview'>;
} & HTMLPluginOptions;

const app = (options: AppOptions) => {
	const { port, title, description, plugins = [], config = {} } = options;

	plugins.push(react());
	plugins.push(html({ title, description }));

	return base(port, { ...config, plugins });
};

export default app;
