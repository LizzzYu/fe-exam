import useFetch from './useFetch';
import { UserDataType } from './types';

const useFetchResult = (page: number, pageSize: number, keyword: string) => {
	const url = 'https://avl-frontend-exam.herokuapp.com/api/users/all?';

	return useFetch<UserDataType>(url, { page, pageSize, keyword });
};

export default useFetchResult;
