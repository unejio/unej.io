import { describe, expect, it, vi } from 'vitest';

import { invariant } from './invariant.ts';

describe('invariant', () => {
	it('invariant', () => {
		const fn = vi.fn();
		const input: unknown = 'invariant';

		try {
			invariant(typeof input === 'string', 'Invalid input type');
			fn();
		} catch (error) {
		} finally {
			expect(fn).toBeCalledTimes(1);
		}

		try {
			invariant(typeof input === 'boolean', 'Invalid input type');
			fn();
		} catch (error) {
		} finally {
			expect(fn).toBeCalledTimes(1);
		}
	});
});
