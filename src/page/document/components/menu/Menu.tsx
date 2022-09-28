import React from "react";
// import logo from "../../../../static/pictures/manaos-logo.png";
import { MenuStyles as useStyles } from "./Menu.styles";
import IconButton from '@mui/material/IconButton';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import TableViewIcon from '@mui/icons-material/TableView';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

export const Menu: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
        <div className={classes.menuButton}>
            <IconButton className={classes.menuIcons}>
                <AutoGraphIcon />
            </IconButton>
            dashboard
        </div>
        <div className={classes.menuButton}>
            <IconButton className={classes.menuIcons}>
                <PlaylistPlayIcon />
            </IconButton>
            my lists
        </div>
        <div className={classes.menuButton}>
            <IconButton className={classes.menuIcons}>
                <TableViewIcon />
            </IconButton>
            <b>documents</b>
        </div>
    </div>
  );
};
