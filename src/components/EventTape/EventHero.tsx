import { Button, Grid, Skeleton, Typography } from "@mui/material";
import { memo } from "react";
import { useAppSelector } from "../../store";
import { Center } from "../Layout/Center";
import { Hero } from "../Layout/Hero";
import { BigBtn } from "../UI/BigBtn";

interface Props {
  data: {
    name: string;
    date: string;
    description: string;
    siteUrl: string;
  };
}

const EventHero = (props: Props) => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const { data } = props;

  const openSiteHandler = () => {
    window.location.href = data.siteUrl;
  };
  return (
    <Center>
      <Hero container rowSpacing={5} direction="column" justifyContent="center" marginTop="3rem">
        <Grid item>
          {isLoading ? (
            <Skeleton variant="rounded" width="70rem" height="8.5rem" />
          ) : (
            <Typography variant="h1" alignSelf="center">
              {data.name}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isLoading ? (
            <Skeleton variant="rounded" height="3rem" width="20rem" />
          ) : (
            <Button variant="contained" size="small" disabled>
              {data.date}
            </Button>
          )}
        </Grid>
        <Grid item width="70%">
          {isLoading ? (
            <Skeleton variant="rounded" height="6rem" />
          ) : (
            <Typography variant="body1">{data.description}</Typography>
          )}
        </Grid>
        <Grid item>
          <BigBtn variant="contained" size="large" onClick={openSiteHandler}>
            Read On Site
          </BigBtn>
        </Grid>
      </Hero>
    </Center>
  );
};

export default memo(EventHero)