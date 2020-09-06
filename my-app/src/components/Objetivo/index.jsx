import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 8,
    borderRadius: 8,
  },
  colorPrimary: {
    backgroundColor: "#c4c4c455",
  },
  bar: {
    borderRadius: 8,
    backgroundColor: "#69ec76",
  },
}))(LinearProgress);

const useStyles = makeStyles(() => {
  return {
    root: {
      minHeight: "50px",
      margin: "16px",
      padding: "16px 16px 32px 16px",
    },
    name: {
      textAlign: "left",
      fontSize: "18px",
      fontWeight: "600",
    },
    date: {
      textAlign: "left",
      fontSize: "14px",
      fontWeight: "200",
      marginTop: "4px",
    },
    amount: {
      textAlign: "left",
      fontSize: "18px",
      fontWeight: "500",
      marginTop: "4px",
    },
    current: {
      textAlign: "left",
      fontSize: "14px",
      marginTop: "4px",
    },
    percentage: {
      fontSize: "14px",
      fontWeight: "600",
      marginTop: "4px",
    },
  };
});

const Objetivo = (props) => {
  const classes = useStyles();

  const name = props.nome;
  const date = props.data;
  const amount = props.total;
  const current = props.valorAtual;
  const percentage = extractPercentage(current, amount);

  return (
    <Card elevation="4" className={classes.root}>
      <p className={classes.name}>{name}</p>
      <p className={classes.date}>{date}</p>

      <p className={classes.amount}>
        <span style={{ fontSize: "14px" }}>R$ </span>
        {amount}
      </p>

      <div style={{display: "flex", justifyContent: "space-between"}}>
        <p className={classes.current}>
          <span style={{ fontSize: "12px" }}>
            Você acumulou: <b>R$</b>{" "}
          </span>
          <b>{current}</b>
        </p>
        <span className={classes.percentage}>{percentage}%</span>
      </div>

      <BorderLinearProgress style={{marginTop: "4px"}} variant="determinate" value={percentage} />
    </Card>
  );
};

function extractPercentage(current, amount) {
  let currentFloat = parseFloat(current.replace(".", "").replace(",", "."));
  let amountFloat = parseFloat(amount.replace(".", "").replace(",", "."));

  return (currentFloat * 100) / amountFloat;
}

export default Objetivo;
