import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../utils/constants';
import { Theme, createTheme, responsiveFontSizes } from '@mui/material';

export const getAppTheme = (mode: typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME) => {
	let theme = createTheme({
		typography: {
			fontFamily: 'Rubik, Arial, sans-serif',
		},
		palette: {
			mode,
		},
	});
	theme = responsiveFontSizes(theme);
	return theme;
};
