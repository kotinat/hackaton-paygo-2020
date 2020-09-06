import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Transacoes from "../src/pages/Transacoes";
import Faturamento from "../src/pages/Faturamento";
import Objetivos from "../src/pages/Objetivos";
import Das from "../src/pages/Das";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Transacoes} path="/" exact />
      <Route component={Faturamento} path="/faturamento" />
      <Route component={Objetivos} path="/objetivos" />
      <Route component={Das} path="/das" />
    </BrowserRouter>
  );
};

export default Routes;
