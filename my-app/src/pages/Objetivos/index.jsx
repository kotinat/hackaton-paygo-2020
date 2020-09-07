import React from "react";
import "./objetivos.css";
import MenuInferior from "../../components/MenuInferior";
import Objetivo from "../../components/Objetivo";
import BotaoNovoObjetivo from "../../components/BotaoNovoObjetivo";
import Titulo from "../../components/Titulo";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const Objetivos = () => {
  const novoObjetivo = () => {
    alert("Novo objetivo");
  };

  return (
    <body>
      <header style={{ display: "flex", alignItems: "center" }}>
        <MenuRoundedIcon style={{ padding: "16px 0 0 16px" }} />
        <Titulo texto="Meus Objetivos" />
      </header>
      <main>
        <div>
          <Objetivo
            nome="Compra da combi"
            data="em 31 de Março de 2021"
            total="10.000,00"
            valorAtual="1.200,00"
            tipo="Pessoal"
          />
          <Objetivo
            nome="Ar Condicionado"
            data="em 27 de Dezembro de 2020"
            total="4.000,00"
            valorAtual="2.200,00"
            tipo="Profissional"
          />
          <Objetivo
            nome="Mesa de escretório"
            data="em 5 de Outubro de 2020"
            total="1.000,00"
            valorAtual="850,00"
            tipo="Profissional"
          />
          <Objetivo
            nome="PC pro Bernardo"
            data="em 8 de Janeiro de 2021"
            total="7.000,00"
            valorAtual="2.300,00"
            tipo="Pessoal"
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
