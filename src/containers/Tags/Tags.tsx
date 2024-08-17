import React from 'react';
import TagsItem from '../../components/Tags/TagsItem';
import useFetchTags from '../../apis/useFetchTags';
import Loading from '../../components/Loading/Loading';

function Tags(): React.ReactElement {
	const { data, isLoading } = useFetchTags();

	if (isLoading) {
		return (
			<div className="w-full h-full flex-center">
				<Loading />
			</div>
		);
	}

	return (
		<div className="pt-[20px] lg:pt-[80px]">
			<h4 className="ml-[-5px] lg:ml-0 typography-h5 lg:typography-h4">Tags</h4>
			<div className="pt-6 pb-[20px] lg:pb-[80px] grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6 lg:gap-y-9">
				{data?.map((item) => (
					<TagsItem label={item.name} resultNumber={item.count} />
				))}
			</div>
		</div>
	);
}

export default Tags;
