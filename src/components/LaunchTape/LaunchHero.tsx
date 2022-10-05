import { Grid, Skeleton, Typography } from "@mui/material";
import { memo } from "react";
import { useAppSelector } from "../../store";
import { Center } from "../Layout/Center";
import { Hero } from "../Layout/Hero";
import Timer from "./Timer";

interface Props {
  data: {
    name: string;
    startTime: string;
  };
}

const LaunchHero = (props: Props) => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const { data } = props;

  const placeHolder = (
    <Skeleton variant="rounded" height="14rem" width="70rem" />
  );

  return (
    <Center>
      <Hero container rowSpacing={3}>
        <Grid item xs={12}>
          {isLoading ? (
            placeHolder
          ) : (
            <Typography variant="h1">{data.name}</Typography>
          )}
        </Grid>
        <Grid item>
          <Typography variant="h3">Go for Launch</Typography>
        </Grid>
        <Grid item xs={12}>
          <Timer time={props.data.startTime}/>
        </Grid>
      </Hero>
    </Center>
  );
};

export default memo(LaunchHero);