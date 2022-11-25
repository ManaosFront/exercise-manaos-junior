import { IconButton } from "@mui/material";
import React, { useMemo } from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { clsx } from "../../common/makeStyles";
import { navItemStyles as useStyles } from "./NavItem.styles";

export type NavItemProps = {
  path: string;
  icon: React.FC;
  title: string;
};

export const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  path,
  title,
}) => {
  const classes = useStyles();
  const location = useLocation();
  const isSelected = useMemo(
    () => !!matchPath(path, location.pathname),
    [path, location.pathname]
  );

  return (
    <Link to={path} className={clsx(isSelected && "selected", classes.navItem)}>
      <IconButton color="info">
        <Icon />
      </IconButton>
      <p className={classes.navItemTitle}>{title}</p>
    </Link>
  );
};
