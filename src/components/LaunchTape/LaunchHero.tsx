import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { theme } from "../../theme";

import styles from "./Launch.module.css";

export const LaunchHero = () => {
  return (
    <Box className={styles.center}>
      <Grid
        container
        className={styles.hero}
        rowSpacing={3}
        direction="column"
        alignContent="center"
        alignItems="center"
      >
        <Grid item width="100%">
          <Typography variant="h1" alignSelf="center">
            Falcon 9 Block 5 | Dragon CRS-2 SpX-21
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" alignSelf="center">
            Go for Launch
          </Typography>
        </Grid>
        <Grid item  xs={12}>
          <Box bgcolor={theme.palette.secondary.main} padding="2rem 3rem"><Typography variant="h1" alignSelf="center">00 : 00 : 27: 41</Typography></Box>
        </Grid>
      </Grid>
    </Box>
  );
};
