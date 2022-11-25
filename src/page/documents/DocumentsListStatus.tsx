import { FiberManualRecord } from "@mui/icons-material";
import { DocumentsApi } from "../../api/documentsApi";
import { makeStyles } from "../../common/makeStyles";

const useStatusStyles = makeStyles({
  status: {
    display: "flex",
    flexDirection: "row",
    justifyContents: "flex-start",
    alignItems: "center",
  },
});

export const DocumentsListStatus: React.FC<{
  status: DocumentsApi.Document["status"];
}> = ({ status }) => {
  const classes = useStatusStyles();

  if (status === "OK") {
    return (
      <span className={classes.status}>
        <FiberManualRecord color="success" />
        OK
      </span>
    );
  }
  return (
    <span className={classes.status}>
      <FiberManualRecord color="warning" />
      Failed
    </span>
  );
};
