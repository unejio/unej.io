import { describe, expect, it } from 'vitest';

import { HTTPException } from 'hono/http-exception';

import { NotFound } from './http-exception.ts';

describe('http-exception', () => {
	it('instance', async () => {
		expect(NotFound('NotFound')).toBeInstanceOf(HTTPException);
	});
});
