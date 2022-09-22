import { makeStyles } from "../../common/makeStyles";

export const examplePageStyles = makeStyles({
  examplePage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "100%",
    background: "var(--gradientPink)",
    color: "var(--grey93)",
  },
  logo: {
    borderRadius: "15%",
  },
});
