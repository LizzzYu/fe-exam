import React from 'react';
import FollowListTab from './FollowListTab';
import FollowListItem from './FollowListItem';
import { FollowListProps } from '../../containers/FollowList/FollowList.type';
import FollowListSkeleton from './FollowListSkeleton';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';

interface FollowListPropsProps extends FollowListProps {
	onLoadMore: () => void;
	isFetching: boolean;
	hasMore: boolean;
	error: Error | null;
}

export default function FollowList({
	tabs,
	setActiveTab,
	activeTab,
	isLoading,
	followData,
	onLoadMore,
	isFetching,
	hasMore,
	error,
}: FollowListPropsProps): React.ReactElement {
	return (
		<div className="w-full bg-secondaryBlack">
			<FollowListTab
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>

			<div className="flex flex-col gap-4 px-4 pb-8 pt-[97px]">
				{isLoading ? (
					<FollowListSkeleton />
				) : (
					<InfiniteScroll
						isLoading={isLoading}
						onLoadMore={onLoadMore}
						isFetching={isFetching}
						hasMore={hasMore}
					>
						{followData?.map((user) => (
							<FollowListItem
								key={user.id}
								avatar={user.avater}
								fullName={user.name}
								userName={user.username}
								isFollowing={user.isFollowing}
							/>
						))}
					</InfiniteScroll>
				)}
				{error && (
					<div className="font-ubuntu typography-subtitle">
						Something went wrong, please try again.
					</div>
				)}
			</div>
		</div>
	);
}
