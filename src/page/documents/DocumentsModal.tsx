import { Button } from "@mui/material";
import { useMemo } from "react";
import { DocumentsApi } from "../../api/documentsApi";
import { makeStyles } from "../../common/makeStyles";
import { Definitions } from "../../components/Definitions/Definitions";
import { Modal } from "../../components/Modal/Modal";
import { colors } from "../../common/colors";
import { objectEntries } from "../../common/util";

const mapTerm: Record<keyof DocumentsApi.Document, string> = {
  fileId: "File Identifier",
  fileName: "File Name",
  uploadedBy: "Uploader",
  uploadedDate: "Uploaded at",
  status: "File Status",
};

const useStyles = makeStyles({
  head: {
    color: colors.white,
    background: colors.gradientPink,
    padding: "0 1rem",
  },
  body: {
    padding: "2rem",
    overflow: "clip auto",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
});

type DocumentsModalProps = {
  data?: DocumentsApi.Document;
  open: boolean;
  setOpen(open: boolean): void;
};

export const DocumentsModal: React.FC<DocumentsModalProps> = ({
  data,
  open,
  setOpen,
}) => {
  const classes = useStyles();

  const record = useMemo(
    () =>
      data
        ? objectEntries(data).reduce((acc, [field, value]) => {
            acc[mapTerm[field]] = value;
            return acc;
          }, {} as Record<string, string>)
        : {},
    [data]
  );

  return (
    <Modal open={open && !!data} setOpen={setOpen}>
      <div className={classes.head}>
        <h2>Document Infos</h2>
      </div>
      <div className={classes.body}>
        <Definitions record={record!} />
      </div>
      <div className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(false)}
        >
          OK
        </Button>
      </div>
    </Modal>
  );
};
