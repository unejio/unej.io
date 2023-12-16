import { afterEach, describe, expect, it } from 'vitest';

import { cleanup, render } from '@testing-library/react';

import { Button } from './buttons.tsx';

afterEach(() => {
	cleanup();
});

describe('Button', () => {
	it('render', () => {
		const { getByTestId } = render(<Button data-testid="root">hello</Button>);
		const element = getByTestId('root');
		expect(element.tagName).toEqual('BUTTON');
	});
});
