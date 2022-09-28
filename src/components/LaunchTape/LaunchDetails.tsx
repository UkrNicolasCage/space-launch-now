import { Box, Button, Grid, Typography } from "@mui/material";

import styles from "./Launch.module.css";

export const LaunchDetails = () => {
  return (
    <Box>
      <Grid
        container
        textAlign="center"
        spacing={5}
        direction="column"
        alignItems="center"
        marginTop="5rem"
      >
        <Grid item>
          <Typography variant="h2" textTransform="uppercase">
            Falcon 9 Block 5
          </Typography>
        </Grid>
        <Grid item textTransform="capitalize">
          <Box>
            <Typography variant="body1" component="span" fontWeight={700}>
              Destination:{" "}
            </Typography>

            <Typography variant="body1" component="span">
              Low Earth Orbit
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" fontWeight={700} component="span">
              Mission:{" "}
            </Typography>

            <Typography variant="body1" component="span">
              Resupply
            </Typography>
          </Box>
        </Grid>

        <Grid item width="75%">
          Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for
          the reliable and safe transport of satellites and the Dragon
          spacecraft into orbit. The Block 5 variant is the fifth major interval
          aimed at improving upon the ability for rapid reusability.
        </Grid>
        <Grid item>
          <Button variant="contained" size="large">
            See Rocket Details
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
