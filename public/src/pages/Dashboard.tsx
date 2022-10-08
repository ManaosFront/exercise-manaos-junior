import { Dialog, DialogContent, DialogTitle } from '@mui/material';

import { AwesomeTableComponentWithAgGrid } from '../components/Tables/AwesomeTableComponentWithAgGrid';
import { Document } from '../api/documentsApi';
import { Search } from '../components/Tables/Search';
import { Typography } from '@mui/material';
import { useState } from 'react';

export const Dashboard = () => {
	const [infos, setInfos] = useState<Document | undefined>(undefined);

	return (
		<>
			<Search />
			<AwesomeTableComponentWithAgGrid openDetail={setInfos} />

			<Dialog open={!!infos} onClose={() => setInfos(undefined)}>
				<DialogTitle>Toutes les informations</DialogTitle>
				{infos && (
					<DialogContent>
						<Typography>ID : {infos?.fileId}</Typography>
						<Typography>Nom : {infos?.fileName}</Typography>
						<Typography>Uploadé par : {infos?.uploadedBy}</Typography>
						<Typography>Uploadé le : {infos?.uploadedDate}</Typography>
						<Typography>Status : {infos?.status}</Typography>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
};
