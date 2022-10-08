import { Box } from '@mui/material';
import { ICellRendererParams } from 'ag-grid-community';

export const NoDataOverlay = (props: ICellRendererParams & { noRowsMessageFunc: () => string }) => {
	return (
		<Box
			className='ag-overlay-loading-center'
			style={{ backgroundColor: 'lightsteelblue', height: '9%', maxWidth: '250px' }}
		>
			{props.noRowsMessageFunc()}
		</Box>
	);
};
