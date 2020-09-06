import React from "react";
import MenuInferior from "../../components/MenuInferior";
import "./objetivos.css";
import BotaoNovoObjetivo from "../../components/BotaoNovoObjetivo";
import Titulo from "../../components/Titulo";
import EditButton from "../../components/EditButton";
import Tag from "../../components/Tag";

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
        <EditButton />
        <Tag text="Pessoal" color="#1de9b6" />
        <Tag text="Profissional" color="#007bb2" />
      </main>
      <footer>
        <MenuInferior />
      </footer>
    </body>
  );
};

export default Objetivos;
