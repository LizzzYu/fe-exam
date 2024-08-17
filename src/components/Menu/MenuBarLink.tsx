import React from 'react';
import { Link } from 'react-router-dom';
import MenuItemIcon from '../../assets/svg/MenuItemIcon';
import { MenuTab } from './MenuBar.enums';
import { GREY } from '../../styles/colors';

interface MenuBarLinkProps {
	to: string;
	tabName: MenuTab;
	currentTab: MenuTab;
	onClick: () => void;
	isMobile?: boolean;
}

function MenuBarLink({
	to,
	tabName,
	currentTab,
	onClick,
	isMobile = false,
}: MenuBarLinkProps): React.ReactElement {
	return (
		<Link
			to={to}
			className="text-white flex flex-col items-center lg:pt-[7px] lg:pl-[29px] lg:pr-[27px]"
			onClick={onClick}
		>
			<MenuItemIcon fill={currentTab !== tabName ? GREY : undefined} />
			{!isMobile && (
				<p className="caption-regular mb-[15px] h-[18px]">
					{currentTab === tabName ? tabName : ' '}
				</p>
			)}
		</Link>
	);
}

MenuBarLink.defaultProps = {
	isMobile: false,
};

export default MenuBarLink;
