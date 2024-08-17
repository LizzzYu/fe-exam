import { TagsDataType } from './types';
import useFetch from './useFetch';

const useFetchTags = () => {
	const url = 'https://avl-frontend-exam.herokuapp.com/api/tags';
	return useFetch<TagsDataType[]>(url, {});
};

export default useFetchTags;
