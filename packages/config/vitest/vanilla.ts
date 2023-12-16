import { defineConfig } from 'vitest/config';

type VanillaOptions = {
	environment?: 'node' | 'jsdom' | 'happy-dom' | 'edge-runtime';
};

const vanilla = (options: VanillaOptions = {}) => {
	const { environment = 'node' } = options;
	return defineConfig({
		test: {
			environment,
			include: ['**/*.test.ts'],
			reporters: ['json', 'default'],
			outputFile: './test-output/vitest.json',
		},
	});
};

export default vanilla;
