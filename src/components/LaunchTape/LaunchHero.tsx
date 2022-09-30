import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { theme } from "../../theme";
import { Center } from "../Layout/Center";
import { Hero } from "../Layout/Hero";
import { Timer } from "./Timer";

export const LaunchHero = () => {
  return (
    <Center>
      <Hero container rowSpacing={3} >
        <Grid item>
          <Typography variant="h1">
            Falcon 9 Block 5 | Dragon CRS-2 SpX-21
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">
            Go for Launch
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Timer/>
        </Grid>
      </Hero>
    </Center>
  );
};
