import { makeStyles } from "../../../../common/makeStyles";

export const MenuStyles = makeStyles({
  menu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "10%",
    minHeight: "100%",
    backgroundColor: "var(--grey93)",
    color: "var(--grey59)",
  },
  menuButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20%"
  },
  menuIcons: {
    backgroundColor: "var(--grey82)",
  }
});
