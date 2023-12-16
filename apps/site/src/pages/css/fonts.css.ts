import type { APIRoute } from 'astro';

import { site } from '@unej.io/env/import.meta/host.ts';

export const GET: APIRoute = () => {
	return new Response(
		[
			{
				name: 'Montserrat',
				style: 'normal',
				filename: 'Montserrat-Regular',
			},
			{
				name: 'Montserrat',
				style: 'italic',
				filename: 'Montserrat-Italic',
			},
			{
				name: 'Plus Jakarta Sans',
				style: 'normal',
				filename: 'PlusJakartaSans-Regular',
			},
			{
				name: 'Plus Jakarta Sans',
				style: 'italic',
				filename: 'PlusJakartaSans-Italic',
			},
			{
				name: 'Source Code Pro',
				style: 'normal',
				filename: 'SourceCodePro-Regular',
			},
			{
				name: 'Source Code Pro',
				style: 'italic',
				filename: 'SourceCodePro-Italic',
			},
		]
			.map(({ name, style, filename }) => {
				return `
@font-face {
  font-family: "${name}";
  font-style: ${style};
  font-weight: 1 999;
  src: url("${site('fonts', filename)}.ttf") format("truetype-variations");
}

`;
			})
			.join('\n'),
		{
			headers: {
				'Content-Type': 'text/css',
			},
		}
	);
};
