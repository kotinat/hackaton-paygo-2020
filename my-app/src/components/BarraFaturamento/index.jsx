import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Faturamento from "../Faturamento";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const useStyles = makeStyles(() => {
  return {
    root: {
      height: "260px",
      display: "flex",
      paddingBottom: "32px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#242424",
      color: "white",
      borderBottomRightRadius: "16px",
      borderBottomLeftRadius: "16px",
    },
    menuIcon: {
      color: "white",
      padding: "16px 16px 0 16px"
    },
  };
});

const BarraFaturamento = () => {
  const classes = useStyles();

  return (
    <div >
      <div style={{ textAlign: "left", background: "#242424" }}>
        <MenuRoundedIcon className={classes.menuIcon} />
      </div>
      <Box className={classes.root}>
          <Faturamento valor="R$ 60.000,00" progresso="30" />
        </Box>
    </div>
  );
};

export default BarraFaturamento;