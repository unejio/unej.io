import { defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';

type VanillaOptions = {
	environment?: 'node' | 'jsdom' | 'happy-dom' | 'edge-runtime';
};

const vanilla = (options: VanillaOptions = {}) => {
	const { environment = 'jsdom' } = options;
	return defineConfig({
		plugins: [react()],
		test: {
			environment,
			include: ['**/*.test.{ts,tsx}'],
			reporters: ['json', 'default'],
			outputFile: './test-output/vitest.json',
		},
	});
};

export default vanilla;
