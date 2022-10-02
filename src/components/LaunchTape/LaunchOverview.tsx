import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { useAppSelector } from "../../store";
import { BodyPlaceholder } from "../RocketTape/BodyPlaceholder";
import { TextBtn } from "../UI/TextBtn";
import { TopicHeader } from "../UI/TopicHeader";

interface Props {
  data: {
    destination: string;
    mission: string;
    decription: string;
    complexName: string;
    centerName: string;
    probability: string;
  };
}

export const LaunchOverview = (props: Props) => {
  const { data } = props;
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  return (
    <Box>
      <Grid
        container
        textAlign="center"
        spacing={2}
        direction="column"
        alignItems="center"
      >
        {isLoading ? (
          <BodyPlaceholder variant="rounded" height="20rem" width="60rem" />
        ) : (
          <>
            <Grid item>
              <TopicHeader>overwiew</TopicHeader>
            </Grid>
            <Grid item textTransform="capitalize">
              <Box>
                <Typography variant="body1" component="span" fontWeight={700}>
                  Destination:{" "}
                </Typography>

                <Typography variant="body1" component="span">
                  {data.destination}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" fontWeight={700} component="span">
                  Mission:{" "}
                </Typography>

                <Typography variant="body1" component="span">
                  {data.mission}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <TextBtn>{data.complexName}</TextBtn>
              <TextBtn>{data.mission}</TextBtn>
              <TextBtn>PROBABILITY: {data.probability}</TextBtn>
              <TextBtn>{data.centerName}</TextBtn>
            </Grid>
            <Grid item width="75%">
              <Typography>{data.decription}</Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};
