import { Box, styled } from '@mui/material';
import { FC, useState } from 'react';

import { FOOTER_HEIGHT } from '../../utils/constants';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
	const [open, setOpen] = useState(false);
	const toggleNavigation = () => setOpen((status) => !status);

	return (
		<LayoutWrapper>
			<ContentWrapper>
				<Box component='header'>
					<Header toggleNavigation={toggleNavigation} />
				</Box>
				<Navigation open={open} handleClose={toggleNavigation} />
				<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
					<DrawerHeader />
					<Outlet />
				</Box>
			</ContentWrapper>
			<Box component='footer'>
				<Footer />
			</Box>
		</LayoutWrapper>
	);
};

const LayoutWrapper = styled('div')`
	min-height: 100vh;
`;

const ContentWrapper = styled('div')`
	display: flex;
	min-height: calc(100vh - ${FOOTER_HEIGHT}px);
`;

const DrawerHeader = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}));