import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Transacoes from "../src/pages/Transacoes";
import Faturamento from "../src/pages/Faturamento";
import Objetivos from "../src/pages/Objetivos";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Transacoes} path="/" exact />
      <Route component={Faturamento} path="/faturamento" />
      <Route component={Objetivos} path="/objetivos" />
    </BrowserRouter>
  );
};

export default Routes;
