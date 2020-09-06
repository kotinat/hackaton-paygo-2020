import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

const useStyles = makeStyles(() => {
  return {
    root: {
      boxShadow: "0px -2px 4px 0px rgba(36,36,36,0.2)",
    },
    selectedIcon: {
      fontWeight: "bold",
      color: "#242424",
    },
    unselectedIcon: {
      color: "rgba(36,36,36,0.4)",
    },
  };
});

const MenuInferior = () => {
  const classes = useStyles();
  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        label="Transações"
        icon={<FormatListBulletedIcon />}
        className={classes.selectedIcon}
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="Faturamento"
        icon={<MonetizationOnIcon />}
        className={classes.unselectedIcon}
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="Objetivos"
        icon={<GpsFixedIcon />}
        className={classes.unselectedIcon}
      ></BottomNavigationAction>
    </BottomNavigation>
  );
};

export default MenuInferior;
