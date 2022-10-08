import { useEffect, useMemo, useRef, useState } from 'react';

import { ActionItem } from '../Actions/ActionItem';
import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import { FC } from 'react';
import ReactDOM from 'react-dom';

interface IExportButton {
	disabled?: boolean;
	onBtnExport: () => void;
}

export const ExportButton: FC<IExportButton> = ({ disabled, onBtnExport }) => {
	const portalNode = document.getElementById('export_btn_csv');

	return portalNode
		? ReactDOM.createPortal(
				<Button style={{ marginLeft: '2rem' }} variant='contained' disabled={disabled} onClick={onBtnExport}>
					EXPORT FILE TO CSV <Download />
				</Button>,
				portalNode
		  )
		: null;
};
