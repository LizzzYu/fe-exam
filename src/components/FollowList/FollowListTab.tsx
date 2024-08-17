import { FollowListProps } from '../../containers/FollowList/FollowList.type';

interface FollowListTabProps
	extends Omit<FollowListProps, 'followData' | 'isLoading'> {}

export default function FollowListTab({
	tabs,
	setActiveTab,
	activeTab,
}: FollowListTabProps) {
	return (
		<div className="flex h-[65px] w-[375px] bg-secondaryBlack fixed">
			{tabs.map((tab) => (
				<button
					key={tab}
					className={`flex justify-center items-start mt-[32px] bg-secondaryBlack typography-subtitle w-full border-b-2 ${
						tab === activeTab
							? 'border-white text-white font-bold'
							: 'border-lightBlack text-greyLight'
					}`}
					type="button"
					onClick={() => setActiveTab(tab)}
				>
					{tab}
				</button>
			))}
		</div>
	);
}
