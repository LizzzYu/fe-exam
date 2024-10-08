import React from 'react';

function MenuItemIcon(
	props: React.SVGProps<SVGSVGElement>,
	svgRef?: React.Ref<SVGSVGElement>,
) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			ref={svgRef}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.34146 2.00006C7.51304 2.00006 6.84146 2.67163 6.84146 3.50006C6.84146 4.32849 7.51304 5.00006 8.34146 5.00006H18.7578V14.4234C18.7578 15.2518 19.4294 15.9234 20.2578 15.9234C21.0863 15.9234 21.7578 15.2518 21.7578 14.4234V4.50006C21.7578 3.11935 20.6386 2.00006 19.2578 2.00006H8.34146ZM4 6.9147H15.122C16.2265 6.9147 17.122 7.81013 17.122 8.9147V20.0366C17.122 21.1412 16.2265 22.0366 15.122 22.0366H4C2.89543 22.0366 2 21.1412 2 20.0366V8.9147C2 7.81013 2.89543 6.9147 4 6.9147Z"
				fill={props.fill ?? 'white'}
			/>
		</svg>
	);
}

const ForwardRef = React.forwardRef(MenuItemIcon);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
