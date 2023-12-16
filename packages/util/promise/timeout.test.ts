import { describe, expect, it } from 'vitest';

import { delay } from './timeout.ts';

describe('timeout', () => {
	it('delay', async () => {
		const start = Date.now();
		await delay();
		expect(Date.now() - start).toBeGreaterThanOrEqual(1000);
	});
});
