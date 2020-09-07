import React from "react";
import Chip from "@material-ui/core/Chip";

const Tag = ({ text, background, color }) => {
  return (
    <Chip label={text} style={{ background: background, color: color}} />
  );
};

export default Tag;
