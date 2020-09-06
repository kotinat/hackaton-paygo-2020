import React from "react";
import MenuInferior from "../../components/MenuInferior";
import "./objetivos.css";
import BotaoNovoObjetivo from "../../components/BotaoNovoObjetivo";
import Titulo from "../../components/Titulo";

const Objetivos = () => {
  const novoObjetivo = () => {
    alert("NOVO OBJETIVO");
    // TODO
  };

  return (
    <body>
      <header>
        <Titulo texto="Meus Objetivos" />
      </header>
      <main>
        <BotaoNovoObjetivo
          onClick={novoObjetivo}
          background="black"
          color="white"
        />
      </main>
      <footer>
        <MenuInferior />
      </footer>
    </body>
  );
};

export default Objetivos;
