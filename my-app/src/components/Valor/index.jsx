import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { IconButton } from "@material-ui/core";
import {
  Visibility,
  VisibilityOff,
  FiberManualRecord,
} from "@material-ui/icons";

const useStyles = makeStyles(() => {
  return {
    root: {
      height: "80px",
      padding: "56px 0px 84px 0px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#242424",
      color: "white",
    },
    wrapper: {
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
  };
});

// Extrair pra outro arquivo (talvez)
const MoneyMask = () => {

  return <div>
    { [...Array(7)].map((_, __) => <FiberManualRecord/>) }    
    </div>;
};

const Valor = (props) => {
  const classes = useStyles();

  const [moneyVisibility, setMoneyVisibility] = useState(true);
  const changeMoneyVisibility = () => {
    setMoneyVisibility(!moneyVisibility);
  };

  return (
    <Box className={classes.root}>
      <p className={classes.title}>Olá, Ronaldo</p>
      <Box className={classes.wrapper}>
        <p className={classes.amount}>
          {moneyVisibility ? props.dinheiro : <MoneyMask/>}
        </p>

        <IconButton onClick={changeMoneyVisibility}>
          {moneyVisibility ? (
            <Visibility className={classes.icon} />
          ) : (
            <VisibilityOff className={classes.icon} />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Valor;
