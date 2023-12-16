import { describe, expect, it, vi } from 'vitest';

import * as v from 'valibot';

import { parseRequestFormData } from './react-router-dom.ts';

describe('react-router-dom', () => {
	it('parseRequestFormData', async () => {
		const fn = vi.fn();

		try {
			await parseRequestFormData(
				v.object({ hello: v.string() }),
				new Request('http://localhost:3000', {
					method: 'POST',
					body: (() => {
						const fd = new FormData();
						fd.append('hello', 'world');
						return fd;
					})(),
				})
			);
			fn();
		} catch (error) {}
		expect(fn).toBeCalledTimes(1);
	});
});
