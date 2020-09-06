import React from "react";
import Box from "@material-ui/core/Box";

const Transacao = (props) => {
  return (
    <li>
      <Box>
        <p>{props.pagamento}</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </Box>
    </li>
  );
};

export default Transacao;
