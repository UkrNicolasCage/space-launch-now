import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BigBtn } from "../UI/BigBtn";
import { ALHero } from "../Layout/Hero";

import styles from "./MainTape.module.css";
import { Center } from "../Layout/Center";

export const MainHero = () => {
  return (
    <Center>
      <ALHero container rowSpacing={5}>
        <Grid item xs={12}>
          <Typography variant="h1" >
            Upcoming Spaceflight Launches
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={styles.description}>
            View all launches available - including launches from the past and
            utilize powerful search filters.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <BigBtn variant="contained" size="large">
            Show All Launches
          </BigBtn>
        </Grid>
      </ALHero>
    </Center>
  );
};
