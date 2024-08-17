import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import MenuBar from '../../components/Menu/MenuBar';
import Logo from '../../assets/logo.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import FollowListContainer from '../FollowList/FollowListContainer';
import { RoutePaths } from '../../constants/routes';

function Layout(): React.ReactElement {
	const location = useLocation();
	const navigate = useNavigate();
	const isHome = location.pathname === RoutePaths.HOME;

	return (
		<div className="flex flex-col min-h-screen lg:flex-row">
			{/* Mobile Header */}
			<div className="h-[70px] bg-primaryBlack lg:hidden">
				{isHome ? (
					<div className="flex h-[70px] pl-[21px] justify-between items-center text-white">
						<img src={Logo} alt="logo" className="h-8" width="35px" />
					</div>
				) : (
					<button
						className="flex-center fixed z-10 w-full h-[70px] bg-primaryBlack"
						type="button"
						onClick={() => navigate(RoutePaths.HOME)}
					>
						<div className="inline-flex absolute top-[17px] left-[19px]">
							<img width={26} height={26} src={arrowLeft} alt="arrow-left" />
							<h5 className="typography-h5 pl-[13px]">Home Page</h5>
						</div>
					</button>
				)}
			</div>

			{/* Sidebar for Desktop */}
			<div className="lg:flex hidden lg:w-20 bg-secondaryBlack text-white">
				<MenuBar />
			</div>

			{/* Content */}
			<div
				style={{ scrollbarGutter: 'stable', minHeight: 'calc(100vh - 70px)' }}
				className="flex flex-1 h-screen lg:px-[130px] overflow-y-auto bg-primaryBlack justify-center hide-scrollbar"
			>
				<Outlet />
			</div>

			{/* Follow List for Desktop */}
			{location.pathname !== RoutePaths.TAGS && (
				<div
					style={{ scrollbarGutter: 'stable' }}
					className="hidden xl2:flex xl2:w-[375px] h-screen overflow-y-auto bg-secondaryBlack hide-scrollbar"
				>
					<FollowListContainer />
				</div>
			)}

			{/* Mobile Bottom Menu */}
			{location.pathname === RoutePaths.HOME && (
				<div
					className="flex justify-around items-center bg-primaryBlack text-white lg:hidden fixed bottom-0 w-full"
					style={{
						boxShadow: '0px 0.5px 0px 0px rgba(0, 0, 0, 0.8) inset',
						background: 'rgba(24, 24, 24, 0.2)',
					}}
				>
					<MenuBar isMobile />
				</div>
			)}
		</div>
	);
}

export default Layout;
