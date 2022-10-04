import { Skeleton } from "@mui/material";
import YouTube, { YouTubeProps } from "react-youtube";
import { getURLParameter } from "../../helpers/getUrlParam";
import { useAppSelector } from "../../store";
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
    video: string | null;
  };
}


export const LaunchTape = (props: Props) => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  const { overview, details, video } = props.data;
  let videoId = "";
  if (video !== undefined) {
    videoId = video === null ? "" : getURLParameter(video as string, "v");
  }


  return (
    <Tape style={{ backgroundColor: theme.palette.primary.main }}>
      {video === null ? (
        " "
      ) : (
        <MediaContainerTop>
          {isLoading || videoId === "" ? (
            <Skeleton height="100%" variant="rectangular"></Skeleton>
          ) : (
            <YouTube videoId={videoId} style={{overflow: "hidden"}}/>
          )}
        </MediaContainerTop>
      )}
      <LaunchOverview data={overview} />
      <LaunchDetails data={details} />
      <MediaContainerBottom>
        <Skeleton height="100%" variant="rectangular"></Skeleton>
      </MediaContainerBottom>
    </Tape>
  );
};
