import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import styles from "./Event.module.css";

export const EventHero = () => {
  return (
    <Box className={styles.center}>
      <Grid
        container
        className={styles.hero}
        rowSpacing={4}
        direction="column"
        alignContent="center"
        alignItems="center"
      >
        <Grid item width="80%">
          <Typography variant="h1" alignSelf="center">
            CRS-21 Dragon Docking
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" size="small" disabled>
            Dec 6, 2020, 6:17 p.m.
          </Button>
        </Grid>
        <Grid item width="70%">
          <Typography variant="body1">
            Following its launch atop a Falcon 9, the CRS-21 Dragon will
            autonomously dock to the ISS, bringing crew supplies as well as
            experiments.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" size="large">
            Read On Site
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
