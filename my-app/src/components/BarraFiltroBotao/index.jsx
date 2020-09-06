import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FilterListIcon from "@material-ui/icons/FilterList";
import DateRangeIcon from "@material-ui/icons/DateRange";

const useStyles = makeStyles(() => {
  return {
    root: {
      height: "80px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    filterButton: {
      padding: "5px 8px",
      margin: "16px 4px",
    },
    icon: {
      paddingRight: "4px",
    },
  };
});

const BarraFiltroBotao = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Button variant="outlined" className={classes.filterButton}>
        7 dias
      </Button>
      <Button variant="outlined" className={classes.filterButton}>
        15 dias
      </Button>
      <Button variant="outlined" className={classes.filterButton}>
        <DateRangeIcon style={{ fontSize: 16 }} className={classes.icon} />
        Período
      </Button>
      <Button variant="outlined" className={classes.filterButton}>
        <FilterListIcon style={{ fontSize: 16 }} className={classes.icon} />
        Filtros
      </Button>
    </Box>
  );
};

export default BarraFiltroBotao;
