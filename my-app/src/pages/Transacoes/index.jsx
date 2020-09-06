import React from "react";
import Box from "@material-ui/core/Box";
import FiltroMensal from "../../../src/components/FiltroMensal";
import BarraFiltroBotao from "../../components/BarraFiltroBotao";

const Transacoes = () => {
  return (
    <Box>
      Transacoes
      <FiltroMensal />
      <BarraFiltroBotao />
    </Box>
  );
};

export default Transacoes;
