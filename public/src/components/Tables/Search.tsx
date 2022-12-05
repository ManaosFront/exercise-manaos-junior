import { Box, InputBase, alpha, styled } from '@mui/material';

import { HistoryContext } from '../../contexts';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';

export const Search = () => {
	const { searchHistory, setSearchHistory } = useContext(HistoryContext);

	return (
		<Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
			<SearchWrapper>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
					onChange={(e) => setSearchHistory(e.target.value)}
					placeholder='Search…'
					value={searchHistory}
					inputProps={{ 'aria-label': 'search' }}
				/>
			</SearchWrapper>
		</Box>
	);
};

const SearchWrapper = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.primary.main, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.primary.main, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));
