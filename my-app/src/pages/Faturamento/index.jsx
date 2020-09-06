import React from "react";
import MenuInferior from "../../components/MenuInferior";
import BarraFaturamento from "../../components/BarraFaturamento";
import "./faturamento.css";

const Faturamento = () => {
  return (
    <body>
      <header>
        <BarraFaturamento/>
      </header>
      <main></main>
      <footer>
        <MenuInferior />
      </footer>
    </body>
  );
};

export default Faturamento;
