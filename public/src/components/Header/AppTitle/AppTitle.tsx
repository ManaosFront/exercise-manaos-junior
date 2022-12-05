import { Button, Typography, styled } from '@mui/material';

import { APP_TITLE } from '../../../utils/constants';
import { NavLink } from 'react-router-dom';

export const AppTitle = () => (
	<StyledNavLink to='/'>
		<StyledAppTitle variant='h6' noWrap>
			{APP_TITLE}
		</StyledAppTitle>
	</StyledNavLink>
);

const StyledAppTitle = styled(Typography)`
	display: {
		xs: none;
		sm: block;
	}
	cursor: pointer;
`;

const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: inherit;
`;
