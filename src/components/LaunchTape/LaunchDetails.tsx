import { Box, Grid, Typography } from "@mui/material";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store";
import { BodyPlaceholder } from "../RocketTape/BodyPlaceholder";
import { BigBtn } from "../UI/BigBtn";
import { TopicHeader } from "../UI/TopicHeader";

interface Props {
  data: {
    name: string;
    familly: string;
    configuration: string;
    description: string;
    rocketId: number;
  };
}

const LaunchDetails = (props: Props) => {
  const { data } = props;
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const navigate = useNavigate();

  const seeRocketHandler = ()=> {
    navigate("/rocket/" + data.rocketId)
  }

  return (
    <Box>
      <Grid
        container
        textAlign="center"
        spacing={2}
        direction="column"
        alignItems="center"
        marginTop="5rem"
      >
        {isLoading ? (
          <BodyPlaceholder variant="rounded" height="20rem" width="60rem" />
        ) : (
          <>
            <Grid item>
              <TopicHeader>{data.name}</TopicHeader>
            </Grid>
            <Grid item textTransform="capitalize">
              <Box>
                <Typography variant="body1" component="span" fontWeight={700}>
                  Familly:
                </Typography>

                <Typography variant="body1" component="span">
                  {data.familly}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" fontWeight={700} component="span">
                  Configuration: 
                </Typography>

                <Typography variant="body1" component="span">
                  {data.configuration}
                </Typography>
              </Box>
            </Grid>

            <Grid item width="75%">
              <Typography>{data.description}</Typography>
            </Grid>
            <Grid item>
              <BigBtn variant="contained" size="large" onClick={seeRocketHandler}>
                See Rocket Details
              </BigBtn>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default memo(LaunchDetails);