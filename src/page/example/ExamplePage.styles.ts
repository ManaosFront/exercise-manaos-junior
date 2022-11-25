import { makeStyles } from "../../common/makeStyles";
import { colors } from "../../common/colors";

export const examplePageStyles = makeStyles({
  examplePage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "100%",
    background: colors.gradientPink,
    color: colors.grey93,
  },
  logo: {
    borderRadius: "15%",
  },
});
