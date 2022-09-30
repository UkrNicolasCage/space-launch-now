import { Grid, Typography } from "@mui/material";
import { Center } from "../Layout/Center";
import { Hero } from "../Layout/Hero";

interface Props {
  data: {
    name: string;
    description: string;
    date: string;
    providerName: string;
    provederAbbrev: string;
  };
}

export const RocketHero = (props: Props) => {
  return (
    <Center>
      <Hero container rowSpacing={3} direction="column">
        <Grid item>
          <Typography variant="h1">{props.data.name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" fontWeight="400">
            {props.data.providerName} ({props.data.provederAbbrev})
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">{props.data.date}</Typography>
        </Grid>
        <Grid item marginTop="2rem" color="#c0c0c0" width="80%">
          <Typography variant="body1">{props.data.description}</Typography>
        </Grid>
      </Hero>
    </Center>
  );
};
