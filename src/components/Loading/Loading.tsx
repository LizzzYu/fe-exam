import React from 'react';
import LoadingSpinner from '../../assets/loading-spinner.svg';

interface LoadingProps {
	width?: number;
	height?: number;
}

export default function Loading({
	width,
	height,
}: LoadingProps): React.ReactElement {
	return (
		<img width={width} height={height} src={LoadingSpinner} alt="Loading" />
	);
}

Loading.defaultProps = {
	width: 72,
	height: 72,
};
