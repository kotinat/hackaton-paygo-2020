import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { IconButton } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

import {
  Visibility,
  VisibilityOff,
  FiberManualRecord,
} from "@material-ui/icons";

const useStyles = makeStyles(() => {
  return {
    root: {
      height: "100px",
      display: "flex",
      paddingBottom: "32px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    },
    horizontal: {
      display: "flex",
    },
    title: {
      margin: "0px",
      fontSize: "26px",
      fontWeight: "600",
    },
    amount: {
      margin: "0px",
      fontSize: "38px",
      fontWeight: "100",
    },
    icon: {
      color: "white",
    },
    menuIcon: {
      color: "white",
      padding: "16px 16px 0 16px",
    },

    // MoneyMask
    dot: {
      margin: "18px 2px 0 2px",
    },
  };
});

// Extrair pra outro arquivo (talvez)
const MoneyMask = () => {
  const classes = useStyles();
  return (
    <Box style={{ display: "flex" }}>
      <p className={classes.amount}>R$&nbsp;</p>
      {[...Array(6)].map((_, __) => (
        <FiberManualRecord className={classes.dot} />
      ))}
    </Box>
  );
};

const Valor = (props) => {
  const classes = useStyles();

  const [moneyVisibility, setMoneyVisibility] = useState(true);
  const changeMoneyVisibility = () => {
    setMoneyVisibility(!moneyVisibility);
  };

  return (
    <div
      style={{
        textAlign: "left",
        background: "#242424",
        borderRadius: "0px 0px 8px 8px",
      }}
    >
      <MenuRoundedIcon className={classes.menuIcon} />
      <Box className={classes.root}>
        <p className={classes.title}>Olá, Ronaldo</p>
        <Box className={classes.horizontal}>
          {moneyVisibility ? (
            <p className={classes.amount}>{props.dinheiro}</p>
          ) : (
            <MoneyMask />
          )}

          <IconButton onClick={changeMoneyVisibility}>
            {moneyVisibility ? (
              <Visibility className={classes.icon} />
            ) : (
              <VisibilityOff className={classes.icon} />
            )}
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default Valor;
