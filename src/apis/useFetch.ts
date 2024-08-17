import { QueryFunctionContext, QueryKey, useQuery } from 'react-query';

interface QueryParams {
	[key: string]: any;
}

const fetchData = async ({
	queryKey,
}: QueryFunctionContext<QueryKey, QueryParams>): Promise<any> => {
	const [url, params] = queryKey as [string, QueryParams];
	const queryString = new URLSearchParams(params).toString();
	const response = await fetch(`${url}${queryString}`);

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	return response.json();
};

const useFetch = <TData>(
	url: string, params: QueryParams,
) => useQuery<TData, Error>([url, params], fetchData);

export default useFetch;
