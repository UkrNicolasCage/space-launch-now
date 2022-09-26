import { Grid, Typography } from "@mui/material";

import styles from "./RocketTape.module.css";
import icon1 from "../../assets/rocket-icon-1.svg";
import icon2 from "../../assets/rocket-icon-2.svg";
import icon3 from "../../assets/rocket-icon-3.svg";

export const RocketInfo = () => {
  return (
    <Grid item>
      <Grid container columnGap={14} justifyContent="space-between">
        <Grid item xs={3}>
          <Grid
            container
            direction="column"
            alignItems="center"
            rowGap={1.5}
            className={styles["main-column"]}
          >
            <Grid item className={styles.icon}>
              <img src={icon1} alt="rocket icon" />
              <Typography variant="h3" marginTop="2rem">
                Family
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">name</Typography>
              <Typography variant="h6">falcon 9 Block 5</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">variant</Typography>
              <Typography variant="h6">Block 5</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">full name</Typography>
              <Typography variant="h6">falcon 9 Block 5</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Alias</Typography>
              <Typography variant="h6">-</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid
            container
            direction="column"
            alignItems="center"
            className={styles["main-column"]}
            rowGap={1.5}
          >
            <Grid item className={styles.icon}>
              <img src={icon2} alt="docs icon" />
              <Typography variant="h3" marginTop="2rem">
                Specifications
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">minimum stage</Typography>
              <Typography variant="h6">1</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">max stage</Typography>
              <Typography variant="h6">2</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">length</Typography>
              <Typography variant="h6">70.0 m</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">diametr</Typography>
              <Typography variant="h6">3.65 m</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">fairing diametr</Typography>
              <Typography variant="h6">5.2 T</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">launch mass</Typography>
              <Typography variant="h6">249 T</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">thrust</Typography>
              <Typography variant="h6">7607 kN</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">apogee (sub-Orbiral)</Typography>
              <Typography variant="h6">200 km</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item  xs={3}>
          <Grid
            container
            direction="column"
            alignItems="center"
            className={styles["main-column"]}
            rowGap={1.5}
          >
            <Grid item className={styles.icon}>
              <img src={icon3} alt="launch icon" />
              <Typography variant="h3" marginTop="2rem">
                PayLoad Capacity
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">launch cost</Typography>
              <Typography variant="h6">$52,000,000</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">low earth orbit</Typography>
              <Typography variant="h6">22800 kg</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Geostationary Transfer Orbit</Typography>
              <Typography variant="h6">8300 kg</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Direct Geostationary</Typography>
              <Typography variant="h6">-</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Sub-Synchronous Capacity</Typography>
              <Typography variant="h6">-</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
