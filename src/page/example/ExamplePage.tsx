import React from "react";
import logo from "../../static/pictures/manaos-logo.png";
import { examplePageStyles as useStyles } from "./ExamplePage.styles";

export const ExamplePage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.examplePage}>
      <h1>Welcome to Manaos Template Exercise</h1>
      <img src={logo} className={classes.logo} alt="logo" />
      <p>
        This page is an example and should not be displayed anymore at the end
        of this exercise.
      </p>
    </div>
  );
};
