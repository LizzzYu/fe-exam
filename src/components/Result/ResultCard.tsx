import React from 'react';

interface ResultCardProps {
	src: string;
	title: string;
	userName: string;
}

export default function ResultCard({
	src,
	title,
	userName,
}: ResultCardProps): React.ReactElement {
	return (
		<div className="w-full aspect-[3/2]">
			<div className="w-full bg-secondaryBlack overflow-hidden">
				<img
					src={src}
					alt="avatar"
					className="w-full h-full aspect-[3/2] object-cover"
					loading="lazy"
				/>
			</div>
			<div className="pt-[20px] lg:pt-3">
				<p className="text-white font-ubuntu font-normal text-[14.9px] leading-[22.35px] tracking-[0.14px]">
					{title}
				</p>
				<p className="text-greyScale400 font-ubuntu font-normal text-[11.17px] leading-[16.76px] tracking-[0.14px]">
					{`by ${userName}`}
				</p>
			</div>
		</div>
	);
}
