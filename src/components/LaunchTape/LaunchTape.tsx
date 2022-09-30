import { Skeleton } from "@mui/material";
import { theme } from "../../theme";
import { MediaContainerBottom, MediaContainerTop } from "../Layout/MediaContainer";
import { Tape } from "../Layout/Tape";

import { LaunchDetails } from "./LaunchDetails";
import { LaunchOverview } from "./LaunchOverview";



export const LaunchTape = () => {
  return (
    <Tape style={{ backgroundColor: theme.palette.primary.main }}>
      <MediaContainerTop>
        <Skeleton height="100%" variant="rectangular"></Skeleton>
      </MediaContainerTop>
      <LaunchOverview />
      <LaunchDetails />
      <MediaContainerBottom>
        <Skeleton height="100%" variant="rectangular"></Skeleton>
      </MediaContainerBottom>
    </Tape>
  );
};
