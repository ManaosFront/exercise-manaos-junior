import { Modal as MModal } from "@mui/material";
import { useCallback } from "react";
import { makeStyles } from "../../common/makeStyles";
import { colors } from "../../common/colors";

const useStyles = makeStyles({
  center: {
    margin: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "40vw",
    minWidth: "40rem",
    maxWidth: "120vh",
    height: "30vw",
    minHeight: "30rem",
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    background: colors.white,
    borderRadius: "1rem",
    boxShadow: `0 .5rem 4rem 2rem ${colors.grey59}`,
    overflow: "hidden",
  },
});

type ModalProps = {
  open: boolean;
  setOpen(open: boolean): void;
  children?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ open, setOpen, children }) => {
  const classes = useStyles();
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const preventClose = useCallback<React.MouseEventHandler<HTMLDivElement>>(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
    },
    []
  );

  return (
    <MModal open={open} onClose={handleClose}>
      <div className={classes.center} onClick={handleClose}>
        <div className={classes.middle} onClick={preventClose}>
          {children}
        </div>
      </div>
    </MModal>
  );
};
