import React from "react";
import MenuInferior from "../../components/MenuInferior";
import { Card, Box } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const das = [
  {
    id: 1,
    mes: "Janeiro",
    vencimento: "20/01/2020",
    status: "PAGO",
    cor: "#00e676",
  },
  {
    id: 2,
    mes: "Fevereiro",
    vencimento: "20/02/2020",
    status: "ATRASADO",
    cor: "#ff1744",
  },
  {
    id: 3,
    mes: "Março",
    vencimento: "20/03/2020",
    status: "PAGO",
    cor: "#00e676",
  },
  {
    id: 4,
    mes: "Abril",
    vencimento: "20/04/2020",
    status: "ATRASADO",
    cor: "#ff1744",
  },
  {
    id: 5,
    mes: "Maio",
    vencimento: "20/05/2020",
    status: "PAGO",
    cor: "#00e676",
  },
  {
    id: 6,
    mes: "Junho",
    vencimento: "20/06/2020",
    status: "PAGO",
    cor: "#00e676",
  },
  {
    id: 7,
    mes: "Julho",
    vencimento: "20/07/2020",
    status: "PAGO",
    cor: "#00e676",
  },
  {
    id: 8,
    mes: "Agosto",
    vencimento: "20/08/2020",
    status: "PAGO",
    cor: "#00e676",
  },
  {
    id: 9,
    mes: "Setembro",
    vencimento: "20/01/2020",
    status: "EM ABERTO",
    cor: "##FFE552",
  },
];

const Das = () => {
  return (
    <body>
      <header>
        <title>Meus DAS</title>
      </header>
      <main>
        <Card>
          <Box>
            <strong>DAS setembro 2020</strong>
            <strong>R$53,70</strong>
            <p>Pago</p>
          </Box>
        </Card>
        <Box>
          <NavigateBeforeIcon />
          <p>2020</p>
          <NavigateNextIcon />
        </Box>
        <Box>
          {das.map((item) => {
            return (
              <Card style={{ borderLeft: `'3px solid ${item.cor}'` }}>
                <Box>
                  <p>{item.mes}</p>
                  <p>{item.vencimento}</p>
                </Box>
                <p>{item.status}</p>
              </Card>
            );
          })}
        </Box>
      </main>
      <footer>
        <MenuInferior />
      </footer>
    </body>
  );
};

export default Das;
