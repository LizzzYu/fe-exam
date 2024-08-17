import React from 'react';

interface ButtonProps {
	type: 'default' | 'outlined' | 'contained';
	label: string;
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
}

export default function Button({
	type = 'default',
	label,
	className,
	disabled,
	onClick,
}: ButtonProps): React.ReactElement {
	const buttonStyles = {
		default: 'button-default',
		outlined: 'button-outlined',
		contained: 'button-contained',
	};

	const baseClass = 'button-base';

	const buttonClass = `${baseClass} ${buttonStyles[type]} ${
		className && className
	}`;

	return (
		<button
			type="button"
			className={buttonClass}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
}

Button.defaultProps = {
	className: '',
	onClick: () => {},
	disabled: false,
};
