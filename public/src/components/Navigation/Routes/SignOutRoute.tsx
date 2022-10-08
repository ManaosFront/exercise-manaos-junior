import { IconButton, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';

import ExitToApp from '@mui/icons-material/ExitToApp';

export const SignOutRoute = () => {
	const handleSignOutClick = () => {
		alert('Bye Bye see you soon !');
	};

	return (
		<StyledListItemButton onClick={handleSignOutClick}>
			<ListItemIcon>
				<IconButton size='small'>
					<ExitToApp />
				</IconButton>
			</ListItemIcon>
			<ListItemText primary='Sign Out' />
		</StyledListItemButton>
	);
};

const StyledListItemButton = styled(ListItemButton)`
	position: absolute;
	bottom: 0;
	width: 100%;
`;
