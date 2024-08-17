import React from 'react';
import SliderNumber from './SliderNumber';

interface SliderProps {
	sliderValue: number;
	onChange: (value: number) => void;
}

function Slider({ sliderValue, onChange }: SliderProps): React.ReactElement {
	const values = [3, 6, 9, 12, 15, 50];

	const handleSliderChange = (value: number) => {
		onChange(value);
	};

	return (
		<div className="pt-[16px] pb-[30px] relative lg:pt-[20px]">
			<div className="inline-flex items-end">
				<h3 className="typography-h3-bold" style={{ lineHeight: '50px' }}>
					{sliderValue}
				</h3>
				<p className="typography-subtitle pl-[10px] pb-1">results</p>
			</div>
			<SliderNumber
				values={values}
				value={sliderValue}
				onChange={handleSliderChange}
				lastGap={185}
			/>
		</div>
	);
}

export default Slider;
