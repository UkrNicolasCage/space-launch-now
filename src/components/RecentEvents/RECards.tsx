import { useEffect } from "react";
import {
  Button,
  Card,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";

import styles from "./RecentEvents.module.css";
import { useAppDispatch, useAppSelector } from "../../store";
import { getEventCardsData } from "../../store/event-slice";

export const RECards = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector((state) => state.event.events);
  const isLoading = useAppSelector((state) => state.event.isLoading);
  const lastIndex = useAppSelector((state) => state.event.lastIndex);

  useEffect(() => {
    dispatch(getEventCardsData(lastIndex, "next"));
  }, [dispatch]);


    
  let placeholder = [];

  for(let i = 0; i < 3; i++){
    placeholder.push(
      <Grid item key={i}>
        <Skeleton variant="rectangular" width={380} height={425} />
      </Grid>
    );
  }
  const eventsCards = events.map((event) => {
    return (
      <Grid item key={event.id}>
        <Card className={styles.card}>
          <CardMedia
            component="img"
            sx={{ height: "16.5rem", width: "23.75rem" }}
            image={event.logo}
            width="380px"
          />
          <Button
            variant="contained"
            size="small"
            disabled
            className={styles.date}
          >
            {event.date}
          </Button>
          <Typography variant="h3">{event.name}</Typography>
        </Card>
      </Grid>
    );
  });
  return (
    <Grid container gap="1.25rem" justifyContent="center">
      {isLoading ? placeholder : eventsCards}
    </Grid>
  );
};
