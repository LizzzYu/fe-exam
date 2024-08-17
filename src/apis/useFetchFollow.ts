import useFetch from './useFetch';
import { FollowListTabLabels } from '../containers/FollowList/FollowList.enums';
import { UserDataType } from './types';

const BASE_URL = 'https://avl-frontend-exam.herokuapp.com/api/users/';
export const INIT_FOLLOW_PAGE_SIZE = 15;

const useFetchFollow = (activeTab: FollowListTabLabels, page: number) => {
	const followersUrl = `all?pageSize=${INIT_FOLLOW_PAGE_SIZE}&`;
	const followingsUrl = `friends?pageSize=${INIT_FOLLOW_PAGE_SIZE}&`;

	const url = activeTab === FollowListTabLabels.FOLLOWERS ? `${BASE_URL}${followersUrl}` : `${BASE_URL}${followingsUrl}`;

	return useFetch<UserDataType>(url, { page });
};

export default useFetchFollow;
