import React, { memo } from "react";
import { AppBar, Box, Slide, useScrollTrigger } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import toHomeArrow from "../../assets/to-home-arrow.svg";

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const location = useLocation();
  const toHomeLinkStyles =
    location.pathname !== "/" ? styles["to-home-link"] : styles.removed;
  const logoStyles =
    location.pathname !== "/"
      ? styles["logo-align"]
      : styles["logo-align-home"];
  return (
    <HideOnScroll>
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
        <img src={logo} alt="logo" className={`${styles.logo} ${logoStyles}`}/>
      </AppBar>
    </HideOnScroll>
  );
};

export default memo(Header);