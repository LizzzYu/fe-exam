import React from 'react';

interface InputProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

function Input({ onChange, value }: InputProps): React.ReactElement {
	return (
		<input
			type="text"
			onChange={onChange}
			className="custom-input"
			placeholder="Keyword"
			value={value}
		/>
	);
}

export default Input;
