import { FOOTER_HEIGHT, FOOTER_TEXT } from '../../utils/constants';
import { Typography, styled } from '@mui/material';

export const Footer = () => (
	<FooterWrapper>
		<FooterText variant='caption' color='textSecondary'>
			{FOOTER_TEXT}
		</FooterText>
	</FooterWrapper>
);

const FooterWrapper = styled('div')(
	({ theme }) => `
    flex: 1;
    display: flex;
    justify-content: center;
    background: ${theme.palette.background.paper};
    minHeight: ${FOOTER_HEIGHT};
`
);

const FooterText = styled(Typography)`
	word-spacing: 0.1rem;
	text-transform: uppercase;
`;
