import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { MenuTab } from './MenuBar.enums';
import MenuBarLink from './MenuBarLink';
import { RoutePaths } from '../../constants/routes';

interface MenuBarProps {
	isMobile?: boolean;
}

function MenuBar({ isMobile = false }: MenuBarProps): React.ReactElement {
	const location = useLocation();
	const [currentTab, setCurrentTab] = useState<MenuTab>(MenuTab.HOME);

	useEffect(() => {
		if (
			location.pathname === RoutePaths.HOME ||
			location.pathname === RoutePaths.RESULTS
		) {
			setCurrentTab(MenuTab.HOME);
		} else if (location.pathname === RoutePaths.TAGS) {
			setCurrentTab(MenuTab.TAGS);
		}
	}, [location.pathname]);

	return (
		<div
			className={`flex ${
				isMobile
					? 'flex-row justify-center items-center space-x-[50px] h-[66px]'
					: 'flex-col items-center lg:w-20 bg-secondaryBlack fixed'
			} text-white`}
		>
			{!isMobile && (
				<div className="flex justify-center items-center h-[88px]">
					<div className="bg-primaryBlack">
						<img src={Logo} alt="logo" />
					</div>
				</div>
			)}
			<MenuBarLink
				to={RoutePaths.HOME}
				tabName={MenuTab.HOME}
				currentTab={currentTab}
				onClick={() => setCurrentTab(MenuTab.HOME)}
				isMobile={isMobile}
			/>
			<MenuBarLink
				to={RoutePaths.TAGS}
				tabName={MenuTab.TAGS}
				currentTab={currentTab}
				onClick={() => setCurrentTab(MenuTab.TAGS)}
				isMobile={isMobile}
			/>
		</div>
	);
}

MenuBar.defaultProps = {
	isMobile: false,
};

export default MenuBar;
