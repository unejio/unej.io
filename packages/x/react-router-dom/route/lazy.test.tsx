import { describe, expect, it } from 'vitest';

import { element, index, path, splat } from './lazy.ts';

describe('lazy', () => {
	it('element', async () => {
		const route = element(() => Promise.resolve({ Component: () => <div>children</div> }));

		expect(route).toBeTypeOf('object');
	});

	it('index', async () => {
		const route = index(() => Promise.resolve({ Component: () => <div>children</div> }));

		expect(route).toBeTypeOf('object');
		expect(route.index).toEqual(true);
	});

	it('path', async () => {
		const route = path('path', () => Promise.resolve({ Component: () => <div>children</div> }));

		expect(route).toBeTypeOf('object');
		expect(route.path).toEqual('path');
	});

	it('splat', async () => {
		const route = splat(() => Promise.resolve({ Component: () => <div>children</div> }));

		expect(route).toBeTypeOf('object');
		expect(route.path).toEqual('*');
	});
});
