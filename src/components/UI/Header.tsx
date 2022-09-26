import React from "react";
import { AppBar, Box, useScrollTrigger } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import toHomeArrow from "../../assets/to-home-arrow.svg";
interface ElevProps {
  children: React.ReactElement;
}

const ElevationScroll = (props: ElevProps) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export const Header = () => {
  const location = useLocation();
  const toHomeLinkStyles =
    location.pathname !== "/" ? styles["to-home-link"] : styles.removed;
  const logoStyles =
    location.pathname !== "/"
      ? styles["logo-align"]
      : styles["logo-align-home"];
  return (
    <>
      <ElevationScroll>
        <AppBar className={styles.header}>
          <NavLink to="/" color="#fff" className={toHomeLinkStyles}>
            <img
              src={toHomeArrow}
              alt="to home arrow"
              className={`${styles["to-home-arrow"]}`}
            />
            <Box component="span" className={styles["to-home-text"]}>
              Back To Home
            </Box>
          </NavLink>
          <img
            src={logo}
            alt="logo"
            className={`${styles.logo} ${logoStyles}`}
          />
        </AppBar>
      </ElevationScroll>
    </>
  );
};
