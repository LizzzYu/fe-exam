import React from 'react';

export default function ResultSkeleton(): React.ReactElement {
	const skeletonNumber = 3;
	return (
		<>
			{Array.from({ length: skeletonNumber }).map(() => (
				<div key={Math.random()} className="w-full aspect-[3/2]">
					<div className="w-full bg-grey overflow-hidden animate-shimmer">
						<div className="w-full h-full aspect-[3/2] object-cover" />
					</div>
					<div className="pt-3">
						<div className="w-24 h-4 bg-grey mb-1 animate-shimmer" />
						<div className="w-10 h-4 bg-grey animate-shimmer" />
					</div>
				</div>
			))}
		</>
	);
}
