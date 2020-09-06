import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => {
  return {
    root: {
      height: "180px",
      padding: "56px 0px 84px 0px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#242424",
      color: "white",
      borderBottomRightRadius: "56px",
      borderBottomLeftRadius: "56px"
    },
  };
});


const BarraFaturamento = () => {
    const classes = useStyles();
       
    return (
        <Box className={classes.root}>
            
        </Box>
    );
};

export default BarraFaturamento;