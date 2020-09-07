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
const Tag = ({ text, background, color }) => {
  const classes = useStyles();
  return (
    <Chip label={text} style={{ background: background, color: color}} className={classes.chip} />
  );
};

export default Tag;
