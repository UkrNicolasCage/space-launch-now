import { useEffect } from "react";
import {
  Button,
  Card,
  CardMedia,
  Grid,
  Skeleton,
  styled,
  Typography,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../store";
import { getEventCardsData } from "../../store/event-slice";
import { useNavigate } from "react-router-dom";
import { LinkLabel } from "../UI/LinkText";

export const RECards = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const events = useAppSelector((state) => state.event.events);
  const isLoading = useAppSelector((state) => state.event.isLoading);
  const lastIndex = useAppSelector((state) => state.event.lastIndex);
  const AdaptCard = styled(Card)(({ theme }) => ({
    maxWidth: "23rem",
    display: "grid",
    justifyContent: "flex-start",
    gridGap: "1rem",
    paddingBottom: "1rem",
  }));
  
  let placeholder = [];
  for (let i = 0; i < 3; i++) {
    placeholder.push(
      <Grid item key={i}>
        <Skeleton variant="rectangular" width={380} height={425} />
      </Grid>
    );
  }
  useEffect(() => {
    dispatch(getEventCardsData(lastIndex, "next"));
  }, [dispatch]);

  const eventsCards = events.map((event) => {
    const moveToEventHandler = () => {
      navigate("/event/" + event.id, { state: {}});
    };

    return (
      <Grid item key={event.id} marginBottom="4rem">
        <AdaptCard>
          <CardMedia
            component="img"
            sx={{ height: "16.5rem" }}
            image={event.logo}
            onClick={moveToEventHandler}
          />
          <Button
            variant="contained"
            size="small"
            disabled
            style={{ justifySelf: "flex-start" }}
          >
            {event.date}
          </Button>
          <LinkLabel onClick={moveToEventHandler}>
            <Typography variant="h3" width="80">
              {event.name}
            </Typography>
          </LinkLabel>
        </AdaptCard>
      </Grid>
    );
  });
  return (
    <Grid container gap="1.25rem" justifyContent="center">
      {isLoading ? placeholder : eventsCards}
    </Grid>
  );
};
