import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

import { ActionCell, SimpleCell, StatusCell } from './Cells';

import { ActionCellFunction } from './Cells/ActionCell';
import { AgGridReact } from 'ag-grid-react';
import { Document } from '../../api/documentsApi';
import { ICellRendererParams } from 'ag-grid-community';
import { styled } from '@mui/material';

export const StyledAgGridReact = styled(AgGridReact)`
	.ag-row .ag-cell {
		display: flex;
		justify-content: left;
		align-items: center;
	}
`;

export const defaultColDef = { flex: 1, cellRenderer: SimpleCell };
export const loadingOverlay = '<span className="ag-overlay-loading-center">Chargement...</span>';

export const columnDefs = (action: ActionCellFunction) => [
	{ field: 'fileName' },
	{ field: 'uploadedBy' },
	{ field: 'uploadedDate' },
	{ field: 'status', cellRenderer: StatusCell },
	{
		headerName: 'Infos',
		field: 'fileId',
		cellRenderer: (p: ICellRendererParams<Document>) => ActionCell(p, action),
	},
];
