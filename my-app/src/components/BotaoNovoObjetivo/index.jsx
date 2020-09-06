import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

const useStyles = makeStyles(() => {
  return {
    fab: {
      position: "absolute",
      bottom: "72px",
      right: "16px",
    },
  };
});

const BotaoNovoObjetivo = (props) => {
  const classes = useStyles();

  const background = props.background;
  const iconColor = props.color;
  const onClick = props.onClick;

  return (
    <Fab
      onClick={onClick}
      className={classes.fab}
      style={{ background: background, color: iconColor }}
    >
      <AddIcon />
    </Fab>
  );
};

export default BotaoNovoObjetivo;
