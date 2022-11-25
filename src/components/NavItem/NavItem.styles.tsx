import { makeStyles } from "../../common/makeStyles";
import { colors } from "../../common/colors";

export const navItemStyles = makeStyles({
  navItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    color: colors.grey59,
    textDecoration: "none",
    padding: "1rem .5rem",
    "&.selected": {
      color: colors.black,
    },
  },
  navItemTitle: {
    margin: 0,
  },
});
