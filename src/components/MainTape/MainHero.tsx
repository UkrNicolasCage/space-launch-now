import { Grid, Typography } from "@mui/material";
import { BigBtn } from "../UI/BigBtn";
import { ALHero } from "../Layout/Hero";
import { Link } from "react-scroll";

import { Center } from "../Layout/Center";

export const MainHero = () => {
  const toLaunchesHandler = () => {};

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
          <Link
            to="launches"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <BigBtn
              variant="contained"
              size="large"
              onClick={toLaunchesHandler}
            >
              Show All Launches
            </BigBtn>
          </Link>
        </Grid>
      </ALHero>
    </Center>
  );
};
