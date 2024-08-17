import React from 'react';

interface TagsItemProps {
	label: string;
	resultNumber: number;
}

export default function TagsItem({
	label,
	resultNumber,
}: TagsItemProps): React.ReactElement {
	return (
		<div>
			<div className="relative w-[150px] h-[150px] rounded-[8px] bg-[rgba(255,255,255,6%)] flex items-center justify-center">
				<div className="absolute typography-h5 font-bold text-white max-w-[125px] bottom-[18px] left-[14px] inline-block py-[3px] px-[14px] shadow-[0_0_0_4px_white] rounded-[4px] truncate">
					{label}
				</div>
			</div>
			<div className="pt-[10px] max-w-[150px]">
				<p className="font-ubuntu text-white text-[14.9px] leading-[22.35px] tracking-[0.14px] truncate">
					{label}
				</p>
				<p className="font-ubuntu text-[rgba(178,178,178,1)] text-[11.17px] leading-[16.76px] tracking-[0.37px]">
					{`${resultNumber} Results`}
				</p>
			</div>
		</div>
	);
}
