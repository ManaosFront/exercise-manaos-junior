import React, { useEffect, useState } from "react";
import { GridStyles as useStyles } from "./Grid.styles";
import { AgGridReact } from 'ag-grid-react';
// import { DocumentsApi } from "./documentsApi";
import { DocumentsApi } from "../../../../../src/api/documentsApi";
import { api } from "../../../../api";

export const Grid: React.FC = () => {
  const classes = useStyles();

  let documents: DocumentsApi.Document[] = [];
  let [rowData, setRowData] = useState(documents);

    const [columnDefs] = useState([
        { headerName: 'Name', field: 'fileName' },
        { headerName: 'Uploaded by', field: 'uploadedBy' },
        { headerName: 'Date', field: 'uploadedDate' },
        { headerName: 'Status', field: 'status' }
    ]);


  try {
    api.getDocuments().then((value) => {
        console.log(value);
        setRowData(value);
    });
  } catch (e :  any) {
    console.log("Couldn't get documents");
  }

    

  return (
    <div >
        <div className="ag-theme-alpine" style={{height: 250, width: 850}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}>
            </AgGridReact>
       </div>
    </div>
  );
};
