import Button from '../../design-system/Button/Button';

interface FollowListItemProps {
	avatar: string;
	fullName: string;
	userName: string;
	isFollowing: boolean;
}

export default function FollowListItem({
	avatar,
	fullName,
	userName,
	isFollowing,
}: FollowListItemProps) {
	return (
		<div className="flex justify-between items-center">
			<div className="flex items-center">
				<div className="bg-lightBlack rounded-[5px] w-[40px] h-[40px] overflow-hidden">
					<img
						src={avatar}
						alt="avatar"
						className="w-full h-full object-cover border-greyLighter border rounded-[5px]"
					/>
				</div>
				<div className="pl-[15px]">
					<p className="typography-body1 text-white">{fullName}</p>
					<p className="typography-body2 text-[rgb(255,255,255,0.5)]">
						{`@${userName}`}
					</p>
				</div>
			</div>
			{isFollowing ? (
				<Button type="contained" label="Following" />
			) : (
				<Button type="outlined" label="Follow" />
			)}
		</div>
	);
}
