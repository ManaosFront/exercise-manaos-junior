import { Button } from '@mui/material';
import { Document } from '../../../api/documentsApi';
import { ICellRendererParams } from 'ag-grid-community';

export type ActionCellFunction = (data?: Document) => void;

export const ActionCell = (p: ICellRendererParams<Document>, action: ActionCellFunction) => {
	return <Button onClick={() => action(p.data)}>Get Infos</Button>;
};
