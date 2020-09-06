import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return {
    chip: {
      background: "yellow",
    },
  };
});
const Tag = ({ text, color }) => {
  const classes = useStyles();
  return (
    <Chip label={text} style={{ background: color }} className={classes.chip} />
  );
};

export default Tag;
