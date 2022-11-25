import { Backdrop, CircularProgress } from "@mui/material";
import { GridApi } from "ag-grid-community";
import { useEffect, useState, useCallback } from "react";
import { api } from "../../api";
import { DocumentsApi } from "../../api/documentsApi";
import { makeStyles } from "../../common/makeStyles";
import { DocumentsList } from "./DocumentsList";

const useStyles = makeStyles({
  error: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const useCustomHook = () => {
  const [[data, error], setData] = useState<
    [DocumentsApi.Document[] | undefined, Error | undefined]
  >([undefined, undefined]);

  const load = useCallback(async () => {
    try {
      setData([await api.getDocuments(), undefined]);
    } catch (err) {
      if (err instanceof Error) {
        setData([undefined, err]);
      } else {
        setData([undefined, new Error(`${err}`)]);
      }
    }
  }, [setData]);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (error) {
      const id = setTimeout(() => {
        load();
      }, 3000);
      return () => clearTimeout(id);
    }
  }, [error, load]);

  return [data, error] as const;
};

type DocumentsRequestProps = {
  onGridReady?(api: GridApi): void;
  onGetInfo?(fileId: DocumentsApi.Document): void;
};

export const DocumentsRequest: React.FC<DocumentsRequestProps> = ({
  onGetInfo,
  onGridReady,
}) => {
  const classes = useStyles();
  const [data, error] = useCustomHook();

  const handleGetInfo = useCallback(
    (fileId: DocumentsApi.Document["fileId"]) => {
      const row = data?.find((item) => item.fileId === fileId);
      if (row && onGetInfo) {
        onGetInfo(row);
      }
    },
    [data, onGetInfo]
  );

  if (error) {
    return (
      <div className={classes.error}>
        <h2>An error occured</h2>
        <p>{error.message}</p>
        <h3>Retry progressing</h3>
        <CircularProgress />
      </div>
    );
  }

  if (data) {
    return (
      <DocumentsList
        rowData={data}
        onGridReady={onGridReady}
        onGetInfo={handleGetInfo}
      />
    );
  }

  return (
    <Backdrop component="div" open>
      <CircularProgress />
    </Backdrop>
  );
};
