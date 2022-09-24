import React from "react";
import { AppBar, Box, useScrollTrigger } from "@mui/material";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import toHomeArrow from "../../assets/to-home-arrow.svg";
interface Props {
  children: React.ReactElement;
}

const ElevationScroll = (props: Props) => {
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
  return (
    <>
      <ElevationScroll>
        <AppBar className={styles.header}>
          <NavLink to="/" color="#fff" className={styles["to-home-link"]}>
            <img
              src={toHomeArrow}
              alt="to home arrow"
              className={`${styles["to-home-arrow"]}`}
            />
            <Box component="span" className={styles["to-home-text"]}>Back To Home</Box>
          </NavLink>
          <img
            src={logo}
            alt="logo"
            className={`${styles.logo} ${styles["logo-align-home"]}`}
          />
        </AppBar>
      </ElevationScroll>
    </>
  );
};
