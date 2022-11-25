import { Download } from "@mui/icons-material";
import { Button } from "@mui/material";
import { GridApi } from "ag-grid-community";
import { useMemo, useState, useCallback } from "react";
import { DocumentsApi } from "../../api/documentsApi";
import { makeStyles } from "../../common/makeStyles";
import { RouteComponentProps } from "../../common/router";
import { MainLayoutHeader } from "../../components/MainLayout/MainLayoutHeaderPortal";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import logo from "../../static/pictures/manaos-logo.png";
import { DocumentsModal } from "./DocumentsModal";
import { DocumentsRequest } from "./DocumentsRequest";

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  manaos: { backgroundImage: `url(${logo})` },
});

export const DocumentsPage: React.FC<RouteComponentProps> = ({
  "data-testid": testid,
}) => {
  const classes = useStyles();

  const [isOpenGetInfo, setOpenGetInfo] = useState(false);
  const [selectedRow, setSelectedRow] = useState<DocumentsApi.Document>();
  const [gridApi, setGridApi] = useState<GridApi>();

  const handleClick = useMemo(
    () => gridApi && (() => gridApi.exportDataAsCsv()),
    [gridApi]
  );

  const handleGetInfo = useCallback(
    (row: DocumentsApi.Document) => {
      setOpenGetInfo(true);
      setSelectedRow(row);
    },
    [setOpenGetInfo, setSelectedRow]
  );

  return (
    <div className={classes.page} data-testid={testid}>
      <PageHeader
        title="Documents"
        applicationIconClassName={classes.manaos}
        providerName="Manaos"
      />
      <DocumentsRequest onGridReady={setGridApi} onGetInfo={handleGetInfo} />
      <MainLayoutHeader>
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          disabled={!handleClick}
          startIcon={<Download />}
        >
          Export table
        </Button>
      </MainLayoutHeader>
      <DocumentsModal
        data={selectedRow}
        open={isOpenGetInfo}
        setOpen={setOpenGetInfo}
      />
    </div>
  );
};
