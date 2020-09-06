import React from "react";
import Card from "@material-ui/core/Card";

const CardInfo = ({ children }) => {
  return (
    <Card
      style={{
        padding: "8px",
        margin: "16px 0",
        width: "120px",
      }}
    >
      {children}
    </Card>
  );
};

export default CardInfo;
