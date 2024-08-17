import React, { useRef, useEffect } from 'react';

interface InfiniteScrollProps {
	isLoading: boolean;
	isFetching: boolean;
	hasMore: boolean;
	onLoadMore: () => void;
	children: React.ReactNode;
	disabled?: boolean;
}

export default function InfiniteScroll({
	isLoading,
	isFetching,
	hasMore,
	onLoadMore,
	children,
	disabled,
}: InfiniteScrollProps): React.ReactElement {
	const loadMoreRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const currentRef = loadMoreRef.current;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !isLoading && hasMore && !isFetching) {
					onLoadMore();
				}
			},
			{ threshold: 1.0 },
		);

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [isLoading, hasMore, isFetching, onLoadMore]);

	return (
		<>
			{children}
			{!disabled && hasMore && <div ref={loadMoreRef} />}
		</>
	);
}

InfiniteScroll.defaultProps = {
	disabled: false,
};
