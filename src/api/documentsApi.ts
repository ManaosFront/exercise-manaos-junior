export namespace DocumentsApi {
  export type Document = {
    fileId: string; // "FR00133873543354",
    fileName: string; // "Test01",
    uploadedBy: string; // "Adrien",
    uploadedDate: string; // "2022-03-31",
    status: "OK" | "FAILED"; // "OK",
  };

  const documentsStub: Document[] = [
    {
      fileId: "FR00133873543354",
      fileName: "Test01",
      uploadedBy: "Adrien",
      uploadedDate: "2022-03-31",
      status: "OK",
    },
    {
      fileId: "FR00133873543355",
      fileName: "Test02",
      uploadedBy: "Victor",
      uploadedDate: "2022-03-31",
      status: "FAILED",
    },
    {
      fileId: "FR00133873543356",
      fileName: "Test03",
      uploadedBy: "Marco",
      uploadedDate: "2022-03-31",
      status: "OK",
    },
    {
      fileId: "FR00133873543357",
      fileName: "Test04",
      uploadedBy: "Charles-Edouard",
      uploadedDate: "2022-03-31",
      status: "FAILED",
    },
  ];

  export const buildApi = () => ({
    getDocuments: () =>
      new Promise<Document[]>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.8) {
            resolve(documentsStub);
          } else {
            reject(new Error("Server error"));
          }
        }, 2000);
      }),
  });
}
