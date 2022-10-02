import { Grid, Skeleton, Typography } from "@mui/material";
import { useAppSelector } from "../../store";
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
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  return (
    <Center>
      <Hero container rowSpacing={3} direction="column">
        <Grid item>
          {isLoading ? (
            <Skeleton variant="rounded" width="40rem" height="4rem" />
          ) : (
            <Typography variant="h1">{props.data.name}</Typography>
          )}
        </Grid>
        <Grid item>
          {isLoading ? (
            <Skeleton variant="rounded" width="20rem" height="2rem" />
          ) : (
            <Typography variant="h3" fontWeight="400">
              {props.data.providerName} ({props.data.provederAbbrev})
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isLoading ? (
            <Skeleton variant="rounded" width="15rem" height="2rem" />
          ) : (
            <Typography variant="h3">{props.data.date}</Typography>
          )}
        </Grid>

        <Grid item marginTop="2rem" color="#c0c0c0" width="80%">
          {isLoading ? (
            <Skeleton variant="rounded" width="50rem" height="8rem" />
          ) : (
            <Typography variant="body1">{props.data.description}</Typography>
          )}
        </Grid>
      </Hero>
    </Center>
  );
};
