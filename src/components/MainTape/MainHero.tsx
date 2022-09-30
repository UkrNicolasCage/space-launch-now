import { Grid, Typography } from "@mui/material";
import { BigBtn } from "../UI/BigBtn";
import { ALHero } from "../Layout/Hero";

import { Center } from "../Layout/Center";

export const MainHero = () => {
  return (
    <Center>
      <ALHero container rowSpacing={5}>
        <Grid item xs={12}>
          <Typography variant="h1">Upcoming Spaceflight Launches</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1" color="#c0c0c0">
            View all launches available - including launches from the past and
            utilize powerful search filters.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <BigBtn variant="contained" size="large" >
            Show All Launches
          </BigBtn>
        </Grid>
      </ALHero>
    </Center>
  );
};
