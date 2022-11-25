import { Search } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { ColDef, GridApi } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useCallback, useMemo } from "react";
import { DocumentsApi } from "../../api/documentsApi";
import { makeStyles } from "../../common/makeStyles";
import { useSearch } from "../../common/useGlobalState";
import { DocumentsListStatus } from "./DocumentsListStatus";

const useColumnDefs = (onGetInfo?: DocumentsListProps["onGetInfo"]) =>
  useMemo(
    (): ColDef[] => [
      {
        headerName: "Name",
        field: "fileName",
      },
      {
        headerName: "Uploaded By",
        field: "uploadedBy",
      },
      {
        headerName: "Date",
        field: "uploadedDate",
      },
      {
        field: "status",
        headerComponentFramework: () => (
          <>
            <span style={{ display: "inline-block", width: "1.5rem" }} />
            Status
          </>
        ),
        cellRenderer: ({
          value: status,
        }: {
          value: DocumentsApi.Document["status"];
        }) => <DocumentsListStatus status={status} />,
      },
      {
        headerName: "",
        field: "fileId",
        cellRenderer: ({
          value: fileId,
        }: {
          value: DocumentsApi.Document["fileId"];
        }) => (
          <Button
            variant="contained"
            color="primary"
            onClick={onGetInfo && (() => onGetInfo(fileId))}
          >
            Get info
          </Button>
        ),
      },
    ],
    [onGetInfo]
  );

const useListStyles = makeStyles({
  list: {
    margin: "2rem",
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
  },
  controller: {
    marginBottom: "1rem",
  },
});

type DocumentsListProps = {
  rowData: DocumentsApi.Document[];
  onGridReady?(api: GridApi): void;
  onGetInfo?(fileId: DocumentsApi.Document["fileId"]): void;
};

export const DocumentsList: React.FC<DocumentsListProps> = ({
  rowData,
  onGridReady,
  onGetInfo,
}) => {
  const classes = useListStyles();

  const [search = "", setSearch] = useSearch();

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    [setSearch]
  );

  const handleGridReady = useCallback(
    ({ api }: { api: GridApi }) => {
      const resize = () => api.sizeColumnsToFit();
      resize();
      window.addEventListener("resize", resize);
      onGridReady?.(api);
    },
    [onGridReady]
  );

  const columns = useColumnDefs(onGetInfo);

  return (
    <div className={classes.list}>
      <div className={classes.controller}>
        <TextField
          size="small"
          name="search"
          onChange={handleSearch}
          value={search}
          placeholder="Search..."
          InputProps={{ endAdornment: <Search color="primary" /> }}
        />
      </div>
      <div className="ag-theme-alpine">
        <AgGridReact
          quickFilterText={search}
          columnDefs={columns}
          rowData={rowData}
          gridOptions={{ onGridReady: handleGridReady, rowHeight: 48 }}
          getRowNodeId={({ fileId }) => fileId}
        />
      </div>
    </div>
  );
};
