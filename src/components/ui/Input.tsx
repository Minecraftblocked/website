import { ComponentProps, forwardRef } from 'react';
import classNames from 'classnames';

interface Props extends ComponentProps<'input'> {
	className?: string;
}
const Input = forwardRef<HTMLInputElement, Props>(function Input({ className, type = 'text', ...props }, ref) {
	return (
		<div>
			<input
				className={classNames(
					'w-full p-4',
					'bg-text/10 rounded-md border border-text/10',
					'text-text transition-colors duration-500',
					'placeholder:text-text/60',
					'focus:border-text/20 focus:outline-none placeholder:select-none',
					className,
				)}
				type={type}
				ref={ref}
				{...props}
			/>
		</div>
	);
});

export default Input;
