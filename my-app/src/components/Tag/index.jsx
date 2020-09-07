import React from "react";
import Chip from "@material-ui/core/Chip";

const Tag = ({ text, color }) => {
  return <Chip label={text} style={{ background: color }} />;
};

export default Tag;
