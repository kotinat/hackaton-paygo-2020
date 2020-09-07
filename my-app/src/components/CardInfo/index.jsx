import React from "react";
import Card from "@material-ui/core/Card";

const CardInfo = ({ children }) => {
  return (
    <Card
      style={{
        padding: "8px",
        margin: "8px 0",
        width: "120px",
        height: "96px",
      }}
    >
      {children}
    </Card>
  );
};

export default CardInfo;
