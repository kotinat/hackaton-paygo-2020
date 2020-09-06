import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import "./filtro-mensal.css";

const FiltroMensal = () => {
  return (
    <div className="root">
      <AppBar position="static" color="transparent">
        <Tabs>
          <Tab label="Agosto" disabled className="item" />
          <Tab label="Setembro" className="item" />
          <Tab label="Outubro" disabled className="item" />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default FiltroMensal;
