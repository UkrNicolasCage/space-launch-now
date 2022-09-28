import { Grid, Typography } from "@mui/material";

import styles from "./RocketTape.module.css";
import icon1 from "../../assets/rocket-icon-1.svg";
import icon2 from "../../assets/rocket-icon-2.svg";
import icon3 from "../../assets/rocket-icon-3.svg";


interface Props {
  data: {
    name: string;
    variant: string;
    fullName: string;
    allias: string;
    minStage: number;
    maxStage: number;
    length: number;
    diametr: number;
    fairlingDiamentr: string;
    family: string;
    launchMass: number;
    thrust: number;
    apogee: number;
    launchCost: string;
    leo: number;
    gto: string;
    directGeo: string;
  };
}

export const RocketInfo = (props: Props) => {
  const {data} = props;
  return (
    <Grid item>
      <Grid container columnGap={10} justifyContent="space-between">
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
              <Typography variant="h6">{data.name}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">variant</Typography>
              <Typography variant="h6">{data.variant}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">full name</Typography>
              <Typography variant="h6">{data.fullName}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Alias</Typography>
              <Typography variant="h6">{data.allias}</Typography>
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
              <Typography variant="h6">{data.minStage}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">max stage</Typography>
              <Typography variant="h6">{data.maxStage}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">length</Typography>
              <Typography variant="h6">{data.length} m</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">diametr</Typography>
              <Typography variant="h6">{data.diametr} m</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">fairing diametr</Typography>
              <Typography variant="h6">-</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">launch mass</Typography>
              <Typography variant="h6">{data.launchMass} T</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">thrust</Typography>
              <Typography variant="h6">{data.thrust} kN</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">apogee (sub-Orbiral)</Typography>
              <Typography variant="h6">{data.apogee} km</Typography>
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
              <img src={icon3} alt="launch icon" />
              <Typography variant="h3" marginTop="2rem">
                PayLoad Capacity
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">launch cost</Typography>
              <Typography variant="h6">-</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">low earth orbit</Typography>
              <Typography variant="h6">{data.leo} kg</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Geostationary Transfer Orbit</Typography>
              <Typography variant="h6">{data.gto} kg</Typography>
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
