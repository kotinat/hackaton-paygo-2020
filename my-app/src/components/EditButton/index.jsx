import React from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return {
    button: {
      width: "32px",
      height: "32px",
      background: "#adadad",
    },
    icon: {
      color: "white",
      fontSize: "20px",
    },
  };
});

const EditButton = () => {
  const classes = useStyles();
  return (
    <IconButton className={classes.button}>
      <EditIcon className={classes.icon} />
    </IconButton>
  );
};

export default EditButton;
