import { exec } from 'node:child_process';

import { defineConfig } from 'tsup';

import { list } from '../../env/const.ts';

const deno = () => {
	const onSuccessDenoRun = (() => {
		let run = false;
		return async () => {
			if (run) return;
			run = true;
			const e = exec('cd dist && deno run -A --watch main.js');
			e.stdout?.on('data', (x) => process.stdout.write(x.toString()));
			e.stderr?.on('data', (x) => process.stderr.write(x.toString()));
			e.on('exit', (code) => process.exit(typeof code === 'number' ? code : 1));
		};
	})();

	return defineConfig(({ env = {} }) => {
		const DEV = env.NODE_ENV === 'development';
		const PROD = env.NODE_ENV === 'production';

		let processENVValue: string | undefined;
		for (const item of list) if ((processENVValue = process.env[item])) env[item] = processENVValue;

		return {
			env,
			entry: ['src/app.ts'],
			target: 'deno1.38',
			format: ['esm'],
			publicDir: true,
			minify: PROD && 'terser',
			clean: PROD,
			watch: DEV,
			...(DEV
				? {
						onSuccess: async () => {
							await onSuccessDenoRun();
						},
					}
				: {}),
		};
	});
};

export default deno;
