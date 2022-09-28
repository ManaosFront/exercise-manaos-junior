import React from "react";
import { DocumentsViewStyles as useStyles } from "./DocumentsView.styles";
import { Grid } from "./components/grid/Grid";
import { Header } from "./components/header/Header";
import { Menu } from "./components/menu/Menu";
import manaosLogo from "../../static/pictures/manaos-logo.png";

import SearchIcon from "@mui/icons-material/Search";
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';

export const DocumentsView: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.documents}>
        <Header />
        <div className={classes.menu}>
            <Menu />
            <div className={classes.main}>
                <div className={classes.documentsHeader}>
                    <img src={manaosLogo} className={classes.logo} alt="manaos-icon" />
                    <div>
                        <p>DOCUMENTS</p>
                        <p>Powered by <b>Manaos</b></p>
                    </div>
                </div>
                <hr />
                
                <div className={classes.grid}>
                    <InputBase
                    className={classes.searchInput}
                    id="input-with-icon-adornment"
                    placeholder="Search"
                    endAdornment={
                        <InputAdornment position="end">
                        <SearchIcon />
                        </InputAdornment>
                    }
                    />
                    <Grid />
                </div>
            </div>
        

        </div>
    </div>
  );
};
