import type { FC } from 'react';

import { animated, useSpring } from '@react-spring/web';

import { Button } from '@unej.io/ui/core/buttons.tsx';

export const Component: FC = () => {
	const springs = useSpring({
		from: { opacity: 0, scale: 0.7, y: 50 },
		to: { opacity: 1, scale: 1, y: 0 },
	});

	return (
		<div className="flex h-screen w-screen items-center justify-center overflow-hidden">
			<animated.div style={springs}>
				<Button>web</Button>
			</animated.div>
		</div>
	);
};

if (import.meta.env.DEV) Component.displayName = 'routes/index.page';
