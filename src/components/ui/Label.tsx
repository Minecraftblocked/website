import React, { ComponentProps, forwardRef } from 'react';
import classNames from 'classnames';
import { cva } from 'class-variance-authority';

interface Props extends ComponentProps<'div'> {
	intent?: 'outlined' | 'alert' | 'success' | 'primary';
	children: React.ReactNode;
}

const labelStyles = cva(classNames('px-2 py-1', 'rounded bg-text/10 text-black border border-text/10', 'font-serif'), {
	variants: {
		intent: {
			outlined: 'text-xs',
			alert: 'border-red-600 text-red-600 text-sm',
			success: 'border-teal-600 text-teal-600 text-sm',
			primary: 'text-xs bg-text/80 border border-text text-white',
		},
	},
});

const Label: React.FC<Props> = ({ intent, children, ...props }) => {
	return (
		<div className={labelStyles({ intent })} {...props}>
			{children}
		</div>
	);
};

export default Label;
