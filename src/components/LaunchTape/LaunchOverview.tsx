import { Box, Button, Grid, Typography } from "@mui/material";
import { TextBtn } from "../UI/TextBtn";
import { TopicHeader } from "../UI/TopicHeader";

export const LaunchOverview = () => {
  return (
    <Box>
      <Grid
        container
        textAlign="center"
        spacing={2}
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <TopicHeader>overwiew</TopicHeader>
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
          <TextBtn>LAUNCH COMPLEX 39A</TextBtn>
          <TextBtn>LOW EARTH ORBIT</TextBtn>
          <TextBtn>PROBABILITY: 60%</TextBtn>
          <TextBtn>KENNEDY SPACE CENTER, FL, USA</TextBtn>
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
