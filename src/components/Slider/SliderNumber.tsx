import React, { ChangeEvent, useState, useEffect, useCallback } from 'react';

interface SliderNumberProps {
	values: number[];
	value: number;
	onChange: (value: number) => void;
	lastGap?: number; // distance from the last node to the second last node
}

function SliderNumber({
	values,
	value,
	onChange,
	lastGap = 0,
}: SliderNumberProps): React.ReactElement {
	const [sliderPercentage, setSliderPercentage] = useState(0);

	const totalLength = 725; // total length
	const remainingLength = totalLength - lastGap; // remained distance
	const numOfRemainingGaps = values.length - 2; // numbers of remained nodes
	const eachRemainingGap = remainingLength / numOfRemainingGaps; // distance between remained nodes

	const getSliderPosition = useCallback(
		(index: number) => {
			if (index === values.length - 1) {
				return 100;
			}
			if (index === values.length - 2) {
				return (remainingLength / totalLength) * 100;
			}
			return ((index * eachRemainingGap) / totalLength) * 100;
		},
		[eachRemainingGap, remainingLength, values.length],
	);

	useEffect(() => {
		const valueIndex = values.indexOf(value);

		setSliderPercentage(getSliderPosition(valueIndex));

		const thumbTransform =
			valueIndex === values.length - 1 ? 'translateX(-100%)' : 'none';
		document.documentElement.style.setProperty(
			'--slider-percentage',
			`${getSliderPosition(valueIndex)}%`,
		);
		document.documentElement.style.setProperty(
			'--slider-thumb-transform',
			thumbTransform,
		);
	}, [eachRemainingGap, getSliderPosition, remainingLength, value, values]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const index = Number(event.target.value);
		if (index >= 0 && index < values.length) {
			const newValue = values[index];
			onChange(newValue);
		}
	};

	return (
		<div className="w-full flex flex-col items-center pt-[16px]">
			<div className="relative w-full">
				<input
					type="range"
					min={0}
					max={values.length - 1}
					step={1}
					value={values.indexOf(value)}
					onChange={handleChange}
					className="slider w-full h-2 appearance-none cursor-pointer"
					style={
						{
							'--slider-percentage': `${sliderPercentage}%`,
						} as React.CSSProperties
					}
				/>
				<div className="w-full flex justify-between pt-[7px] relative">
					{values.map((val, index) => (
						<div
							key={val}
							className="text-center w-[20px]"
							style={{
								position: 'absolute',
								left: `${getSliderPosition(index)}%`,
								transform: `${
									index === values.length - 1
										? 'translateX(-100%)'
										: 'translateX(10%)'
								}`,
							}}
						>
							<span
								className={`typography-body1 font-medium ${
									val === value ? 'text-white' : 'text-white/50'
								}`}
							>
								{val}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default SliderNumber;

SliderNumber.defaultProps = {
	lastGap: 0,
};
