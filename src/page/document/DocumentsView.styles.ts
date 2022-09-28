import { makeStyles } from "../../common/makeStyles";

export const DocumentsViewStyles = makeStyles({
  documents: {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    width: "100%",
    minHeight: "100%",
  },
  logo: {
    borderRadius: "15%",
    width: "5%",
    height: "5%",
    marginRight: "20px"
  },
  menu: {
    display: "flex",
  },
  main: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  documentsHeader: {
    display: "flex",
    margin: "3%",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    margin: "3%",
  },
  searchInput: {
    width: "350px",
    marginBottom: "3%",
  },
});
