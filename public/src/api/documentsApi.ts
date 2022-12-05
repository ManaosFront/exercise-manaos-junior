export type Document = {
	fileId: string; // "FR00133873543354",
	fileName: string; // "Test01",
	uploadedBy: string; // "Adrien",
	uploadedDate: string; // "2022-03-31",
	status: string; // "OK",
};

const documentsStub: Document[] = [
	{
		fileId: 'FR00133873543354',
		fileName: 'Test01',
		uploadedBy: 'Adrien',
		uploadedDate: '2022-03-31',
		status: 'OK',
	},
	{
		fileId: 'FR00133873543354',
		fileName: 'Test02',
		uploadedBy: 'Victor',
		uploadedDate: '2022-03-31',
		status: 'FAILED',
	},
	{
		fileId: 'FR00133873543354',
		fileName: 'Test03',
		uploadedBy: 'Marco',
		uploadedDate: '2022-03-31',
		status: 'OK',
	},
	{
		fileId: 'FR00133873543354',
		fileName: 'Test04',
		uploadedBy: 'Charles-Edouard',
		uploadedDate: '2022-03-31',
		status: 'FAILED',
	},
];
function getRandomResponseTime() {
	return 2000 + Math.floor(Math.random() * 5000);
}
export const buildApi = () => ({
	getDocuments: (firstTry: boolean) =>
		new Promise<Document[]>((resolve, reject) => {
			setTimeout(() => {
				if (firstTry) {
					reject(new Error('Whoops!'));
				}
				resolve(documentsStub);
			}, getRandomResponseTime());
		}),
});
