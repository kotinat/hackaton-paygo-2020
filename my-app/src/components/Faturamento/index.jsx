import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return {
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    outerProgress: {
      color: "#fff",
    },
    innerProgress: {
      color: "#373737",
    },
    center: {
      position: "absolute",
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    amount: {
        margin: "0",
        fontSize: "32px",
        fontWeight: "100",
    },
    amountLabel: {
        margin: "0",
        fontSize: "24px",
        fontWeight: "600",
    },
  };
});

const Faturamento = (props) => {
  const classes = useStyles();
  const valor = props.valor;
  const progresso = props.progresso;

  return (
    <Box className={classes.root}>
      <CircularProgress
        className={classes.innerProgress}
        variant="static"
        size="250px"
        value={100}
        thickness={0.4}
      />
      <Box className={classes.center}>
        <CircularProgress
          className={classes.outerProgress}
          variant="static"
          size="254px"
          value={progresso}
          thickness={1}
        />
      </Box>
      <Box className={classes.center}>
        <p className={classes.amountLabel}>Faturamento</p>
        <p className={classes.amount}>{valor}</p>
      </Box>
      
    </Box>
  );
};

export default Faturamento;
