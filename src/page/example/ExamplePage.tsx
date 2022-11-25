import { Button } from "@mui/material";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { getRoute } from "../../entry/routes";
import logo from "../../static/pictures/manaos-logo.png";
import { examplePageStyles as useStyles } from "./ExamplePage.styles";

export const ExamplePage: React.FC = () => {
  const classes = useStyles();
  const entry = useMemo(() => getRoute("dashboard"), []);

  return (
    <div className={classes.examplePage}>
      <h1>Welcome to Manaos Template Exercise</h1>
      <img src={logo} className={classes.logo} alt="logo" />
      <p>
        This page is an example and should not be displayed anymore at the end
        of this exercise.
      </p>
      <Link to={entry?.path}>
        <Button color="primary" variant="contained">
          Go to app
        </Button>
      </Link>
    </div>
  );
};
