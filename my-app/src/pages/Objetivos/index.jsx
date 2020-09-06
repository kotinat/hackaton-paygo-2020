import React from "react";
import MenuInferior from "../../components/MenuInferior";
import "./objetivos.css";
import BotaoNovoObjetivo from "../../components/BotaoNovoObjetivo";
import Titulo from "../../components/Titulo";
import Objetivo from "../../components/Objetivo";

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
        <div>
        
          <Objetivo
            nome="Comprar minha combi"
            data="em 31 de Março de 2021"
            total="10.000,00"
            valorAtual="1.000,00"
          />
          <Objetivo
            nome="Comprar minha combi"
            data="em 31 de Março de 2021"
            total="10.000,00"
            valorAtual="1.000,00"
          />
          <Objetivo
            nome="Comprar minha combi"
            data="em 31 de Março de 2021"
            total="10.000,00"
            valorAtual="1.000,00"
          />
          <Objetivo
            nome="Comprar minha combi"
            data="em 31 de Março de 2021"
            total="10.000,00"
            valorAtual="1.000,00"
          />
        </div>

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
