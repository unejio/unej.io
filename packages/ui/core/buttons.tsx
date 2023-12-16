import { forwardRef } from 'react';
import type { PropsWithChildren } from 'react';

import { mergeProps, useButton, useFocusRing, useHover } from 'react-aria';
import type { AriaButtonOptions } from 'react-aria';

import clsx from 'clsx';

import { useImperativeHandleRef } from './internal/hooks.ts';
import type { PropsWithClassesValue } from './internal/styles.ts';

type ButtonProps = PropsWithChildren<PropsWithClassesValue<Omit<AriaButtonOptions<'button'>, 'elementType'>>>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, forwardedRef) => {
	const ref = useImperativeHandleRef(forwardedRef);

	const { isDisabled } = props;
	const { buttonProps, isPressed } = useButton(props, ref);
	const { focusProps, isFocusVisible } = useFocusRing(props);
	const { hoverProps, isHovered } = useHover(props);

	return (
		<button
			ref={ref}
			{...mergeProps(buttonProps, focusProps, hoverProps)}
			className={clsx(
				'inline-flex items-center justify-center gap-2 outline-none',
				'rounded-12 border border-p-6',
				'h-10 px-5 py-1 font-mono text-z3 font-w5',
				isDisabled ? 'bg-n-6 text-n-8' : [isPressed ? 'bg-p-5' : isHovered ? 'bg-p-4' : 'bg-p-3', 'text-p-11'],
				isFocusVisible && 'ring-2 ring-p-9 ring-offset-2 ring-offset-p-1',
				className
			)}
		>
			{children}
		</button>
	);
});

export { Button };
