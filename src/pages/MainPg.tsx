import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { theme } from "../components/UI/theme";
import styles from "./Page.module.css";
import { MainTape } from "../components/MainTape/MainTape";
import { MainHero } from "../components/MainTape/MainHero";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    gradient: true;
  }
}

export const MainPg = () => {
  return (
    <>
      <Box className={`${styles.page} ${styles["main-pg"]}`}>
        <MainHero/>
      </Box>
      <Box className={styles.center}>
        <MainTape />
      </Box>
    </>
  );
};
