import { makeStyles } from "../../common/makeStyles";
import { colors } from "../../common/colors";

export const mainLayoutStyles = makeStyles({
  mainLayout: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  mainLayoutHead: {
    flex: "0 0 4rem",
    height: "4rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    background: colors.gradientPink,
  },
  mainLayoutHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
  mainLayoutLogo: {
    width: "8rem",
    padding: "1rem 0",
  },
  mainLayoutBody: {
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "row",
  },
  mainLayoutNav: {
    flex: "0 0 8rem",
    width: "8rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    background: colors.grey93,
  },
  mainLayoutContent: {
    flex: "1 1 auto",
    display: "block",
    background: colors.gradientGrey,
    overflow: "clip auto",
  },
});
