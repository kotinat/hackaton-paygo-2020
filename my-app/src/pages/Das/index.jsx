import React from "react";
import MenuInferior from "../../components/MenuInferior";
import { Box, makeStyles } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Titulo from "../../components/Titulo";

const das = [
  {
    id: 1,
    mes: "Janeiro",
    vencimento: "20/01/2020",
    status: "PAGO",
    cor: "#4caf50",
    value: "R$53,65",
  },
  {
    id: 2,
    mes: "Fevereiro",
    vencimento: "20/02/2020",
    status: "ATRASADO",
    cor: "#f44336",
    value: "R$53,65",
  },
  {
    id: 3,
    mes: "Março",
    vencimento: "20/03/2020",
    status: "PAGO",
    cor: "#4caf50",
    value: "R$53,68",
  },
  {
    id: 4,
    mes: "Abril",
    vencimento: "20/04/2020",
    status: "ATRASADO",
    cor: "#f44336",
    value: "R$53,68",
  },
  {
    id: 5,
    mes: "Maio",
    vencimento: "20/05/2020",
    status: "PAGO",
    cor: "#4caf50",
    value: "R$53,68",
  },
  {
    id: 6,
    mes: "Junho",
    vencimento: "20/06/2020",
    status: "PAGO",
    cor: "#4caf50",
    value: "R$53,68",
  },
  {
    id: 7,
    mes: "Julho",
    vencimento: "20/07/2020",
    status: "PAGO",
    cor: "#4caf50",
    value: "R$53,70",
  },
  {
    id: 8,
    mes: "Agosto",
    vencimento: "20/08/2020",
    status: "PAGO",
    cor: "#4caf50",
    value: "R$53,70",
  },
  {
    id: 9,
    mes: "Setembro",
    vencimento: "20/09/2020",
    status: "EM ABERTO",
    cor: "#ffc107",
    value: "R$53,70",
  },
];

const useStyles = makeStyles(() => {
  return {
    header: {
      display: "flex",
      alignItems: "center",
      background: "#242424",
      color: "#FFFFFF",
    },
    current: {
      height: "112px",
      padding: "16px 0",
      background: "#242424",
      color: "#FFFFFF",
      borderBottomRightRadius: "16px",
      borderBottomLeftRadius: "16px",
    },
    currentBox: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    currentValue: {
      fontSize: "40px",
      color: "#ffc107",
    },
    currentStatus: {
      color: "#ffc107",
      margin: 0,
    },
    menuYear: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px",
      color: "#555555",
    },
    card: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "0 16px",
      padding: "16px",
    },
    boxLeft: {
      textAlign: "left",
    },
  };
});
const Das = () => {
  const classes = useStyles();

  return (
    <body>
      <header className={classes.header}>
        <MenuRoundedIcon style={{ padding: "16px 0 0 16px" }} />
        <Titulo texto="Meus pagamentos DAS" />
      </header>

      <main style={{ textAlign: "center" }}>
        <div className={classes.current}>
          <Box className={classes.currentBox}>
            <strong>DAS setembro 2020</strong>
            <strong className={classes.currentValue}>R$53,70</strong>
            <p className={classes.currentStatus}>Em aberto</p>
          </Box>
        </div>
        <Box className={classes.menuYear}>
          <NavigateBeforeIcon />
          <p>2020</p>
          <NavigateNextIcon />
        </Box>
        <Box>
          {das.map((item) => {
            return (
              <div
                className={classes.card}
                style={{ borderLeft: `8px solid ${item.cor}` }}
              >
                <div className={classes.boxLeft}>
                  <strong>{item.mes}</strong>
                  <p>{item.vencimento}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ color: `${item.cor}` }}>{item.status}</p>
                  <p style={{ fontSize: "14px", color: "#555555" }}>
                    {item.value}
                  </p>
                </div>
              </div>
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
