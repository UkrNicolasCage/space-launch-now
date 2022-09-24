import { Grid } from "@mui/material";
import { LaunchCard } from "./LaunchCard";
export const LaunchesCards = () => {
  return (
    <Grid container rowSpacing={6} columnSpacing={3}>
      <Grid item>
        <LaunchCard />
      </Grid>
      <Grid item>
        <LaunchCard />
      </Grid>
      <Grid item>
        <LaunchCard />
      </Grid>
      <Grid item>
        <LaunchCard />
      </Grid>
      <Grid item>
        <LaunchCard />
      </Grid>
      <Grid item>
        <LaunchCard />
      </Grid>
    </Grid>
  );
}