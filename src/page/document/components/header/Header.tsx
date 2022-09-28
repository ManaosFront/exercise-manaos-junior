import React from "react";
// import logo from "../../../../static/pictures/manaos-logo.png";
import { HeaderStyles as useStyles } from "./Header.styles";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import manaosIcon from "../../../../static/pictures/manaos-simple.svg";

export const Header: React.FC = () => {
  const classes = useStyles();

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "#3860ff",
    backgroundColor: "#ffffff",
  }));

  return (
    <div className={classes.header}>
      <img src={manaosIcon} className={classes.logo} alt="manaos-icon" />
      <ColorButton 
        className={classes.exportButton}
        variant="outlined" 
        startIcon={<SystemUpdateAltIcon />}
        > EXPORT TABLE
      </ColorButton>
    </div>
  );
};
