import React from 'react';
import { FollowListTabLabels } from './FollowList.enums';
import { User } from '../../apis/types';

export interface FollowListProps {
	tabs: FollowListTabLabels[];
	setActiveTab: React.Dispatch<React.SetStateAction<FollowListTabLabels>>;
	activeTab: string;
	followData: User[] | undefined;
	isLoading: boolean;
}
