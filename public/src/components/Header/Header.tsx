import { AppBar, Box, Toolbar } from '@mui/material';
import { DefaultMenu, MobileMenu } from './Menu';
import { Messages, More, Notifications, UserAccount } from '../Actions';
import React, { useState } from 'react';

import { AppTitle } from './AppTitle';
import { Hamburger } from './Hamburger';
import { ThemeSwitcher } from './ThemeSwitcher';

interface HeaderProps {
	toggleNavigation: () => void;
}

export const Header = ({ toggleNavigation }: HeaderProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setMobileMoreAnchorEl(event.currentTarget);

	const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	return (
		<>
			<AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar disableGutters variant='dense'>
					<Hamburger toggleNavigation={toggleNavigation} />
					<AppTitle />
					<div id='export_btn_csv'></div>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
						<ThemeSwitcher />
						<Messages total={1} />
						<Notifications total={2} />
						<UserAccount onClick={handleProfileMenuOpen} />
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<More onClick={handleMobileMenuOpen} />
					</Box>
				</Toolbar>
			</AppBar>
			<MobileMenu
				isMenuOpen={Boolean(mobileMoreAnchorEl)}
				handleMenuOpen={handleMobileMenuOpen}
				handleMenuClose={handleMobileMenuClose}
				anchorEl={mobileMoreAnchorEl}
			/>
			<DefaultMenu isMenuOpen={Boolean(anchorEl)} handleMenuClose={handleMenuClose} anchorEl={anchorEl} />
		</>
	);
};
