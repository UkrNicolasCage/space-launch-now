import { Box, Button, Grid, Typography } from "@mui/material";
import { margin } from "@mui/system";

import styles from "./Launch.module.css";

export const LaunchOverview = () => {
  return (
    <Box>
      <Grid container textAlign="center" spacing={4} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h2" textTransform="uppercase">
            overwiew
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
        <Grid item>
          <Button
            variant="contained"
            size="small"
            style={{
              margin: "0.5rem",
              background:
                "linear-gradient(93.72deg, rgb(142, 45, 226) 9.41%, rgb(74, 0, 224) 86.1%)",
            }}
          >
            LAUNCH COMPLEX 39A
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{
              margin: "0.5rem",
              background:
                "linear-gradient(93.72deg, rgb(142, 45, 226) 9.41%, rgb(74, 0, 224) 86.1%)",
            }}
          >
            LOW EARTH ORBIT
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{
              margin: "0.5rem",
              background:
                "linear-gradient(93.72deg, rgb(142, 45, 226) 9.41%, rgb(74, 0, 224) 86.1%)",
            }}
          >
            PROBABILITY: 60%
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{
              margin: "0.5rem",
              background:
                "linear-gradient(93.72deg, rgb(142, 45, 226) 9.41%, rgb(74, 0, 224) 86.1%)",
            }}
          >
            KENNEDY SPACE CENTER, FL, USA
          </Button>
        </Grid>
        <Grid item width="75%">
          Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for
          the reliable and safe transport of satellites and the Dragon
          spacecraft into orbit. The Block 5 variant is the fifth major interval
          aimed at improving upon the ability for rapid reusability.
        </Grid>
      </Grid>
    </Box>
  );
};
