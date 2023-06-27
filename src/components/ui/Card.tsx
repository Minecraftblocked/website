import React, { ComponentProps, forwardRef } from 'react';
import classNames from 'classnames';
import { cva } from 'class-variance-authority';

interface Props extends ComponentProps<'div'> {
	intent?: 'big' | 'small';
	className?: string;
	children: React.ReactNode;
}

const cardStyles = cva(
	classNames(
		'rounded bg-text/10 hover:bg-text/20 text-black border border-text/10',
		'relative overflow-hidden',
		'transition duration-300',
	),
	{
		variants: {
			intent: {
				big: 'p-4',
				small: 'p-2',
			},
		},
	},
);
const Card = forwardRef<HTMLDivElement, Props>(function Div({ intent, children, className, ...props }, ref) {
	return (
		<div className={cardStyles({ intent })} ref={ref} {...props}>
			{children}
		</div>
	);
});

export default Card;
