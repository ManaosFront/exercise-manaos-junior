import { makeStyles } from "../../../../common/makeStyles";

export const HeaderStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    minHeight: "100%",
    background: "var(--gradientPink)",
    color: "var(--grey93)",
  },
  logo: {
    width: "50px",
    margin: "15px"
  },
  exportButton: {
    margin: "15px",
  }
});
