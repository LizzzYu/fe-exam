import React, { useEffect, useState } from 'react';
import FollowList from '../../components/FollowList/FollowList';
import { FollowListTabLabels } from './FollowList.enums';
import useFetchFollow, {
	INIT_FOLLOW_PAGE_SIZE,
} from '../../apis/useFetchFollow';
import { User } from '../../apis/types';

export default function FollowListContainer(): React.ReactElement {
	const tabs = Object.values(FollowListTabLabels);

	const [activeTab, setActiveTab] = useState<FollowListTabLabels>(tabs[0]);
	const [page, setPage] = useState<number>(1);
	const [pageSize] = useState<number>(INIT_FOLLOW_PAGE_SIZE);
	const [resultData, setResultData] = useState<User[]>([]);
	const [hasMore, setHasMore] = useState<boolean>(true);

	const { data, isLoading, isFetching } = useFetchFollow(activeTab, page);

	useEffect(() => {
		setPage(1);
		setResultData([]);
		setHasMore(true);
	}, [activeTab]);

	useEffect(() => {
		if (data?.data) {
			setResultData((prevData) => [...prevData, ...data.data]);
			if (data.data.length < pageSize) {
				setHasMore(false);
			}
		}
	}, [data, pageSize]);

	const handleLoadMore = () => {
		setPage((prevPage) => prevPage + 1);
	};

	return (
		<FollowList
			tabs={tabs}
			activeTab={activeTab}
			setActiveTab={setActiveTab}
			followData={resultData}
			isLoading={isLoading && page === 1}
			onLoadMore={handleLoadMore}
			isFetching={isFetching}
			hasMore={hasMore}
		/>
	);
}
