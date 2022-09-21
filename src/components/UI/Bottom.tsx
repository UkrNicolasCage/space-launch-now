import { Box, Grid } from "@mui/material";

import logo from "../../assets/logo.svg";
import styles from "./Bottom.module.css"

export const Bottom = () => {
  return (
    <Box className={styles.botom}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={6}>
          <img src={logo} alt="logo" className={styles.logo}/>
        </Grid>
        <Grid item xs={6} textAlign="end">
          <Box component="span" className={styles.copyright}>&copy; 2022 Copyright</Box>
        </Grid>
      </Grid>
    </Box>
  );
};
