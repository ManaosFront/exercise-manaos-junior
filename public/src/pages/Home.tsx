import { FC, useContext } from 'react';
import { Typography, styled } from '@mui/material';

import { AppContext } from '../contexts';
import logo from '../static/pictures/logo.svg';

export const Home: FC = () => {
	const context = useContext(AppContext);

	return (
		<>
			<Typography variant='h4'>{`Hello, ${context?.user.name}`}</Typography>
			<LogoWrapper>
				<StyledLogo src={logo} alt='logo' />
			</LogoWrapper>
		</>
	);
};

const LogoWrapper = styled('div')`
	text-align: center;
	margin-top: 6rem;
`;

const StyledLogo = styled('img')`
	height: 40vmin;
	pointer-events: none;
	@media (prefers-reduced-motion: no-preference) {
		animation: App-logo-spin infinite 15s linear;
	}
	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
