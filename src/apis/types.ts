export interface User {
	id: string;
	name: string;
	username: string;
	avater: string;
	isFollowing: boolean;
}

export interface UserDataType {
	data: User[];
	total: number;
	page: number;
	pageSize: number;
	totalPages: number;
}

export interface TagsDataType {
	id: string;
	name: string;
	count: number;
}
