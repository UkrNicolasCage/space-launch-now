import { Box, Grid, IconButton, Skeleton, Typography } from "@mui/material";
import { useEffect } from "react";

import { useAppDispatch } from "../../../store";
import { useAppSelector } from "../../../store";
import { LaunchCard } from "./LaunchCard";
import { getLaunchesCardsData } from "../../../store/launch-slice";
import loadIcon from "../../../assets/loading-launches.svg";
import styles from "./Launches.module.css";

export const LaunchesCards = () => {
  const dispatch = useAppDispatch();

  const lastIndex = useAppSelector((state) => state.launch.lastIndex);
  const IsLoading = useAppSelector((state) => state.launch.isLoading);
  const launches = useAppSelector((state) => state.launch.launches);

  useEffect(() => {
    if(launches.length === 0){
    dispatch(getLaunchesCardsData());
    }
  }, [dispatch]);

  const loadHandler = () => {
    dispatch(getLaunchesCardsData(lastIndex, 4));
  };

  let placeholder = [];

  for (let i = 0; i < launches.length; i++) {
    placeholder.push(
      <Grid item key={i}>
        <Skeleton variant="rectangular" width={580} height={425} />
      </Grid>
    );
  }

  const cards = launches.map((launch) => {
    
    return (
      <LaunchCard
        key={launch.id}
        id={launch.id}
        logo={launch.logo!}
        launchName={launch.name}
        date={launch.date}
        rocketId={launch.rocketId}
      />
    );
  });

  return (
    <>
      <Grid container columnGap={3} rowGap={8} justifyContent="center">
        {IsLoading ? placeholder : cards}
      </Grid>
      <Box className={styles["load-Btn"]}>
        <IconButton onClick={loadHandler}>
          <img src={loadIcon} alt="load more launches" />
        </IconButton>
        <Typography variant="body1" className={styles.description}>
          Load More
        </Typography>
      </Box>
    </>
  );
};
