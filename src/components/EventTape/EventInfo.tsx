import { Box, Button, Grid, Skeleton, Typography } from "@mui/material";
import { memo } from "react";
import { useAppSelector } from "../../store";

interface Props {
  data: {
    video: string;
    launchName: string;
    date: string;
    destination: string;
    mission: string;
    description: string;
    img: string;
  };
}

const EventInfo = (props: Props) => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  const { data } = props;

  return (
    <Box textAlign="center">
      <Typography variant="h2" marginBottom="2rem">
        Related Information
      </Typography>
      <Grid container spacing={3} marginBottom="2rem">
        <Grid
          item
          xs={12}
          lg={6}
          overflow="hidden"
          height={{ xs: "26rem", md: "36rem", lg: "26rem", xl: "22.06rem" }}
        >
          {isLoading ? (
            <Skeleton variant="rectangular" height="100%"></Skeleton>
          ) : (
            <img src={data.img} alt="event" height="100%" width="100%" />
          )}
        </Grid>
        <Grid item textAlign="left" xs={12} lg={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  height="1.5rem"
                  width="80%"
                ></Skeleton>
              ) : (
                <Typography variant="h3">{data.launchName}</Typography>
              )}
            </Grid>
            <Grid item marginBottom="1rem">
              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  height="2.5rem"
                  width="50%"
                ></Skeleton>
              ) : (
                <Button variant="contained" size="small">
                  {data.date}
                </Button>
              )}
            </Grid>
            <Grid item>
              <Typography variant="body1" fontWeight={700}>
                Destination:
              </Typography>
              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  height="1rem"
                  width="50%"
                ></Skeleton>
              ) : (
                <Typography variant="body1">{data.destination}</Typography>
              )}
            </Grid>
            <Grid item>
              <Typography variant="body1" fontWeight={700}>
                Mission:
              </Typography>
              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  height="1rem"
                  width="50%"
                ></Skeleton>
              ) : (
                <Typography variant="body1">{data.mission}</Typography>
              )}
            </Grid>
            <Grid item>
              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  height="6rem"
                  width="100%"
                ></Skeleton>
              ) : (
                <Typography variant="body1">{data.description}</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default memo(EventInfo);