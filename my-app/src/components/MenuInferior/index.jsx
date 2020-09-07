import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => {
  return {
    root: {
      boxShadow: "0px -2px 4px 0px rgba(36,36,36,0.2)",
      display: "flex",
      justifyContent: "space-around",
    },
    selectedIcon: {
      fontWeight: "bold",
      color: "#242424",
    },
    unselectedIcon: {
      color: "rgba(36,36,36,0.5)",
    },
    link: { textDecoration: "none" },
  };
});

const MenuInferior = () => {
  const classes = useStyles();
  const [value, setValue] = useState("/");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      showLabels
      onChange={handleChange}
      className={classes.root}
    >
      <Link to="/" className={classes.link}>
        <BottomNavigationAction
          label="Transações"
          icon={<FormatListBulletedIcon />}
          className={classes.selectedIcon}
          value={value}
          showLabel
        />
      </Link>
      <Link to="/faturamento" className={classes.link}>
        <BottomNavigationAction
          label="Faturamento"
          icon={<MonetizationOnIcon />}
          className={classes.unselectedIcon}
          value={value}
          showLabel
        />
      </Link>
      <Link to="/das" className={classes.link}>
        <BottomNavigationAction
          label="DAS"
          icon={<ReceiptIcon />}
          className={classes.unselectedIcon}
          value={value}
          showLabel
        />
      </Link>
      <Link to="/objetivos" className={classes.link}>
        <BottomNavigationAction
          label="Objetivos"
          icon={<GpsFixedIcon />}
          className={classes.unselectedIcon}
          value={value}
          showLabel
        />
      </Link>
    </BottomNavigation>
  );
};

export default MenuInferior;
