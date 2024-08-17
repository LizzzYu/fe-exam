import React from 'react';

export default function FollowListSkeleton(): React.ReactElement {
	const skeletonNumber = 7;
	return (
		<>
			{Array.from({ length: skeletonNumber }).map(() => (
				<div key={Math.random()} className="flex justify-between items-center">
					<div className="flex items-center">
						<div className="bg-grey rounded-[5px] w-[40px] h-[40px] animate-shimmer" />
						<div className="pl-[15px]">
							<div className="w-[150px] h-[20px] bg-grey mb-[10px] animate-shimmer" />
							<div className="w-[100px] h-[20px] bg-grey animate-shimmer" />
						</div>
					</div>
				</div>
			))}
		</>
	);
}
