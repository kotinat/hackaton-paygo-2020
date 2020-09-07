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
    cor: "#00bfa5",
  },
  {
    id: 2,
    mes: "Fevereiro",
    vencimento: "20/02/2020",
    status: "ATRASADO",
    cor: "#c62828",
  },
  {
    id: 3,
    mes: "Março",
    vencimento: "20/03/2020",
    status: "PAGO",
    cor: "#00bfa5",
  },
  {
    id: 4,
    mes: "Abril",
    vencimento: "20/04/2020",
    status: "ATRASADO",
    cor: "#c62828",
  },
  {
    id: 5,
    mes: "Maio",
    vencimento: "20/05/2020",
    status: "PAGO",
    cor: "#00bfa5",
  },
  {
    id: 6,
    mes: "Junho",
    vencimento: "20/06/2020",
    status: "PAGO",
    cor: "#00bfa5",
  },
  {
    id: 7,
    mes: "Julho",
    vencimento: "20/07/2020",
    status: "PAGO",
    cor: "#00bfa5",
  },
  {
    id: 8,
    mes: "Agosto",
    vencimento: "20/08/2020",
    status: "PAGO",
    cor: "#00bfa5",
  },
  {
    id: 9,
    mes: "Setembro",
    vencimento: "20/09/2020",
    status: "EM ABERTO",
    cor: "#ffd54f",
  },
];

const useStyles = makeStyles(() => {
  return {
    header: { display: "flex", alignItems: "center", paddingLeft: "16px" },
    current: {
      height: "96px",
      padding: "8px",
      borderRadius: "8px",
      border: "1px solid #cfd8dc",
    },
    currentBox: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    currentValue: {
      fontSize: "40px",
      color: "#00bfa5",
    },
    currentStatus: {
      color: "#00bfa5",
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
      margin: "2px 16px",
      padding: "16px",
      borderRadius: "4px",
      border: "1px solid #cfd8dc",
    },
    boxLeft: {
      paddingLeft: "8px",
      textAlign: "left",
    },
  };
});
const Das = () => {
  const classes = useStyles();

  return (
    <body>
      <header className={classes.header}>
        <MenuRoundedIcon />
        <Titulo texto="Meus Das" />
      </header>
      <main style={{ textAlign: "center" }}>
        <div className={classes.current}>
          <Box className={classes.currentBox}>
            <strong>DAS setembro 2020</strong>
            <strong className={classes.currentValue}>R$53,70</strong>
            <p className={classes.currentStatus}>Pago</p>
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

                <p style={{ color: `${item.cor}` }}>{item.status}</p>
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
