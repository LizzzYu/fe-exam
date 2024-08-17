import React from 'react';

interface InputProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ onChange }: InputProps) {
	return (
		<input onChange={onChange} className="custom-input" placeholder="Keyword" />
	);
}

export default Input;
