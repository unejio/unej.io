import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

import coloradix, { gray, iris, red, blue, green, orange } from '@coloradix/tailwindcss';

const create = (options: { content: Config['content'] }) => {
	const { content } = options;

	const radix = coloradix({
		gray,
		iris,
		red,
		blue,
		green,
		orange,
	})
		.alias({
			n: 'gray',
			p: 'iris',
			e: 'red',
			i: 'blue',
			s: 'green',
			w: 'orange',
		})
		.build();

	return {
		content,
		theme: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				...radix.colors,
			},
			fontFamily: {
				head: [`"Montserrat"`, ...defaultTheme.fontFamily.serif],
				sans: [`"Plus Jakarta Sans"`, ...defaultTheme.fontFamily.sans],
				mono: [`"Source Code Pro"`, ...defaultTheme.fontFamily.mono],
			},
			borderRadius: {
				'0': '0',
				'1': '0.0625rem',
				'2': '0.125rem',
				'3': '0.1875rem',
				'4': '0.25rem',
				'5': '0.3125rem',
				'6': '0.375rem',
				'7': '0.4375rem',
				'8': '0.5rem',
				'9': '0.5625rem',
				'10': '0.625rem',
				'11': '0.6875rem',
				'12': '0.75rem',
				'13': '0.8125rem',
				'14': '0.875rem',
				'15': '0.9375rem',
				'16': '1rem',
				'18': '1.125rem',
				'20': '1.25rem',
				'22': '1.375rem',
				'24': '1.5rem',
				'28': '1.75rem',
				'32': '2rem',
				full: '9999px',
			},
			fontSize: {
				z1: defaultTheme.fontSize.xs,
				z2: defaultTheme.fontSize.sm,
				z3: defaultTheme.fontSize.base,
				z4: defaultTheme.fontSize.lg,
				z5: defaultTheme.fontSize.xl,
				z6: defaultTheme.fontSize['2xl'],
				z7: defaultTheme.fontSize['3xl'],
				z8: defaultTheme.fontSize['4xl'],
				z9: defaultTheme.fontSize['5xl'],
				z10: defaultTheme.fontSize['6xl'],
				z11: defaultTheme.fontSize['7xl'],
				z12: defaultTheme.fontSize['8xl'],
				z13: defaultTheme.fontSize['9xl'],
			},
			fontWeight: {
				w2: defaultTheme.fontWeight.extralight,
				w3: defaultTheme.fontWeight.light,
				w4: defaultTheme.fontWeight.normal,
				w5: defaultTheme.fontWeight.medium,
				w6: defaultTheme.fontWeight.semibold,
				w7: defaultTheme.fontWeight.bold,
				w8: defaultTheme.fontWeight.extrabold,
			},
			extend: {
				width: {
					screen: '100dvw',
				},
				height: {
					screen: '100dvh',
				},
			},
		},
		plugins: [radix.plugin],
	} satisfies Config;
};

export default create;
