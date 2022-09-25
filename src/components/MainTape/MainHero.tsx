import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import styles from "./MainTape.module.css";

export const MainHero = () => {
  return (
    <Box className={styles.center}>
      <Grid container className={styles.hero} rowSpacing={7}>
        <Grid item xs={12}>
          <Typography variant="h1" marginBottom="1.25rem">
            Upcoming Spaceflight Launches
          </Typography>
          <br/>
          <Typography variant="body1" className={styles.description}>
            View all launches available - including launches from the past and
            utilize powerful search filters.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" size="large">
            Show All Launches
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
