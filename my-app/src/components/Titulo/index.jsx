import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
  return {
    title: {
      fontSize: "28px",
      fontWeight: "500",
      textAlign: "left",
      margin: "16px 16px 0px 16px",
    },
  };
});

const Titulo = (props) => {
  const text = props.texto;

  const classes = useStyles();
  return <h1 className={classes.title}>{text}</h1>;
};

export default Titulo;
