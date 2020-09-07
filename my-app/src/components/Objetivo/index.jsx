import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Tag from "../Tag";
import EditButton from "../EditButton";

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
      padding: "16px",
      textAlign: "left",
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
    spaceBetween: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
});

const Objetivo = (props) => {
  const classes = useStyles();

  const name = props.nome;
  const type = props.tipo.toString();
  const date = props.data;
  const amount = props.total;
  const current = props.valorAtual;
  const percentage = extractPercentage(current, amount);

  return (
    <Card elevation="4" className={classes.root}>
      <div className={classes.spaceBetween}>
        <p className={classes.name}>{name}</p>
        <EditButton />
      </div>

      <p className={classes.date}>{date}</p>

      <p className={classes.amount}>
        <span style={{ fontSize: "14px" }}>R$ </span>
        {amount}
      </p>

      <div className={classes.spaceBetween}>
        <p className={classes.current}>
          <span style={{ fontSize: "12px" }}>
            Você acumulou: <b>R$</b>{" "}
          </span>
          <b>{current}</b>
        </p>
        <span className={classes.percentage}>{percentage}%</span>
      </div>

      <BorderLinearProgress
        style={{ marginTop: "4px" }}
        variant="determinate"
        value={percentage}
      />
      <br />
      {type.toLowerCase() === "pessoal" ? (
        <Tag text={type} background="#EEB866" />
      ) : (
        <Tag text={type} background="#2196f3" color="white" />
      )}
    </Card>
  );
};

function extractPercentage(current, amount) {
  let currentFloat = parseFloat(current.replace(".", "").replace(",", "."));
  let amountFloat = parseFloat(amount.replace(".", "").replace(",", "."));

  return Math.round((currentFloat * 100) / amountFloat);
}

export default Objetivo;
