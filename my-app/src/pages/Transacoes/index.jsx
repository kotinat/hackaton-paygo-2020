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
  },
  {
    id: 2,
    pagamento: "Crédito",
    tag: "Receita",
    data: "05/09/2020, 16:10",
    valor: "R$7.000,00",
  },
  {
    id: 3,
    pagamento: "Débito",
    tag: "Receita",
    data: "05/09/2020, 15:40",
    valor: "R$1.000,00",
  },
  {
    id: 4,
    pagamento: "Débito",
    tag: "Receita",
    data: "05/09/2020, 15:22",
    valor: "R$700,00",
  },
  {
    id: 5,
    pagamento: "Crédito",
    tag: "Receita",
    data: "05/09/2020, 14:43",
    valor: "R$2.000,00",
  },
  {
    id: 6,
    pagamento: "Crédito",
    tag: "Receita",
    data: "05/09/2020, 13:12",
    valor: "R$400,00",
  },
  {
    id: 7,
    pagamento: "Crédito",
    tag: "Receita",
    data: "05/09/2020, 12:37",
    valor: "R$900,00",
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
