import React, { ComponentProps, forwardRef } from 'react';
import classNames from 'classnames';
import { cva } from 'class-variance-authority';

interface Props extends ComponentProps<'button'> {
	intent?: 'small';
	children: React.ReactNode;
}

const buttonStyles = cva(
	classNames(
		'px-4 py-2 ',
		'border rounded bg-text/10 hover:bg-text/20 border-text/10',
		'font-serif text-sm transition-colors',
	),
	{
		variants: {
			intent: {
				small: 'text-xs',
			},
		},
	},
);

const Button = forwardRef<HTMLButtonElement, Props>(function Div({ intent, children, ...props }, ref) {
	return (
		<button className={buttonStyles({ intent })} ref={ref} {...props}>
			{children}
		</button>
	);
});

export default Button;
