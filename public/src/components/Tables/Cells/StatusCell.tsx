import { Chip } from '@mui/material';

export const StatusCell = (p: { value: string }) => {
	const status = p.value.toUpperCase();
	const getStatusColorFromLabel = () => {
		return status === 'OK' ? 'success' : 'error';
	};
	return <Chip size='small' variant='outlined' label={status} color={getStatusColorFromLabel()} />;
};
