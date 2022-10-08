import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

import { Box, useTheme } from '@mui/material';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { StyledAgGridReact, columnDefs, defaultColDef, loadingOverlay } from './constants';

import { ActionCellFunction } from './Cells/ActionCell';
import { Document } from '../../api/documentsApi';
import { ExportButton } from './ExportButton';
import { LIGHT_MODE_THEME } from '../../utils/constants';
import { NoDataOverlay } from './NoDataOverlay';
import { api } from '../../api';

export const AwesomeTableComponentWithAgGrid: FC<{ openDetail: ActionCellFunction }> = ({ openDetail }) => {
	const theme = useTheme();

	const [rowData, setRowData] = useState<Document[] | null>(null);

	const [gridApi, setGridApi] = useState<GridApi<Document> | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [failed, setFailed] = useState<Error | null>(null);

	const noRowsOverlayComponent = useMemo(() => NoDataOverlay, []);
	const noRowsOverlayComponentParams = useMemo(
		() => ({ noRowsMessageFunc: () => "Oupsy, pas de données pour l'instant ! On va recharger les données" }),
		[]
	);

	// Export CSV function
	const onBtnExport = useCallback(() => {
		gridApi && gridApi.exportDataAsCsv();
	}, [gridApi]);

	// We fake failing on first try
	const getDocuments = useCallback((firstTry: boolean) => {
		setLoading(true);
		api
			.getDocuments(firstTry)
			.then((rowData) => {
				setRowData(rowData);
			})
			.catch((err) => {
				setFailed(err);
			})
			.finally(() => setLoading(false));
	}, []);

	const onGridReady = useCallback(
		(params: GridReadyEvent) => {
			setGridApi(params.api);
			getDocuments(true);
		},
		[getDocuments]
	);

	// Show/Hide loading and failed overlays
	useEffect(() => {
		if (gridApi) {
			if (loading) {
				gridApi.showLoadingOverlay();
			} else if (failed) {
				gridApi.showNoRowsOverlay();
			} else {
				gridApi.hideOverlay();
			}
		}
	}, [gridApi, loading, failed]);

	// If failed we try again after timeout
	useEffect(() => {
		if (failed) {
			const timeout = setTimeout(() => {
				setFailed(null);
				getDocuments(false);
			}, 3000);
			return () => clearTimeout(timeout);
		}
	}, [failed, getDocuments]);

	return (
		<Box
			sx={{ maxWidth: '800px', height: '400px' }}
			className={theme.palette.mode === LIGHT_MODE_THEME ? 'ag-theme-alpine' : 'ag-theme-alpine-dark'}
		>
			{rowData && <ExportButton onBtnExport={onBtnExport} />}
			<StyledAgGridReact
				rowData={rowData}
				columnDefs={columnDefs((data?: Document) => openDetail(data))}
				defaultColDef={defaultColDef}
				overlayLoadingTemplate={loadingOverlay}
				noRowsOverlayComponent={noRowsOverlayComponent}
				noRowsOverlayComponentParams={noRowsOverlayComponentParams}
				onGridReady={onGridReady}
			/>
		</Box>
	);
};
