import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import "./transacao.css";

const useStyles = makeStyles(() => {
  return {
    wrapper: {
      display: "flex",
      justifyContent: "space-between",
    },
    box1: {
      textAlign: "left",
    },
    box2: {
      textAlign: "right",
    },
  };
});

const Transacao = ({ props }) => {
  const classes = useStyles();
  return (
    <li>
      <Box className={classes.wrapper}>
        <Box className={classes.box1}>
          <p id="pagamento valor1">{props.pagamento}</p>
          <p id="descricao">{props.descricao}</p>
          <p id="tag">{props.tag}</p>
        </Box>
        <Box className={classes.box2}>
          <p id="valor">{props.valor}</p>
          <p id="data">{props.data}</p>
        </Box>
      </Box>
    </li>
  );
};

export default Transacao;
