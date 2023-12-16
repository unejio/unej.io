import create from '@unej.io/config/tailwindcss/create.ts';
import { packages } from '@unej.io/config/tailwindcss/content.ts';

export default create({
	content: ['./src/**/*.{ts,tsx}', packages.ui],
});
