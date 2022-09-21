import { Button, colors, Grid, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { theme } from "../components/UI/theme";
import styles from "./Page.module.css";
import btnStyles from "../components/App.module.css";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
   gradient: true;
  }
}

export const MainPg = () => {
  return (
    <Box className={`${styles["main-pg"]} ${styles.page}`}>
      <Box className={styles.center}>
        <Grid container className={styles.hero} rowSpacing={6}>
          <Grid item xs={12}>
            <Typography variant="h1" marginBottom="1.25rem" >
              Upcoming Spaceflight Launches
            </Typography>

            <Typography variant="body1" className={styles.description}>
              View all launches available - including launches from the past and
              utilize powerful search filters.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="gradient"
            >
              Show All Launches
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
