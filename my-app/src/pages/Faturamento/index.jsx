import React from "react";
import MenuInferior from "../../components/MenuInferior";
import BarraFaturamento from "../../components/BarraFaturamento";
import "./faturamento.css";
import CardInfo from "../../components/CardInfo";
import Box from "@material-ui/core/Box";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return {
    button: {
      background: "linear-gradient(105.23deg, #FFE552 0%, #FFCE2E 100%);",
      padding: "0 4px",
      marginTop: "8px",
    },
  };
});

const Faturamento = () => {
  const classes = useStyles();
  return (
    <body>
      <header>
        <BarraFaturamento />
      </header>
      <main id="faturamento">
        <CardInfo>
          <Box justify="center">
            Média de <strong>R$5.000,00</strong> de faturamento mensal
          </Box>
        </CardInfo>
        <CardInfo>
          Faltam <strong>R$21.000,00</strong> para você atingir a sua meta
          anual.
        </CardInfo>
        <CardInfo>
          <Box>
            Fazer rascunho da declaração anual do MEI
            <Button className={classes.button}>Vamos lá!</Button>
          </Box>
        </CardInfo>
        <CardInfo>
          <Box>
            Resumo de pagamento <strong>DAS</strong> mensal
            <Button className={classes.button}>Consultar</Button>
          </Box>
        </CardInfo>
      </main>
      <footer>
        <MenuInferior />
      </footer>
    </body>
  );
};

export default Faturamento;
