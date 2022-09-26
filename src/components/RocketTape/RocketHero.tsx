import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import styles from "./RocketTape.module.css";

export const RocketHero = () => {
  return (
    <Box className={styles.center}>
      <Grid
        container
        className={styles.hero}
        rowSpacing={3}
        direction="column"
        alignContent="center"
      >
        <Grid item>
          <Typography variant="h1">Falcon 9 Block 5</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" fontWeight="400">
            SpaceX (SpX)
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">May 11, 2018</Typography>
        </Grid>
        <Grid item marginTop="2rem" className={styles.description}>
          <Typography variant="body1" textAlign="center">
            Falcon 9 is a two-stage rocket designed and manufactured by SpaceX
            for the reliable and safe transport of satellites and the Dragon
            spacecraft into orbit. The Block 5 variant is the fifth major
            interval aimed at improving upon the ability for rapid reusability.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
