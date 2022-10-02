import { Skeleton } from "@mui/material";
import { theme } from "../../theme";
import {
  MediaContainerBottom,
  MediaContainerTop,
} from "../Layout/MediaContainer";
import { Tape } from "../Layout/Tape";

import { LaunchDetails } from "./LaunchDetails";
import { LaunchOverview } from "./LaunchOverview";

interface Props {
  data: {
    overview: {
      destination: string;
      mission: string;
      decription: string;
      complexName: string;
      centerName: string;
      probability: string;
    };
    details: {
      rocketId: number;
      name: string;
      familly: string;
      configuration: string;
      description: string;
    };
  };
}

export const LaunchTape = (props: Props) => {
  const { overview, details } = props.data;
  console.log(details);
  return (
    <Tape style={{ backgroundColor: theme.palette.primary.main }}>
      <MediaContainerTop>
        <Skeleton height="100%" variant="rectangular"></Skeleton>
      </MediaContainerTop>
      <LaunchOverview data={overview} />
      <LaunchDetails data={details} />
      <MediaContainerBottom>
        <Skeleton height="100%" variant="rectangular"></Skeleton>
      </MediaContainerBottom>
    </Tape>
  );
};
