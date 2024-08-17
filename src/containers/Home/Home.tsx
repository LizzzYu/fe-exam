import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
import Input from '../../design-system/Input/Input';
import Button from '../../design-system/Button/Button';
import { RoutePaths } from '../../constants/routes';

function Home(): React.ReactElement {
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState('');
	const [pageSize, setPageSize] = useState(3);

	const handleSearch = () => {
		navigate(`${RoutePaths.RESULTS}?keyword=${keyword}&pageSize=${pageSize}`);
	};

	return (
		<div className="w-full min-h-[600px] pt-0 px-[20px] lg:w-[725px] lg:pt-[54px] lg:px-0 lg:min-h-[690px] relative">
			<section>
				<h5 className="typography-h5 pb-[16px] lg:pb-[20px]">Search</h5>
				<Input onChange={(e) => setKeyword(e.target.value)} />
			</section>
			<div className="hidden lg:block w-full h-[1px] bg-white opacity-[0.1] my-[30px]" />
			<section className="mt-[28px] lg:mt-0">
				<h5 className="typography-h5"># Of Results Per Page</h5>
				<Slider
					sliderValue={pageSize}
					onChange={(value) => setPageSize(value)}
				/>
			</section>
			<div className="absolute w-[calc(100%-40px)] bottom-[210px] h-[1px] bg-white opacity-[0.1] mt-[80px] lg:mt-[23px] lg:w-full lg:static" />
			<Button
				label="SEARCH"
				type="default"
				className="absolute bottom-[90px] w-[calc(100%-40px)] mt-[24px] lg:bottom-[87px] lg:w-[343px]"
				onClick={handleSearch}
			/>
		</div>
	);
}

export default Home;
