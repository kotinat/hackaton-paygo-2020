import React from "react";
import Box from "@material-ui/core/Box";
import Valor from "../../components/Valor";
import FiltroMensal from "../../../src/components/FiltroMensal";
import BarraFiltroBotao from "../../components/BarraFiltroBotao";

const Transacoes = () => {
  return (
    <Box>
      <Valor dinheiro="R$ 20.000,00" />
      <FiltroMensal />
      <BarraFiltroBotao />
    </Box>
  );
};

export default Transacoes;
