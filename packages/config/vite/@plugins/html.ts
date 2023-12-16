import type { Plugin } from 'vite';

import { site } from '../../../env/process/host.ts';

type HTMLPluginOptions = { title: string; description: string };

const html = ({ title, description }: HTMLPluginOptions) =>
	({
		name: 'custom:html',
		transformIndexHtml: (html) => {
			return html
				.replace(/{{TITLE}}/g, title)
				.replace(/{{DESCRIPTION}}/g, description)
				.replace(/{{FAVICON}}/g, site('favicon.ico'))
				.replace(/{{CSS\/FONTS}}/g, site('css', 'fonts.css'));
		},
	}) as Plugin;

export type { HTMLPluginOptions };
export default html;
