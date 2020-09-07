import React from "react";
import Valor from "../../components/Valor";
import FiltroMensal from "../../../src/components/FiltroMensal";
import BarraFiltroBotao from "../../components/BarraFiltroBotao";
import MenuInferior from "../../components/MenuInferior";
import Transacao from "../../components/Transacao";
import "./transacoes.css";

const payloadTrx = [
  {
    id: 1,
    pagamento: "Débito",
    tag: "Despesa",
    data: "05/09/2020, 16:23",
    valor: "(-R$9.000,00)",
    descricao: "Ar. cond",
    tagCor: "#ff8a80",
  },
  {
    id: 2,
    pagamento: "Crédito",
    tag: "Receita",
    data: "05/09/2020, 16:10",
    valor: "R$7.000,00",
    tagCor: "#b9f6ca",
  },
  {
    id: 3,
    pagamento: "Débito",
    tag: "Receita",
    data: "05/09/2020, 15:40",
    valor: "R$1.000,00",
    tagCor: "#b9f6ca",
  },
  {
    id: 4,
    pagamento: "Débito",
    tag: "Receita",
    data: "05/09/2020, 15:22",
    valor: "R$700,00",
    tagCor: "#b9f6ca",
  },
  {
    id: 5,
    pagamento: "Crédito",
    tag: "Receita",
    data: "05/09/2020, 14:43",
    valor: "R$2.000,00",
    tagCor: "#b9f6ca",
  },
  {
    id: 6,
    pagamento: "Crédito",
    tag: "Receita",
    data: "05/09/2020, 13:12",
    valor: "R$400,00",
    tagCor: "#b9f6ca",
  },
  {
    id: 7,
    pagamento: "Crédito",
    tag: "Receita",
    data: "05/09/2020, 12:37",
    valor: "R$900,00",
    tagCor: "#b9f6ca",
  },
];

const Transacoes = () => {
  return (
    <body>
      <header>
        <Valor dinheiro="R$ 9.000,00" />
      </header>
      <main>
        <FiltroMensal />
        <BarraFiltroBotao />
        <ul>
          {payloadTrx.map((trx) => {
            return <Transacao key={trx.id} props={trx} />;
          })}
        </ul>
      </main>
      <footer>
        <MenuInferior />
      </footer>
    </body>
  );
};

export default Transacoes;
