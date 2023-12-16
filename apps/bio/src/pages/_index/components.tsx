import { animated, useSpring } from '@react-spring/web';

import { Button } from '@unej.io/ui/core/buttons.tsx';

export const Spring = () => {
	const springs = useSpring({
		from: { opacity: 0, scale: 0.7, y: 50 },
		to: { opacity: 1, scale: 1, y: 0 },
	});

	return (
		<animated.div style={springs}>
			<Button>bio</Button>
		</animated.div>
	);
};
