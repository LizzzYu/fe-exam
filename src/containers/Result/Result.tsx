import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ResultCard from '../../components/Result/ResultCard';
import arrowLeft from '../../assets/arrow-left.svg';
import useFetchResult from '../../apis/useFetchResult';
import Button from '../../design-system/Button/Button';
import { User } from '../../apis/types';
import { RoutePaths } from '../../constants/routes';
import ResultSkeleton from '../../components/Result/ResultSkeleton';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';

const useUrlQueryParams = () => {
	const location = useLocation();
	return new URLSearchParams(location.search);
};

function Result(): React.ReactElement {
	const navigate = useNavigate();
	const queryParams = useUrlQueryParams();
	const initialPageSize = parseInt(queryParams.get('pageSize') || '3', 10);
	const keyword = queryParams.get('keyword') || '';

	const [page, setPage] = useState<number>(1);
	const [pageSize] = useState<number>(initialPageSize);
	const [resultData, setResultData] = useState<User[]>([]);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [isContentLongEnough, setIsContentLongEnough] =
		useState<boolean>(false);

	const contentRef = useRef<HTMLDivElement>(null);

	const { data, isLoading, isFetching, error } = useFetchResult(
		page,
		pageSize,
		keyword,
	);

	// init the result page
	useEffect(() => {
		setPage(1);
		setResultData([]);
	}, []);

	useEffect(() => {
		if (data?.data) {
			setResultData((prevData) => [...prevData, ...data.data]);
			if (data.data.length < pageSize) {
				setHasMore(false);
			}
		}
	}, [data, pageSize]);

	// counting content height
	useEffect(() => {
		if (contentRef.current) {
			const contentHeight = contentRef.current.clientHeight;
			const windowHeight = window.innerHeight;
			setIsContentLongEnough(contentHeight > windowHeight);
		}
	}, [resultData]);

	const handleMoreClick = () => {
		setPage((prevPage) => prevPage + 1);
	};

	const getButtonLabel = () => {
		if (isLoading) {
			return 'LOADING...';
		}
		if (error) {
			return 'RETRY';
		}
		return 'MORE';
	};

	const isResultsLoading = isLoading && page === 1;
	const isLastPage = page === data?.totalPages;

	return (
		<div className="px-[20px] lg:px-0 w-full relative pb-[58px]">
			<div className="inline-flex justify-center items-center pt-[20px] lg:pt-[92px] lg:transform lg:-translate-x-[44px]">
				<button
					type="button"
					onClick={() => navigate(RoutePaths.HOME)}
					className="hidden lg:block"
				>
					<img
						width={26}
						height={26}
						src={arrowLeft}
						alt="arrow-left"
						className="hover:cursor-pointer"
					/>
				</button>
				<h4 className="typography-h5 lg:typography-h4 lg:pl-[25px]">Results</h4>
			</div>

			<InfiniteScroll
				isLoading={isResultsLoading}
				isFetching={isFetching}
				hasMore={hasMore}
				onLoadMore={handleMoreClick}
				disabled={!isContentLongEnough || isLastPage}
			>
				<div
					ref={contentRef}
					className="grid grid-cols-1 pb-[39px] md:grid-cols-3 gap-x-[34px] gap-y-[40px] lg:gap-y-[31px] pt-[24px] lg:pt-[24px]"
				>
					{isResultsLoading && <ResultSkeleton />}
					{!isResultsLoading &&
						resultData &&
						resultData.map((item) => (
							<div key={item.id} className="w-full">
								<ResultCard
									src={item.avater}
									title={item.name}
									userName={item.username}
								/>
							</div>
						))}
				</div>
			</InfiniteScroll>

			{!isResultsLoading && resultData.length === 0 && (
				<div className="font-ubuntu typography-subtitle">
					No Results For Search
				</div>
			)}

			{error && (
				<div className="font-ubuntu typography-subtitle">
					Something went wrong, please try again.
				</div>
			)}

			{resultData.length !== 0 && !isLastPage && (
				<div className="hidden lg:flex lg:justify-start lg:pb-[90px]">
					<Button
						type="default"
						label={getButtonLabel()}
						className="w-[343px] lg:w-[343px]"
						onClick={handleMoreClick}
						disabled={isLoading}
					/>
				</div>
			)}
		</div>
	);
}

export default Result;
